import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Filter from "../components/Filter";
import Banner from "../components/Banner";
import Card from "../components/Card";
import banner from "../assets/img/Banner/Background-2.webp";
import { useRef } from "react";
import Pagination from "../components/Pagination";

const FavoritePage = () => {
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
          filter={[
            "Harga Terendah",
            "Harga Tertinggi",
            "Ulasan Terbaik",
            "Pesanan Terbanyak",
          ]}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 mb-10">
          {Array.from({ length: 16 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
        <Pagination />
      </main>
      <Footer />
    </div>
  );
};

export default FavoritePage;
