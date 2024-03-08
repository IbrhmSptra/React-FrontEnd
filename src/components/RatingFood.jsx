import { FaStar } from "react-icons/fa";

const RatingFood = () => {
  return (
    <div className="flex">
      <FaStar size={40} color="#ffc107" />
      <FaStar size={40} color="#ffc107" />
      <FaStar size={40} color="#ffc107" />
      <FaStar size={40} color="#e4e5e9" />
      <FaStar size={40} color="#e4e5e9" />
      <p className="ml-2 pt-1 flex items-center">( 20 )</p>
    </div>
  );
};

export default RatingFood;
