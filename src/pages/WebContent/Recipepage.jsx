/* eslint-disable react-hooks/exhaustive-deps */
import RecipePageCard from "../../components/Header/ImageHeader";
import Footer from "../../layouts/PageLayouts/Footer";
import Navbar from "../../layouts/PageLayouts/Navbar";
import RecipeDescription from "../../layouts/Content/RecipeDescription";
import RecipeIngridients from "../../layouts/Content/RecipeIngridients";
import CookingMethod from "../../layouts/Content/CookingMethode";
import IngridientsButtonOrder from "../../components/Button/IngridientsButtonOrder";
import RatingFood from "../../layouts/Content/RatingFood";
import Sidebar from "../../layouts/PageLayouts/Sidebar";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetchGet } from "../../services/axios.service";
import SkeletonBannerDetail from "../../layouts/Skeleton/SkeletonRecipePage";
import ModalLogout from "../../layouts/Authentication/ModalLogout";
import { useSelector } from "react-redux";

const Recipepage = () => {
  const modalState = useSelector((state) => state.webcontent.modalLogout);
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;

  //fetch api
  const { data, error, isLoading } = useSWR(
    `${API_URL}/api/food/${id}`,
    fetchGet
  );
  if (error) {
    console.log("Fetch Error :", error?.response.data.message);
  }

  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const RecipeSearch = useRef(null);
  return (
    <>
      {modalState ? <ModalLogout /> : null}
      <Navbar ref={RecipeSearch} />
      <Sidebar />
      <section className="font-poppins pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        {isLoading ? (
          <SkeletonBannerDetail />
        ) : (
          <div className="sm:flex gap-x-4">
            {data && <RecipePageCard id={data.data.id} src={data.data.image} />}
            <div className="flex flex-col justify-between py-6 sm:w-1/2">
              <div>
                {data && (
                  <RecipeDescription
                    namamenu={data.data.name}
                    shortdescription={data.data.description}
                  />
                )}
                {data && (
                  <RatingFood
                    rating={data.data.rating}
                    order={data.data.order}
                  />
                )}
              </div>

              <IngridientsButtonOrder id={id} />
            </div>
          </div>
        )}
        <div
          className={`sm:flex justify-between gap-4 ${
            isLoading ? "mt-6" : null
          }`}
        >
          {isLoading ? (
            <SkeletonBannerDetail />
          ) : (
            data && <RecipeIngridients data={data.data.ingredients} />
          )}
          {isLoading ? (
            <SkeletonBannerDetail />
          ) : (
            data && <CookingMethod data={data.data.method} />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Recipepage;
