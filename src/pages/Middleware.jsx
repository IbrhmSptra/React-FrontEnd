/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Authentication from "./AuthenthicationPage";

const Middleware = ({ children }) => {
  const authState = useAuth();

  if (authState) {
    return children;
  }
  return <Authentication />;
};

export default Middleware;
