import Detail1 from "../components/DetailPertama";
import Detail2 from "../components/DetailKedua";
import Menu from "../components/Menu";

const Detail = () => {
  return (
    <>
      <div className="relative mb-20">
      <p class="font-semibold text-3xl ml-40 mt-20">Detail Transaksi</p>
        <div className="flex place-content-center mr-40">
          <div className="w-full bg-white shadow-md rounded-xl mr-4 ml-40 mt-16">
          <Menu />
          <Detail1 />
          </div>
          <div className="w-full bg-white shadow-md rounded-xl mr-4 ml-40 mt-16 px-4 py-4">
          <Detail2 />
          </div>
        </div>        
      </div>
    </>
  );
};

export default Detail;
