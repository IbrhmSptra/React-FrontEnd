/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import ModalLogout from "../../layouts/Authentication/ModalLogout";
import Footer from "../../layouts/PageLayouts/Footer";
import Navbar from "../../layouts/PageLayouts/Navbar";
import Sidebar from "../../layouts/PageLayouts/Sidebar";
import DetailTransaksiLayout from "../../layouts/Wrapper/OrderDetailLayout";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const DetailTransaksi = () => {
  const { id } = useParams();
  const modalState = useSelector((state) => state.webcontent.modalLogout);

  const transaksiSearch = useRef(null);
  return (
    <>
      {modalState ? <ModalLogout /> : null}
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
