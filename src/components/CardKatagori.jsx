import { useState } from "react";
import banner from "../assets/img/Card/fishandchips.png";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Banner = () => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="border shadow-xl relative select-none">
      <img className="w-full max-h-52" src={banner} />
      <div className="p-4 space-y-2">
        <p className="text-sm text-headline font-medium">Fish & Chips</p>
        <div className="flex justify-between">
          <div className="flex">
            <FaStar color="#feda15" />
            <FaStar color="#feda15" />
            <FaStar color="#feda15" />
            <FaStar color="#feda15" />
            <FaStar color="#feda15" />
          </div>
          <p className="text-tertiary text-xs font-semibold">Rp50.000</p>
        </div>
      </div>
      <div
        onClick={() => {
          setBookmarked(!bookmarked);
        }}
        className="w-7 h-7 bg-white rounded-full flex items-center justify-center border absolute top-4 right-2 cursor-pointer"
      >
        <FaHeart color={bookmarked ? "#feda15" : "#6F6F6F"} />
      </div>
    </div>
  );
};

export default Banner;
