/* eslint-disable no-unused-vars */
import React from "react";

const MenuButton = () => {
  return (
    <div className="flex gap-x-8 sm:hidden">
      <div className="w-10 h-fit flex flex-col gap-2 p-1 items-end z-20 rounded-sm cursor-pointer">
        <div className="bg-black w-full h-[4px] rounded-full"></div>
        <div className="bg-black w-full h-[4px] rounded-full"></div>
        <div className="bg-black w-full h-[4px] rounded-full"></div>
      </div>
    </div>
  );
};

export default MenuButton;
