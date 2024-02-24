import jepang from "../assets/img/Jepang.png";
import korea from "../assets/img/Korea.png";
import nusantara from "../assets/img/Nusantara.png";
import western from "../assets/img/Western.png";
import KategoriCard from "../components/KategoriCard";

const Kategori = () => {
  const kategori = [
    {
      img: jepang,
      nama: "Jepang",
    },
    {
      img: korea,
      nama: "Korea",
    },
    {
      img: nusantara,
      nama: "Nusantara",
    },
    {
      img: western,
      nama: "Western",
    },
  ];
  return (
    <div className="mt-8">
      <h1 className="font-medium text-lg xl:text-xl">Kategori</h1>
      <div className="mt-2 space-y-4 sm:space-y-0 sm:flex sm:gap-x-2 lg:gap-x-4 xl:gap-x-6">
        {kategori.map((value, i) => (
          <KategoriCard
            link={`/Kategori/${value.nama}`}
            key={i}
            img={value.img}
            kategori={value.nama}
          />
        ))}
      </div>
    </div>
  );
};

export default Kategori;
