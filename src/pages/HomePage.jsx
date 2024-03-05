import { useRef } from "react";
import Carousel from "../components/Carousel";
import Footer from "../layouts/Footer";
import Kategori from "../layouts/Kategori";
import Navbar from "../layouts/Navbar";
import Rekomendasi from "../layouts/Rekomendasi";
import Sidebar from "../layouts/Sidebar";
import Trending from "../layouts/Trending";

const HomePage = () => {
  const homeSearch = useRef(null);
  return (
    <div className="font-poppins">
      <Navbar ref={homeSearch} />
      <Sidebar />
      <main className=" pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <Carousel />
        <Kategori />
        <Trending />
        <Rekomendasi />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
