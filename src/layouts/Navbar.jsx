/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../components/Logo";
import Search from "../components/Search";
import Bookmark from "../components/Bookmark";
import History from "../components/History";
import Profile from "../components/Profile";
import MenuButton from "../components/MenuButton";

const Navbar = () => {
  return (
    <nav className="w-full bg-primary flex items-center justify-between px-4 py-4 gap-10 sm:px-8 md:px-12 xl:px-40 xl:py-4 xl:gap-x-40">
      <div className="flex flex-1 gap-x-10">
        <Logo className="w-24 h-7 hidden sm:block" />
        <Search />
      </div>
      <div className="gap-x-8 hidden sm:flex">
        <div className="flex gap-x-4">
          <Bookmark />
          <History />
        </div>
        <Profile />
      </div>
      <MenuButton />
    </nav>
  );
};

export default Navbar;
