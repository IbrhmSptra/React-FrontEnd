import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Filter from "../components/Filter";
import Card from "../components/Card";
import { useRef } from "react";
import Banner from "../components/Banner";

const KategoriPage = () => {
  const KategoriSearch = useRef(null);
  return (
    <div className="font-poppins">
      <Navbar ref={KategoriSearch} />
      <Sidebar style={{ zIndex: 1000 }} />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <Banner
          src="https://qqnkeeuttacyfctgebzc.supabase.co/storage/v1/object/sign/WebFoodo/Kategori/Banner/Korea.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJXZWJGb29kby9LYXRlZ29yaS9CYW5uZXIvS29yZWEucG5nIiwiaWF0IjoxNzA5ODc4NzgzLCJleHAiOjE3NzI5NTA3ODN9.TgW03aNnWHB6tb1lFYYnbc6YzyNCyclGETKgzOPeKSE&t=2024-03-08T06%3A19%3A43.378Z"
          textColor="text-white drop-shadow-2xl"
          text="Korea"
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KategoriPage;
