import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Filter from "../components/Filter";
import Banner from "../components/Banner";
import CardFood from "../components/CardFood";
import banner from "../assets/img/Banner/Background-2.webp";
import { useRef } from "react";
import { data } from "autoprefixer";

const FavoritePage = () => {
  const favoriteSearch = useRef(null);
  return (
    <div className="font-poppins">
      <Navbar ref={favoriteSearch} />
      <Sidebar style={{ zIndex: 1000 }} />
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
        <CardFood data={data} />
      </main>
      <Footer />
    </div>
  );
};

export default FavoritePage;
