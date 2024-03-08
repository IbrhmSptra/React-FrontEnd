import Detail1 from "../components/DetailPertama";
import Detail2 from "../components/DetailKedua";
import Menu from "../components/Menu";

const DetailTransaksi = () => {
  return (
    <>
      <div className="relative mb-20">
        <p className="font-semibold text-3xl mb-10">Detail Transaksi</p>
        <div className="space-y-10 md:flex md:gap-10 md:space-y-0">
          <div className="w-full bg-white border shadow-xl rounded-xl ">
            <Menu />
            <Detail1 />
          </div>
          <div className="w-full bg-white border shadow-xl rounded-xl py-4 px-6">
            <Detail2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailTransaksi;
