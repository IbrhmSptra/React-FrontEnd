import { useEffect, useState } from "react";
import KategoriCard from "../components/KategoriCard";
import { getKategori } from "../services/supabase.service";

const Kategori = () => {
  const [kategori, setKategori] = useState([]);
  useEffect(() => {
    getKategori((data) => {
      setKategori(data);
    });
  }, []);

  return (
    <div className="mt-8">
      <h1 className="font-medium text-lg xl:text-xl">Kategori</h1>
      <div className="mt-2 space-y-4 sm:space-y-0 sm:flex sm:gap-x-2 lg:gap-x-4 xl:gap-x-6">
        {kategori.map((value, i) => (
          <KategoriCard
            link={`/Kategori/${value.id_kategori}`}
            key={i}
            img={value.web_img}
            kategori={value.kategori}
          />
        ))}
      </div>
    </div>
  );
};

export default Kategori;
