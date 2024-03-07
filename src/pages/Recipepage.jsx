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
      <section className="font-poppins py-8 px-4 sm:px-8 md:px-12 xl:px-40 xl:py-20">
     <div className="sm:flex">
        <RecipePageCard src={pempek}/>
    <div>
        <RecipeDescription namamenu={"Pempek"} shortdescription={" Pempek kapal selam adalah jenis pempek yang menyerupai kantung dengan isian telur di dalamnya."}/>
    <RatingFood />
    <IngridientsButtonOrder />
    </div>
     </div>
    <div className="sm:flex">
    <RecipeIngridients />
    <CookingMethod />
    </div>
     </section>
   
      <Footer />
    </>
  );
};

export default Recipepage;
      
