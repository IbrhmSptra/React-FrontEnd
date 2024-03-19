/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Filter from "../components/Filter";
import Banner from "../components/Banner";
import { useEffect, useRef, useState } from "react";
import CardRiwayat from "../components/CardRiwayat";
import { getAllTransaction } from "../services/supabase.service";
import Pagination from "../components/Pagination";

const RiwayatPage = () => {
  const riwayatSearch = useRef(null);
  const [data, setData] = useState([]);
  const user = JSON.parse(
    localStorage.getItem("sb-qqnkeeuttacyfctgebzc-auth-token")
  );

  //filter **Bug harus Double Click
  const filter = ["Terbaru", "Terlama", "Harga Terendah", "Harga Tertinggi"];
  const [selectedFilter, setSelectedFilter] = useState(filter[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    if (data && selectedFilter == "Harga Tertinggi") {
      data.sort((a, b) => a.harga - b.harga);
      setData(data);
    } else if (data && selectedFilter == "Harga Terendah") {
      data.sort((a, b) => b.harga - a.harga);
      setData(data);
    } else if (data && selectedFilter == "Terbaru") {
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setData(data);
    } else if (data && selectedFilter == "Terlama") {
      data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      setData(data);
    }
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    getAllTransaction((data) => {
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setData(data);
    }, user.user.id);
  }, []);

  return (
    <div className="font-poppins">
      <Navbar ref={riwayatSearch} />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <Banner title="Riwayat" />
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
          toggleDropdown={toggleDropdown}
          selectedFilter={selectedFilter}
          isOpen={isOpen}
        />
        {data.length > 0 ? (
          <div className="space-y-4 mt-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
            {data.map((value, index) => {
              return <CardRiwayat data={value} key={index} />;
            })}
          </div>
        ) : (
          <h1 className="text-center w-full py-20">Transaksi Kosong</h1>
        )}
        <Pagination />
      </main>
      <Footer />
    </div>
  );
};

export default RiwayatPage;
