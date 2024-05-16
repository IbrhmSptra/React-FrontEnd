import { FaStar } from "react-icons/fa";

const RatingFood = ({ rating, order }) => {
  return (
    <div className="flex items-center mt-4">
      <FaStar size={30} color={rating >= 1 ? "#feda15" : "#6F6F6F"} />
      <FaStar
        size={30}
        color={rating > 0 && rating >= 2 ? "#feda15" : "#6F6F6F"}
      />
      <FaStar
        size={30}
        color={rating > 0 && rating >= 3 ? "#feda15" : "#6F6F6F"}
      />
      <FaStar
        size={30}
        color={rating > 0 && rating >= 4 ? "#feda15" : "#6F6F6F"}
      />
      <FaStar
        size={30}
        color={rating > 0 && rating == 5 ? "#feda15" : "#6F6F6F"}
      />
      <p className="ml-2 text-grayText text-base">{`(${order})`}</p>
    </div>
  );
};

export default RatingFood;
