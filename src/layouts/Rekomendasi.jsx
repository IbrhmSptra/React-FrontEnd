import CardFood from "../components/CardFood";
import { useEffect, useState } from "react";
import { getRekomendasi } from "../services/supabase.service";

const Rekomendasi = () => {
  const [Rekomendasi, setRekomendasi] = useState([]);
  useEffect(() => {
    getRekomendasi((data) => {
      setRekomendasi(data);
    });
  }, []);
  if (Rekomendasi) {
    return (
      <div className="mt-8">
        <h1 className="font-medium text-lg xl:text-xl">Rekomendasi</h1>
        <div className="mt-2 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-4">
          {Rekomendasi.map((value, i) => (
            <CardFood key={i} data={value} />
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Rekomendasi;
