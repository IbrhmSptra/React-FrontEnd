/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../layouts/PageLayouts/Footer";
import Navbar from "../layouts/PageLayouts/Navbar";
import Sidebar from "../layouts/PageLayouts/Sidebar";
import Filter from "../components/Input/Filter";
import Banner from "../components/Header/HeaderBanner";
import { useRef, useState } from "react";
import banner from "../assets/img/Banner/Background-2.webp";
import CardRiwayat from "../components/Card/CardRiwayat";
import Pagination from "../components/Input/Pagination";
import useSWR from "swr";
import { fetchGet } from "../services/axios.service";

const RiwayatPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const riwayatSearch = useRef(null);
  const [page, setPage] = useState(1);

  // Filter Feature
  const filter = ["Terbaru", "Terlama", "Harga Terendah", "Harga Tertinggi"];
  const [selectedFilter, setSelectedFilter] = useState(filter[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // ------------------------------
  const sortMethods = {
    "Harga Terendah": "&price=asc",
    "Harga Tertinggi": "&price=desc",
    Terbaru: "&date=desc",
    Terlama: "&date=asc",
  };

  //fetch api
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/order?page=${page}${sortMethods[selectedFilter]}`,
    fetchGet
  );
  if (error) {
    console.error("Fetch Error :", error?.response.data.message);
  }

  return (
    <div className="font-poppins">
      <Navbar ref={riwayatSearch} />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <Banner
          src={banner}
          addClass="bg-primary"
          textColor="text-black"
          text="Riwayat"
        />
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
          toggleDropdown={toggleDropdown}
          selectedFilter={selectedFilter}
          isOpen={isOpen}
        />
        {isLoading ? (
          <div className="min-h-screen">
            <h1 className="text-center text-headline text-2xl w-full py-20 animate-pulse  ">
              Memuat Riwayat Order Anda....
            </h1>
          </div>
        ) : (
          <div className="space-y-4 mt-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
            {data ? (
              data.data.map((value, index) => {
                return <CardRiwayat data={value} key={index} />;
              })
            ) : (
              <h1 className="text-center text-headline w-full py-20">
                Riwayat Order Kosong
              </h1>
            )}
          </div>
        )}
        <Pagination totalPage={data?.totalPages} setPage={setPage} />
      </main>
      <Footer />
    </div>
  );
};

export default RiwayatPage;
