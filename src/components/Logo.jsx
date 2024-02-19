/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/img/Logo.png";

const brand = ({ className }) => {
  return <img className={className} src={logo} alt="" />;
};

export default brand;
