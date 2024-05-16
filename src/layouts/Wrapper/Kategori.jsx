import KategoriCard from "../../components/Card/KategoriCard";
import useSWR from "swr";
import SkeletonCategory from "../Skeleton/SkeletonCategory";
import { fetchGet } from "../../services/axios.service";

const Kategori = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/categories`,
    fetchGet
  );
  if (error) {
    console.error("Fetch Error :", error?.response.data.message);
  }

  return (
    <div className="mt-8">
      <h1 className="font-medium text-lg xl:text-xl">Kategori</h1>
      <div className="mt-2 space-y-4 sm:space-y-0 sm:flex sm:gap-x-2 lg:gap-x-4 xl:gap-x-6">
        {isLoading ? (
          <SkeletonCategory />
        ) : (
          data.data.map((value, i) => (
            <KategoriCard
              link={`/kategoripage/${value.id}`}
              key={i}
              img={value.image}
              kategori={value.name}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Kategori;
