/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import useSWR from "swr";
import { fetchGet } from "../../services/axios.service";

const FeatureRating = ({ id, refreshRiwayat }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { data, error } = useSWR(`${API_URL}/api/order/${id}`, fetchGet);
  if (error) {
    console.error("Fetch Error :", error?.response.data.message);
  }
  const [hover, setHover] = useState(null);

  const handleHover = (e, currentRating) => {
    e.preventDefault();
    e.stopPropagation();
    setHover(currentRating);
  };
  const handleUnHover = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHover(null);
  };
  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <div
            onClick={async (e) => {
              e.preventDefault();
              e.stopPropagation();
              data.data.rating = currentRating;
              await axios.patch(`${API_URL}/api/order/rating/${id}`, {
                rating: currentRating,
              });
              refreshRiwayat();
            }}
            onMouseEnter={(e) => {
              handleHover(e, currentRating);
            }}
            onMouseLeave={handleUnHover}
            key={index}
          >
            <FaStar
              size={15}
              className="cursor-pointer"
              color={
                currentRating <= (hover || data?.data.rating)
                  ? "#ffc107"
                  : "#e4e5e9"
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default FeatureRating;
