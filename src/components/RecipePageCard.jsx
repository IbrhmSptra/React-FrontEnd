import React from "react";
// import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RecipePageCard = ({ src, addStyle }) => {
  return (
    <div className={`sm:w-full lg:max-w-xl ${addStyle}`}>
      <img
        alt="imgFood"
        src={src}
      />
    </div>
  );
};

export default RecipePageCard;