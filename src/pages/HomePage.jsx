import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { useSelector } from "react-redux";
import Sidebar from "../layouts/Sidebar";

const HomePage = () => {
  const statusSidebar = useSelector((state) => state.sidebar.status);
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl text-white">
          status : {statusSidebar ? "yes" : "No"}
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
