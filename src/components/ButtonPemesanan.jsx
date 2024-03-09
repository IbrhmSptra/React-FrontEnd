import { GoPackageDependents } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { insertTransaction } from "../services/supabase.service";
import { useNavigate } from "react-router-dom";
import { setAlamat } from "../redux/slice/webContent";

const ButtonPemesanan = ({ data }) => {
  const user = JSON.parse(
    localStorage.getItem("sb-qqnkeeuttacyfctgebzc-auth-token")
  );
  const alamat = useSelector((state) => state.webcontent.alamat);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const order = () => {
    if (alamat != "") {
      const payload = {
        id_food: data.data.id,
        food: data.data.food,
        harga: data.data.harga,
        web_img: data.data.web_img,
        uid: user.user.id,
        alamat: alamat,
      };
      insertTransaction(payload, () => {
        dispatch(setAlamat(""));
        navigate("/");
      });
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
