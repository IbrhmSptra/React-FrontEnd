/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../../layouts/PageLayouts/Footer";
import Navbar from "../../layouts/PageLayouts/Navbar";
import Sidebar from "../../layouts/PageLayouts/Sidebar";
import Filter from "../../components/Input/Filter";
import Banner from "../../components/Header/HeaderBanner";
import Card from "../../components/Card/CardPage";
import banner from "../../assets/img/Banner/Background-2.webp";
import { useRef, useState } from "react";
import Pagination from "../../components/Input/Pagination";
import useSWR from "swr";
import { fetchGet } from "../../services/axios.service";

const FavoritePage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [page, setPage] = useState(1);

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
  // -----------

  const sortMethods = {
    "Harga Terendah": "&price=asc",
    "Harga Tertinggi": "&price=desc",
    "Ulasan Terbaik": "&rating=desc",
    "Pesanan Terbanyak": "&order=desc",
  };

  //fetch api
  const { data, error, isLoading, mutate } = useSWR(
    `${API_URL}/api/bookmark?page=${page}${sortMethods[selectedFilter]}`,
    fetchGet
  );
  if (error) {
    console.error("Fetch Error :", error?.response.data.message);
  }

  const favoriteSearch = useRef(null);
  return (
    <div className="font-poppins">
      <Navbar ref={favoriteSearch} />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <Banner
          src={banner}
          addClass="bg-primary"
          textColor="text-black"
          text="Favorite"
        />
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
          toggleDropdown={toggleDropdown}
          selectedFilter={selectedFilter}
          isOpen={isOpen}
        />

        {isLoading ? (
          <div className="min-h-24">
            <h1 className="text-center text-headline text-2xl w-full py-20 animate-pulse  ">
              Memuat Favorite Food Anda....
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 mb-10">
            {data ? (
              data.data.map((value, i) => (
                <Card key={i} data={value} refresh={mutate} />
              ))
            ) : (
              <h1 className="text-center text-headline w-full py-20">
                Bookmark Kosong
              </h1>
            )}
          </div>
        )}

        <Pagination setPage={setPage} totalPage={data?.totalPages} />
      </main>
      <Footer />
    </div>
  );
};

export default FavoritePage;
