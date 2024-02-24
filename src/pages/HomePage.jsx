import Carousel from "../components/Carousel";
import Footer from "../layouts/Footer";
import Kategori from "../layouts/Kategori";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

const HomePage = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Sidebar />
      <main className=" pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <Carousel />
        <Kategori />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
