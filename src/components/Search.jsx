/* eslint-disable no-unused-vars */
import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../redux/slice/sidebarSlice";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <>
      <form className="flex relative items-center flex-1 z-20">
        <FiSearch className="absolute left-2 text-grayText" />
        <input
          type="text"
          className="w-full rounded-2xl text-grayText text-sm font-light pl-10 py-1"
          placeholder="Cari Resep"
          onFocus={() => {
            dispatch(closeSidebar());
          }}
        />
      </form>
    </>
  );
};

export default Search;
