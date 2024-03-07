/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex items-center gap-2">
      <FaUserCircle className="text-2xl" />
      <p className="font-poppins text-base text-grayText">John Doe</p>
    </div>
  );
};

export default Profile;
