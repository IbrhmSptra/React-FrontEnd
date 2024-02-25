/* eslint-disable react/prop-types */
import { useSwiper } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const ArrowButton = ({ direction }) => {
  const swiper = useSwiper();
  return (
    <div
      className={`z-20 absolute w-8 h-8 rounded-full items-center justify-center bg-black bg-opacity-40  top-[40%] -translate-y-[40%]  shadow-xl cursor-pointer hidden md:flex active:scale-110 transition-all ${
        direction == "left" ? "left-0" : "right-0"
      }`}
      onClick={() => {
        direction == "left" ? swiper.slidePrev() : swiper.slideNext();
        console.log(direction);
      }}
    >
      {direction == "left" ? (
        <FaChevronLeft className="text-white" />
      ) : (
        <FaChevronRight className="text-white" />
      )}
    </div>
  );
};

export default ArrowButton;
