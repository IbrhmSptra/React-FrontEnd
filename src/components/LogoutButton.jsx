import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

const LogoutButton = () => {
  return (
    <Link to="/login">
      <div className="px-4 py-2 bg-white text-headline font-medium rounded-md flex align-text-bottom items-center justify-center gap-2">
        <p className="text-base align-text-bottom">Logout</p>
        <MdOutlineLogout className="text-base align-text-bottom text-tertiary" />
      </div>
    </Link>
  );
};

export default LogoutButton;
