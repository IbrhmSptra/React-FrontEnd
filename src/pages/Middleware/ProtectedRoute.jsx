/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Middleware = ({ children }) => {
  const authState = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authState !== null) {
      setLoading(false);
    }
  }, [authState]);

  if (loading) {
    return null;
  }

  return authState ? children : <Navigate to="/auth" />;
};

export default Middleware;
