/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useEffect, useRef, useState } from "react";
import Banner from "../components/KategoriBanner";
import { useParams } from "react-router-dom";
import { getFoodbyKategori } from "../services/supabase.service";
import Pagination from "../components/Pagination";

const KategoriPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  // Get data from supabase
  useEffect(() => {
    getFoodbyKategori((data) => {
      setData(data);
    }, id);
  }, []);

  //Filter Feature
  const filter = [
    "Harga Terendah",
    "Harga Tertinggi",
    "Ulasan Terbaik",
    "Pesanan Terbanyak",
  ];
  const [selectedFilter, setSelectedFilter] = useState(filter[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const sortMethods = {
    "Harga Terendah": (a, b) => a.harga - b.harga,
    "Harga Tertinggi": (a, b) => b.harga - a.harga,
  };
  // -----------

  const KategoriSearch = useRef(null);
  return (
    <div className="font-poppins">
      <Navbar ref={KategoriSearch} />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        {data && (
          <Banner
            src={data.kategori.web_header_img}
            textColor="text-white drop-shadow-2xl"
            text={data.kategori.kategori}
          />
        )}
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
          toggleDropdown={toggleDropdown}
          selectedFilter={selectedFilter}
          isOpen={isOpen}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 mb-10">
          {data &&
            data.food
              .sort(sortMethods[selectedFilter])
              .map((value, i) => <Card key={i} data={value} />)}
        </div>
        <Pagination />
      </main>
      <Footer />
    </div>
  );
};

export default KategoriPage;
