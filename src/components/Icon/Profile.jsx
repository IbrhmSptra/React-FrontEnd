import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="flex items-center gap-2">
      <FaUserCircle className="text-2xl" />
      <p className="font-poppins text-base text-grayText">{username}</p>
    </div>
  );
};

export default Profile;
