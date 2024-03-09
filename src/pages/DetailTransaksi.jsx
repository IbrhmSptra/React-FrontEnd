/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import DetailTransaksiLayout from "../layouts/DetailTransaksi";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe, getTransaction } from "../services/supabase.service";

const DetailTransaksi = () => {
  const [data, setData] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getTransaction((data) => {
      setData(data);
    }, id);
  }, []);

  useEffect(() => {
    if (data) {
      getRecipe((data) => {
        setRecipe(data);
      }, id);
    }
  }, []);

  const transaksiSearch = useRef(null);
  return (
    <>
      <Navbar ref={transaksiSearch} />
      <Sidebar />
      <main className=" pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        {data && <DetailTransaksiLayout data={data} recipe={recipe} />}
      </main>
      <Footer />
    </>
  );
};

export default DetailTransaksi;
