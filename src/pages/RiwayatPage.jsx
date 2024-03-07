import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Filter from "../components/Filter";
import Banner from "../components/Banner";
import { useRef } from "react";
import CardRiwayat from "../components/CardRiwayat";

const RiwayatPage = () => {
  const riwayatSearch = useRef(null);
  return (
    <div className="font-poppins">
      <Navbar ref={riwayatSearch} />
      <Sidebar style={{ zIndex: 1000 }} />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <Banner title="Riwayat" />
        <Filter
          filter={["Harga Terendah", "Harga Tertinggi", "Terbaru", "Terlama"]}
        />
        <div className="space-y-4 mt-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
          <CardRiwayat />
          <CardRiwayat />
          <CardRiwayat />
          <CardRiwayat />
          <CardRiwayat />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RiwayatPage;
