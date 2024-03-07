/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import Logo from "../components/Logo";
import Search from "../components/Search";
import Bookmark from "../components/Bookmark";
import History from "../components/History";
import Profile from "../components/Profile";
import MenuButton from "../components/MenuButton";
import { Link } from "react-router-dom";
import { forwardRef } from "react";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = forwardRef((props, ref) => {
  return (
    <nav className="font-poppins w-full bg-primary flex items-start justify-between px-4 py-4 gap-10 fixed z-20 top-0 max-h-16 sm:px-8 md:px-12 xl:px-40 xl:py-4 xl:gap-x-40">
      <div className="flex flex-1 gap-x-10">
        <Logo className="w-24 h-7 hidden md:block" />
        <Search ref={ref} />
      </div>
      <div className="gap-x-6 hidden sm:flex">
        <div className="flex gap-x-4">
          <Link to="/favoritepage">
            <Bookmark />
          </Link>
          <Link to="/History">
            <History />
          </Link>
        </div>
        <Profile />
        <Link to="/login">
          <AiOutlineLogout className="text-tertiary text-2xl" />
        </Link>
      </div>
      <MenuButton />
    </nav>
  );
});

export default Navbar;
