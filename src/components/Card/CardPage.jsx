/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  deleteFavorite,
  getFavorite,
  insertFavorite,
} from "../../services/supabase.service";

const Card = ({ data, arrData }) => {
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
  }, [arrData]);
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
  if (data) {
    return (
      <div className="border shadow-xl relative select-none">
        <Link to={`/recipepage/${data.id}`} className="w-full h-full">
          <img className="w-full max-h-36 object-cover" src={data.web_img} />
          <div className="p-4 space-y-2">
            <p className="text-sm text-headline font-medium">{data.food}</p>
            <div className="flex justify-between">
              <div className="flex">
                <FaStar color="#feda15" />
                <FaStar color="#feda15" />
                <FaStar color="#feda15" />
                <FaStar color="#feda15" />
                <FaStar color="#feda15" />
                <p className="text-grayText text-xs font-light translate-y-0.5 ml-1">
                  (20)
                </p>
              </div>
              <p className="text-tertiary text-xs font-semibold">
                Rp
                {data.harga.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </div>
        </Link>
        <div
          onClick={handleFavorite}
          className="w-7 h-7 bg-white rounded-full flex items-center justify-center border absolute top-2 right-2 cursor-pointer"
        >
          <FaHeart color={bookmarked ? "#feda15" : "#6F6F6F"} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Card;
