import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Filter from "../components/Filter";
import Banner from "../components/Banner";

const FavoritePage = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Sidebar style={{ zIndex: 1000 }} />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <Banner />
        <Filter />
      </main>
      <Footer />
    </div>
  );
};

export default FavoritePage;
