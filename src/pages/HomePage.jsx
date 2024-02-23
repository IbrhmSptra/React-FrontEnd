import Carousel from "../components/Carousel";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className=" py-8 px-4 sm:px-8 md:px-12 xl:px-40">
        <Carousel />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
