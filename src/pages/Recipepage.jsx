import RecipePageCard from "../components/RecipePageCard";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import pempek from "../assets/img/Pempek.png";
import RecipeDescription from "../components/RecipeDescription";
import RecipeIngridients from "../components/RecipeIngridients";
import CookingMethod from "../components/CookingMethode";
import IngridientsButtonOrder from "../components/IngridientsButtonOrder";
import RatingFood from "../components/RatingFood";

const Recipepage = () => {
  return (
    <>
      <Navbar />
      <section className="font-poppins pb-8 pt-24 px-4 sm:px-8 md:px-12 xl:px-40">
        <div className="sm:flex gap-x-4">
          <RecipePageCard src={pempek} />
          <div className="flex flex-col justify-between py-6 sm:w-1/2">
            <div>
              <RecipeDescription
                namamenu={"Pempek"}
                shortdescription={
                  " Pempek kapal selam adalah jenis pempek yang menyerupai kantung dengan isian telur di dalamnya."
                }
              />
              <RatingFood />
            </div>

            <IngridientsButtonOrder />
          </div>
        </div>
        <div className="sm:flex justify-between gap-4">
          <RecipeIngridients />
          <CookingMethod />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Recipepage;
