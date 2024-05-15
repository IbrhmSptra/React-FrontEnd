/* eslint-disable react-hooks/exhaustive-deps */
import { GoPackageDependents } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAlamat } from "../../redux/slice/webContent";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import useSWRMutation from "swr/mutation";
import { fetchPostOrder } from "../../services/axios.service";
import { useEffect } from "react";

const ButtonPemesanan = ({ id }) => {
  const alamat = useSelector((state) => state.webcontent.alamat);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const API_URL = import.meta.env.VITE_API_URL;

  //delete Bookmark
  const {
    data,
    trigger: addOrder,
    isMutating,
  } = useSWRMutation(
    { url: `${API_URL}/api/order/${id}`, alamat: alamat },
    fetchPostOrder
  );

  useEffect(() => {
    if (!isMutating && data) {
      setTimeout(() => {
        dispatch(setAlamat(""));
        toast("Pesananmu berhasil terkonfirmasi", {
          icon: () => <FaCheckCircle size={40} color="#FEDA15" />,
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }, 10);
      navigate("/");
    }
  }, [isMutating]);

  const order = () => {
    if (alamat != "") {
      addOrder(`${API_URL}/api/order/${id}`);
    }
  };
  return (
    <div
      className="bg-primary w-full flex py-2 justify-evenly items-center max-w-48 font-poppins rounded-xl cursor-pointer select-none"
      onClick={order}
    >
      <p>Pesan Bahan</p>
      <GoPackageDependents size={20} />
    </div>
  );
};

export default ButtonPemesanan;
