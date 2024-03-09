/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Filter from "../components/Filter";
import Banner from "../components/Banner";
import Card from "../components/Card";
import banner from "../assets/img/Banner/Background-2.webp";
import { useEffect, useRef, useState } from "react";
import Pagination from "../components/Pagination";
import { getAllFavorite } from "../services/supabase.service";

const FavoritePage = () => {
  const user = JSON.parse(
    localStorage.getItem("sb-qqnkeeuttacyfctgebzc-auth-token")
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllFavorite((data) => {
      data.sort((a, b) => a.harga - b.harga);
      setData(data);
    }, user.user.id);
  }, [data]);

  //---------------- filter *bug because render loop on useEffect Above
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
      data.sort((a, b) => a.harga - b.harga);
      setData(data);
    } else if (data && selectedFilter == "Harga Terendah") {
      data.sort((a, b) => b.harga - a.harga);
      setData(data);
    }
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //---------------------

  const favoriteSearch = useRef(null);
  return (
    <div className="font-poppins">
      <Navbar ref={favoriteSearch} />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
<<<<<<< HEAD
        <Banner
          src={banner}
          addClass="bg-primary"
          textColor="text-black"
          text="Favorite"
=======
        <Banner title="Favorite" />
        <Filter
          filter={[
            "Harga Terendah",
            "Harga Tertinggi",
            "Ulasan Terbaik",
            "Pesanan Terbanyak",
          ]}
>>>>>>> feat/RiwayatPage
        />
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
          toggleDropdown={toggleDropdown}
          selectedFilter={selectedFilter}
          isOpen={isOpen}
        />

        {data.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 mb-10">
            {data.map((value, index) => {
              const data = {
                id: value.id_food,
                food: value.food,
                web_img: value.web_img,
                harga: value.harga,
              };
              return <Card key={index} data={data} />;
            })}
          </div>
        ) : (
          <h1 className="text-center w-full py-20">Bookmark Kosong</h1>
        )}

        <Pagination />
      </main>
      <Footer />
    </div>
  );
};

export default FavoritePage;
