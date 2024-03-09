import Detail1 from "../components/DetailPertama";
import Detail2 from "../components/DetailKedua";
import Menu from "../components/Menu";

const DetailTransaksi = ({ data, recipe }) => {
  return (
    <>
      <div className="relative mb-20">
        <p className="font-semibold text-3xl mb-10">Detail Transaksi</p>
        <div className="space-y-10 md:flex md:gap-10 md:space-y-0">
          <div className="w-full bg-white border shadow-xl rounded-xl ">
            {data && <Menu img={data.web_img} />}
            {data && <Detail1 data={data} jumlah={recipe.length} />}
          </div>
          <div className="w-full bg-white border shadow-xl rounded-xl py-4 px-6">
            <Detail2 data={recipe} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailTransaksi;
