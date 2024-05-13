import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardFood = ({ data, addStyle }) => {
  if (data) {
    return (
      <div className={`border shadow-xl ${addStyle}`}>
        <Link to={`/recipepage/${data.id}`}>
          <img
            className="h-32 w-full object-cover"
            src={data.image}
            alt="imgFood"
          />
          <div className="p-2">
            <p className="text-sm text-center">{data.name}</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default CardFood;
