import Detail1 from "../components/DetailPertama";
import Detail2 from "../components/DetailKedua";
import Menu from "../components/Menu";

const Detail = () => {
  return (
    <>
      <main className=" py-8 flex space-x-4 sm:px-8 md:px-12">
        <div className="w-2/5 bg-white shadow-md rounded-xl">
        <Menu />
        <Detail1 />
        </div>
        <div className="w-2/5 bg-white shadow-md rounded-xl">
        <Detail2 />
        </div>
      </main>
    </>
  );
};

export default Detail;
