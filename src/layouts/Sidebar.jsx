import Profile from "../components/Profile";
import Bookmark from "../components/Bookmark";
import History from "../components/History";
import LogoutButton from "../components/LogoutButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.webcontent.sidebar);

  return (
    <div
      className={`w-1/2 h-screen bg-primary bg-opacity-80 backdrop-blur-md top-0 transition-all duration-300 z-10 fixed sm:hidden ${
        isSidebarOpen ? "right-0" : "-right-1/2"
      }`}
    >
      <div className="container px-4 py-24 text-center flex flex-col justify-between h-full">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-evenly gap-2">
            <Profile />
          </div>
          <Link to="/favoritepage">
            <div className="px-4 py-2 border border-white flex items-center justify-evenly gap-2 rounded-lg">
              <Bookmark />
              <p className="text-sm text-headline">Favorit</p>
            </div>
          </Link>
          <Link to="/History">
            <div className="px-4 py-2 border border-white flex items-center justify-evenly gap-2 rounded-lg">
              <History />
              <p className="text-sm text-headline">Riwayat</p>
            </div>
          </Link>
        </div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
