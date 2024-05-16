import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Middleware = ({ children }) => {
  const authState = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState !== null) {
      setLoading(false);
    }
  }, [authState]);

  if (loading) {
    return null;
  }

  return authState ? navigate(-1) : children;
};

export default Middleware;
