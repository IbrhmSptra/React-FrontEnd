/* eslint-disable react-hooks/exhaustive-deps */
import DetailPemesananLayout from "../layouts/SummaryOrderLayout";
import Navbar from "../layouts/PageLayouts/Navbar";
import Sidebar from "../layouts/PageLayouts/Sidebar";
import Footer from "../layouts/PageLayouts/Footer";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailRecipe } from "../services/supabase.service";

const DetailPemesanan = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    getDetailRecipe((data) => {
      setDetail(data);
    }, id);
  }, []);
  const pemesananSearch = useRef(null);
  return (
    <>
      <Navbar ref={pemesananSearch} />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <DetailPemesananLayout data={detail} />
      </main>
      <Footer />
    </>
  );
};

export default DetailPemesanan;
