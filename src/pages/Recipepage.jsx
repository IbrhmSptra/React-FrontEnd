/* eslint-disable react-hooks/exhaustive-deps */
import RecipePageCard from "../components/RecipePageCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import RecipeDescription from "../components/RecipeDescription";
import RecipeIngridients from "../components/RecipeIngridients";
import CookingMethod from "../components/CookingMethode";
import IngridientsButtonOrder from "../components/IngridientsButtonOrder";
import RatingFood from "../components/RatingFood";
import Sidebar from "../layouts/Sidebar";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailRecipe } from "../services/supabase.service";

const Recipepage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    getDetailRecipe((data) => {
      setDetail(data);
    }, id);
  }, []);
  console.log(detail);
  const RecipeSearch = useRef(null);
  return (
    <>
      <Navbar ref={RecipeSearch} />
      <Sidebar />
      <section className="font-poppins pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <div className="sm:flex gap-x-4">
          {detail.data && <RecipePageCard src={detail.data.web_img} />}
          <div className="flex flex-col justify-between py-6 sm:w-1/2">
            <div>
              {detail.data && (
                <RecipeDescription
                  namamenu={detail.data.food}
                  shortdescription={detail.data.description}
                />
              )}
              <RatingFood />
            </div>

            <IngridientsButtonOrder id={id} />
          </div>
        </div>
        <div className="sm:flex justify-between gap-4">
          <RecipeIngridients data={detail.recipe} />
          <CookingMethod data={detail.step} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Recipepage;
