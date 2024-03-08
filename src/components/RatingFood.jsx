import { FaStar } from "react-icons/fa";

const RatingFood = () => {
  return (
    <div className="flex items-center mt-4">
      <FaStar size={30} color="#ffc107" />
      <FaStar size={30} color="#ffc107" />
      <FaStar size={30} color="#ffc107" />
      <FaStar size={30} color="#e4e5e9" />
      <FaStar size={30} color="#e4e5e9" />
      <p className="ml-2 text-grayText text-base">( 20 )</p>
    </div>
  );
};

export default RatingFood;
