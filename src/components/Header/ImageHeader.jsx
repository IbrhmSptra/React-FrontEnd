/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import useSWR from "swr";
import { fetchDelete, fetchGet, fetchPost } from "../../services/axios.service";
import useSWRMutation from "swr/mutation";

// import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RecipePageCard = ({ src, addStyle, id }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [isLoved, setIsLoved] = useState(false);

  //fetch
  const { data: bookmark, error } = useSWR(
    `${API_URL}/api/bookmark/${id}`,
    fetchGet
  );
  if (error) {
    console.error("Fetch Error :", error?.response.data.message);
  }
  //set color love
  useEffect(() => {
    if (bookmark?.data) {
      setIsLoved(true);
    }
  }, [bookmark]);

  //delete Bookmark
  const { trigger: deleteBookmark } = useSWRMutation(
    `${API_URL}/api/bookmark/${id}`,
    fetchDelete
  );

  //add Bookmark
  const { trigger: addBookmark } = useSWRMutation(
    `${API_URL}/api/bookmark/${id}`,
    fetchPost
  );
  const handleFavorite = () => {
    if (isLoved) {
      deleteBookmark(`${API_URL}/api/bookmark/${id}`);
    } else {
      addBookmark(`${API_URL}/api/bookmark/${id}`);
    }
    setIsLoved(!isLoved);
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
        <FaHeart color={isLoved ? "#feda15" : "#6F6F6F"} />
      </div>
    </div>
  );
};

export default RecipePageCard;
