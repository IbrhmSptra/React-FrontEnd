import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutButton = () => {
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
    <div onClick={handleLogout}>
      <div className="px-4 py-2 bg-white text-headline font-medium rounded-md flex align-text-bottom items-center justify-center gap-2">
        <p className="text-base align-text-bottom">Logout</p>
        <MdOutlineLogout className="text-base align-text-bottom text-tertiary" />
      </div>
    </div>
  );
};

export default LogoutButton;
