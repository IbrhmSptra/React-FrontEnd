import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardFood = ({ src, nama, addStyle }) => {
  return (
    <div className={`border shadow-xl ${addStyle}`}>
      <Link to={`detail/${nama}`}>
        <img className="h-32 w-full object-cover" src={src} alt="imgFood" />
        <div className="p-2">
          <p className="text-sm text-center">{nama}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardFood;
