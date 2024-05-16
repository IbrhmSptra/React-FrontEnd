import { useDispatch } from "react-redux";
import { closeModal, closeSidebar } from "../../redux/slice/webContent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ModalLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const handleLogout = () => {
    axios
      .delete(`${API_URL}/auth/logout`)
      .then(() => {
        dispatch(closeModal());
        dispatch(closeSidebar());
        localStorage.removeItem("username");
        navigate("/auth");
      })
      .catch((error) => console.error(error?.response.data.message));
  };
  const handleCancel = () => {
    dispatch(closeModal());
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-800/45 backdrop-blur-md z-20 flex flex-col justify-center px-10 sm:px-28 md:px-36 lg:px-64 xl:px-96">
      <div className="w-full bg-white px-6 py-2 rounded-t-xl">
        <h1 className="font-poppins font-semibold">Logout</h1>
      </div>
      <div className="w-full bg-white px-6 rounded-b-xl">
        <p>Apakah anda yakin ingin keluar?</p>
        <div className="w-full flex justify-between py-6 ">
          <button
            className="font-poppins bg-primary py-1 px-4 rounded-xl hover:border hover:border-tertiary"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="font-poppins border border-tertiary py-1 px-4 rounded-xl hover:bg-slate-300"
            onClick={handleCancel}
          >
            Batalkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
