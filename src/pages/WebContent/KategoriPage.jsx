/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../../layouts/PageLayouts/Footer";
import Navbar from "../../layouts/PageLayouts/Navbar";
import Sidebar from "../../layouts/PageLayouts/Sidebar";
import Filter from "../../components/Input/Filter";
import Card from "../../components/Card/CardPage";
import { useRef, useState } from "react";
import Banner from "../../components/Header/HeaderBanner";
import { useParams } from "react-router-dom";
import Pagination from "../../components/Input/Pagination";
import useSWR from "swr";
import SkeletonBannerCategory from "../../layouts/Skeleton/SkeletonBannerCategory";
import SkeletonCardPage from "../../layouts/Skeleton/SkeletonCardPage";
import { fetchGet } from "../../services/axios.service";
import ModalLogout from "../../layouts/Authentication/ModalLogout";
import { useSelector } from "react-redux";

const KategoriPage = () => {
  const modalState = useSelector((state) => state.webcontent.modalLogout);
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [page, setPage] = useState(1);

  //Filter Feature
  const filter = [
    "Harga Terendah",
    "Harga Tertinggi",
    "Ulasan Terbaik",
    "Pesanan Terbanyak",
  ];
  const [selectedFilter, setSelectedFilter] = useState(filter[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // -----------

  const sortMethods = {
    "Harga Terendah": "&price=asc",
    "Harga Tertinggi": "&price=desc",
    "Ulasan Terbaik": "&rating=desc",
    "Pesanan Terbanyak": "&order=desc",
  };

  //fetch api
  const {
    data: category,
    error: errorCategory,
    isLoading: categoryLoading,
  } = useSWR(`${API_URL}/api/categories/${id}`, fetchGet);
  const {
    data: food,
    error: errorFood,
    isLoading: loadingFood,
  } = useSWR(
    `${API_URL}/api/food?page=${page}&category=${id}${sortMethods[selectedFilter]}`,
    fetchGet
  );
  if (errorFood) {
    console.error("Fetch Error :", errorFood?.response.data.message);
  }
  if (errorCategory) {
    console.error("Fetch Error :", errorCategory?.response.data.message);
  }

  const KategoriSearch = useRef(null);
  return (
    <div className="font-poppins">
      {modalState ? <ModalLogout /> : null}
      <Navbar ref={KategoriSearch} />
      <Sidebar />
      <main className="pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        {categoryLoading ? (
          <SkeletonBannerCategory />
        ) : (
          <Banner
            src={category.data.header_image}
            textColor="text-white drop-shadow-2xl"
            text={category.data.name}
          />
        )}
        <Filter
          filter={filter}
          handleFilterChange={handleFilterChange}
          toggleDropdown={toggleDropdown}
          selectedFilter={selectedFilter}
          isOpen={isOpen}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 mb-10">
          {loadingFood ? (
            <SkeletonCardPage />
          ) : (
            food.data.map((value, i) => <Card key={i} data={value} />)
          )}
        </div>
        <Pagination setPage={setPage} totalPage={food?.totalPages} />
      </main>
      <Footer />
    </div>
  );
};

export default KategoriPage;
