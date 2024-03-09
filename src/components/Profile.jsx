/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { getUsername } from "../services/supabase.auth.service";

const Profile = () => {
  const user = JSON.parse(
    localStorage.getItem("sb-qqnkeeuttacyfctgebzc-auth-token")
  );
  const [username, setUsername] = useState("");
  useEffect(() => {
    getUsername((data) => {
      setUsername(data);
    }, user.user.id);
  }, []);
  return (
    <div className="flex items-center gap-2">
      <FaUserCircle className="text-2xl" />
      <p className="font-poppins text-base text-grayText">{username}</p>
    </div>
  );
};

export default Profile;
