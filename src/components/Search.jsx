/* eslint-disable no-unused-vars */
import React from "react";
import { FiSearch } from "react-icons/fi";

const search = () => {
  return (
    <>
      <form className="flex relative items-center flex-1">
        <FiSearch className="absolute left-2 text-grayText" />
        <input
          type="text"
          className="w-full rounded-2xl text-grayText text-sm font-light pl-10 py-1"
          placeholder="Cari Resep"
        />
      </form>
    </>
  );
};

export default search;
