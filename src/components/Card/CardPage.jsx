/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { fetchDelete, fetchGet, fetchPost } from "../../services/axios.service";

const Card = ({ data, refresh }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [isLoved, setIsLoved] = useState(false);
  //fetch
  const { data: bookmark, error } = useSWR(
    `${API_URL}/api/bookmark/${data.id}`,
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
  const { trigger: deleteBookmark, isMutating: loadingDelete } = useSWRMutation(
    `${API_URL}/api/bookmark/${data.id}`,
    fetchDelete
  );

  //add Bookmark
  const { trigger: addBookmark, isMutating: loadingAdd } = useSWRMutation(
    `${API_URL}/api/bookmark/${data.id}`,
    fetchPost
  );

  //reFetch if theres data change
  useEffect(() => {
    if (!loadingDelete || !loadingAdd) {
      if (refresh) {
        refresh();
      }
    }
  }, [loadingAdd, loadingDelete]);

  const handleFavorite = () => {
    if (isLoved) {
      deleteBookmark(`${API_URL}/api/bookmark/${data.id}`);
    } else {
      addBookmark(`${API_URL}/api/bookmark/${data.id}`);
    }
    setIsLoved(!isLoved);
  };

  return (
    <div className="border shadow-xl relative select-none">
      <Link to={`/recipepage/${data.id}`} className="w-full h-full">
        <img className="w-full max-h-36 object-cover" src={data.image} />
        <div className="p-4 space-y-2">
          <p className="text-sm text-headline font-medium">{data.name}</p>
          <div className="flex justify-between">
            <div className="flex">
              <FaStar color={data.rating >= 1 ? "#feda15" : "#6F6F6F"} />
              <FaStar
                color={
                  data.rating > 0 && data.rating >= 2 ? "#feda15" : "#6F6F6F"
                }
              />
              <FaStar
                color={
                  data.rating > 0 && data.rating >= 3 ? "#feda15" : "#6F6F6F"
                }
              />
              <FaStar
                color={
                  data.rating > 0 && data.rating >= 4 ? "#feda15" : "#6F6F6F"
                }
              />
              <FaStar
                color={
                  data.rating > 0 && data.rating == 5 ? "#feda15" : "#6F6F6F"
                }
              />
              <p className="text-grayText text-xs font-light translate-y-0.5 ml-1">
                {`(${data.order})`}
              </p>
            </div>
            <p className="text-tertiary text-xs font-semibold">
              Rp
              {data.price.toLocaleString("id-ID", {
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
        <FaHeart color={isLoved ? "#feda15" : "#6F6F6F"} />
      </div>
    </div>
  );
};

export default Card;
