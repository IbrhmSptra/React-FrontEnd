/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticate, setisAuthenticate] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const validate = async () => {
      try {
        await axios.get(`${API_URL}/auth/validate`);
        setisAuthenticate(true);
      } catch (error) {
        setisAuthenticate(false);
      }
    };
    validate();
  }, []);
  return isAuthenticate;
};

export default useAuth;
