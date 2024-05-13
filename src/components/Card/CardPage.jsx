/* eslint-disable react-hooks/exhaustive-deps */

import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  // const user = JSON.parse(
  //   localStorage.getItem("sb-qqnkeeuttacyfctgebzc-auth-token")
  // );
  // const [bookmarked, setBookmarked] = useState(false);

  // useEffect(() => {
  //   getFavorite(
  //     (data) => {
  //       if (data.length > 0) {
  //         setBookmarked(true);
  //       } else {
  //         setBookmarked(false);
  //       }
  //     },
  //     user.user.id,
  //     data.id
  //   );
  // }, [arrData]);
  // const handleFavorite = () => {
  //   if (!bookmarked) {
  //     const payload = {
  //       food: data.food,
  //       harga: data.harga,
  //       web_img: data.web_img,
  //       id_food: data.id,
  //     };
  //     insertFavorite(payload);
  //   } else {
  //     deleteFavorite(user.user.id, data.id);
  //   }
  //   setBookmarked(!bookmarked);
  // };
  if (data) {
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
          // onClick={handleFavorite}
          className="w-7 h-7 bg-white rounded-full flex items-center justify-center border absolute top-2 right-2 cursor-pointer"
        >
          <FaHeart
          //color={bookmarked ? "#feda15" : "#6F6F6F"}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Card;
