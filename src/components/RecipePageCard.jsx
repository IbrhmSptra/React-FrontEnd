/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  deleteFavorite,
  getFavorite,
  insertFavorite,
} from "../services/supabase.service";
import { FaHeart } from "react-icons/fa6";

// import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RecipePageCard = ({ src, addStyle, data }) => {
  const user = JSON.parse(
    localStorage.getItem("sb-qqnkeeuttacyfctgebzc-auth-token")
  );
  const [bookmarked, setBookmarked] = useState(false);
  useEffect(() => {
    getFavorite(
      (data) => {
        if (data.length > 0) {
          setBookmarked(true);
        } else {
          setBookmarked(false);
        }
      },
      user.user.id,
      data.id
    );
  }, [data]);
  const handleFavorite = () => {
    if (!bookmarked) {
      const payload = {
        food: data.food,
        harga: data.harga,
        web_img: data.web_img,
        id_food: data.id,
      };
      insertFavorite(payload);
    } else {
      deleteFavorite(user.user.id, data.id);
    }
    setBookmarked(!bookmarked);
  };
  return (
    <div className={`sm:w-1/2 relative ${addStyle}`}>
      <img
        className="h-full w-full max-h-96 object-cover rounded-lg"
        alt="imgFood"
        src={src}
      />
      <div
        onClick={handleFavorite}
        className="w-7 h-7 bg-white rounded-full flex items-center justify-center border absolute top-2 right-2 cursor-pointer"
      >
        <FaHeart color={bookmarked ? "#feda15" : "#6F6F6F"} />
      </div>
    </div>
  );
};

export default RecipePageCard;
