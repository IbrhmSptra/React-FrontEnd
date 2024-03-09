/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";
import { getFoodbyKategori } from "../services/supabase.service";
import Pagination from "../components/Pagination";

const KategoriPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  //filter
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
    if (data && selectedFilter == "Harga Tertinggi") {
      data.food.sort((a, b) => a.harga - b.harga);
      setData(data);
    } else if (data && selectedFilter == "Harga Terendah") {
      data.food.sort((a, b) => b.harga - a.harga);
      setData(data);
    }
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Get data from supabase
  useEffect(() => {
    getFoodbyKategori((data) => {
      data.food.sort((a, b) => a.harga - b.harga);
      setData(data);
    }, id);
  }, []);

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
          {data && data.food.map((value, i) => <Card key={i} data={value} />)}
        </div>
        <Pagination />
      </main>
      <Footer />
    </div>
  );
};

export default KategoriPage;
