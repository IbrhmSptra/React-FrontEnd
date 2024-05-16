import { useRef } from "react";
import Carousel from "../../components/Header/Carousel";
import Footer from "../../layouts/PageLayouts/Footer";
import Kategori from "../../layouts/Wrapper/Kategori";
import Navbar from "../../layouts/PageLayouts/Navbar";
import Rekomendasi from "../../layouts/Wrapper/Rekomendasi";
import Sidebar from "../../layouts/PageLayouts/Sidebar";
import Trending from "../../layouts/Wrapper/Trending";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const homeSearch = useRef(null);
  return (
    <>
      <ToastContainer
        className="font-poppins text-headline text-sm"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        progressStyle={{ backgroundColor: "#FEDA15" }}
      />
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
    </>
  );
};

export default HomePage;
