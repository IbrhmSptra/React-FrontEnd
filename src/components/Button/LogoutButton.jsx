import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { closeSidebar, openModal } from "../../redux/slice/webContent";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(openModal());
    dispatch(closeSidebar());
  };
  return (
    <div onClick={showModal} className="cursor-pointer">
      <div className="px-4 py-2 bg-white text-headline font-medium rounded-md flex align-text-bottom items-center justify-center gap-2">
        <p className="text-base align-text-bottom">Logout</p>
        <MdOutlineLogout className="text-base align-text-bottom text-tertiary" />
      </div>
    </div>
  );
};

export default LogoutButton;
