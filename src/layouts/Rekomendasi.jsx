import CardFood from "../components/Card/CardFood";
import useSWR from "swr";
import axios from "axios";
import SkeletonRekomendasi from "./Skeleton/SkeletonRekomendasi";

const Rekomendasi = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/food/random?limit=12`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );
  if (error) {
    console.error("Fetch Error :", error?.response.data.message);
  }

  return (
    <div className="mt-8">
      <h1 className="font-medium text-lg xl:text-xl">Rekomendasi</h1>
      <div className="mt-2 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-4">
        {isLoading ? (
          <SkeletonRekomendasi />
        ) : (
          data.data.map((value, i) => <CardFood key={i} data={value} />)
        )}
      </div>
    </div>
  );
};

export default Rekomendasi;
