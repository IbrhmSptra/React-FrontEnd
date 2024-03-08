import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <Link
      to={`/recipepage/${data.id}`}
      className="border shadow-xl relative select-none"
    >
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
      <div
        onClick={() => {
          setBookmarked(!bookmarked);
        }}
        className="w-7 h-7 bg-white rounded-full flex items-center justify-center border absolute top-2 right-2 cursor-pointer"
      >
        <FaHeart color={bookmarked ? "#feda15" : "#6F6F6F"} />
      </div>
    </Link>
  );
};

export default Card;
