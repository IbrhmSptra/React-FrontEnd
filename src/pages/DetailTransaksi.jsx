import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Detail1 from "../components/DetailPertama";
import Detail2 from "../components/DetailKedua";
import Menu from "../components/Menu";
import Sidebar from "../layouts/Sidebar";
import Detail from "../layouts/Detail";

const DetailTransaksi = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className=" py-8 px-4 sm:px-8 md:px-12 xl:px-40">
        <Detail/>
      </main>
      <Footer />
    </>
  );
};

export default DetailTransaksi;
