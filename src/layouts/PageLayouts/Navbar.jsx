/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import Logo from "../../components/Icon/Brand";
import Search from "../../components/Input/Search";
import Bookmark from "../../components/Icon/Bookmark";
import History from "../../components/Icon/History";
import Profile from "../../components/Icon/Profile";
import MenuButton from "../../components/Button/MenuButton";
import { Link, useNavigate } from "react-router-dom";
import { forwardRef } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";

const Navbar = forwardRef((props, ref) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .delete(`${API_URL}/auth/logout`)
      .then(() => {
        localStorage.removeItem("username");
        navigate(0);
      })
      .catch((error) => console.error(error?.response.data.message));
  };
  return (
    <nav className="font-poppins w-full bg-primary flex items-start justify-between px-4 py-4 gap-10 fixed z-30 top-0 max-h-16 sm:px-8 md:px-12 xl:px-40 xl:py-4 xl:gap-x-40">
      <div className="flex flex-1 gap-x-10">
        <Logo className="w-24 h-7 hidden md:block" />
        <Search ref={ref} />
      </div>
      <div className="gap-x-6 hidden sm:flex">
        <div className="flex gap-x-4">
          <Link to="/favoritepage">
            <Bookmark />
          </Link>
          <Link to="/riwayatpage">
            <History />
          </Link>
        </div>
        <Profile />
        <div onClick={handleLogout}>
          <AiOutlineLogout className="text-tertiary text-2xl cursor-pointer" />
        </div>
      </div>
      <MenuButton />
    </nav>
  );
});

export default Navbar;
