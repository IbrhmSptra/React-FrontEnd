/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../layouts/PageLayouts/Footer";
import Navbar from "../layouts/PageLayouts/Navbar";
import Sidebar from "../layouts/PageLayouts/Sidebar";
import DetailTransaksiLayout from "../layouts/OrderDetailLayout";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const DetailTransaksi = () => {
  const { id } = useParams();

  const transaksiSearch = useRef(null);
  return (
    <>
      <Navbar ref={transaksiSearch} />
      <Sidebar />
      <main className=" pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <DetailTransaksiLayout id={id} />
      </main>
      <Footer />
    </>
  );
};

export default DetailTransaksi;
