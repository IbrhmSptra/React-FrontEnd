import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-grayText flex justify-center items-center">
        <h1 className="text-5xl text-white">ini Body</h1>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
