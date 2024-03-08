import DetailPemesananLayout from "../layouts/DetailPemesanan";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import { useRef } from "react";

const DetailPemesanan = () => {
  const pemesananSearch = useRef(null);
  return (
    <>
      <Navbar ref={pemesananSearch} />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <DetailPemesananLayout />
      </main>
      <Footer />
    </>
  );
};

export default DetailPemesanan;
