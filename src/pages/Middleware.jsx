// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Authentication from "./AuthenthicationPage";

const Middleware = ({ children }) => {
  const user = JSON.parse(
    localStorage.getItem("sb-qqnkeeuttacyfctgebzc-auth-token")
  );
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  if (!user) {
    return <Authentication />;
  }
  return children;
};

export default Middleware;
