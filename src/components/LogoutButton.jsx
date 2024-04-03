import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SignOut } from "../services/supabase.auth.service";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    SignOut(() => {
      localStorage.removeItem("username");
      navigate(0);
    });
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
