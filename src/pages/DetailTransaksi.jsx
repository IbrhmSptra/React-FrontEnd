import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Detail from "../layouts/Detail";
import { useRef } from "react";

const DetailTransaksi = () => {
  const transaksiSearch = useRef(null);
  return (
    <>
      <Navbar ref={transaksiSearch} />
      <Sidebar />
      <main className=" pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <Detail />
      </main>
      <Footer />
    </>
  );
};

export default DetailTransaksi;
