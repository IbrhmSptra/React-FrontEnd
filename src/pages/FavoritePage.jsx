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
import { supabase } from "../services/supabase.service";

const FavoritePage = () => {
  const user = JSON.parse(
    localStorage.getItem("sb-qqnkeeuttacyfctgebzc-auth-token")
  );
  const [data, setData] = useState([]);

  //listening if theres insert or delete on favorite database
  supabase
    .channel("custom-all-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "Favorite" },
      () => {
        getAllFavorite((data) => {
          data.sort((a, b) => a.harga - b.harga);
          setData(data);
        }, user.user.id);
      }
    );
  //get data from supabase
  useEffect(() => {
    getAllFavorite((data) => {
      setData(data);
    }, user.user.id);
  }, []);

  // Filter Feature
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
  // ------------------------

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

        {data.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 mb-10">
            {data.sort(sortMethods[selectedFilter]).map((value, index) => {
              const dataFormated = {
                id: value.id_food,
                food: value.food,
                web_img: value.web_img,
                harga: value.harga,
              };
              return <Card key={index} data={dataFormated} arrData={data} />;
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
