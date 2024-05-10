/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";

const Brand = ({ className }) => {
  const navigate = useNavigate();
  return (
    <img
      className={`cursor-pointer ${className}`}
      src={logo}
      alt=""
      onClick={() => {
        navigate("/");
      }}
    />
  );
};

export default Brand;
