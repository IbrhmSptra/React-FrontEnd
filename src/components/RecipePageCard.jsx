// import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RecipePageCard = ({ src, addStyle }) => {
  return (
    <div className={`sm:w-1/2  ${addStyle}`}>
      <img className="h-full w-full object-cover" alt="imgFood" src={src} />
    </div>
  );
};

export default RecipePageCard;
