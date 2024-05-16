/* eslint-disable react-hooks/exhaustive-deps */
import DetailPemesananLayout from "../../layouts/Wrapper/SummaryOrderLayout";
import Navbar from "../../layouts/PageLayouts/Navbar";
import Sidebar from "../../layouts/PageLayouts/Sidebar";
import Footer from "../../layouts/PageLayouts/Footer";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchGet } from "../../services/axios.service";
import useSWR from "swr";
import ModalLogout from "../../layouts/Authentication/ModalLogout";
import { useSelector } from "react-redux";

const DetailPemesanan = () => {
  const modalState = useSelector((state) => state.webcontent.modalLogout);
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  //fetch api
  const { data, error } = useSWR(`${API_URL}/api/food/${id}`, fetchGet);
  if (error) {
    console.log("Fetch Error :", error?.response.data.message);
  }

  const pemesananSearch = useRef(null);
  return (
    <>
      {modalState ? <ModalLogout /> : null}
      <Navbar ref={pemesananSearch} />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        {data && <DetailPemesananLayout data={data.data} />}
      </main>
      <Footer />
    </>
  );
};

export default DetailPemesanan;
