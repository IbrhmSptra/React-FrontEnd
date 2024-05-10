import { useDispatch, useSelector } from "react-redux";
import { clearError, toggleAuth } from "../../redux/slice/authPage";
const NavigateAuth = ({ addClass }) => {
  const isLogin = useSelector((state) => state.authpage.isLogin);
  const dispatch = useDispatch();
  return (
    <div className={`space-y-2 ${addClass}`}>
      <p className="text-xs text-headline text-center md:text-base xl:text-lg">
        {isLogin ? "Belum Punya Akun?" : "Sudah Punya Akun?"}
      </p>
      <p
        className="text-xs text-tertiary text-center cursor-pointer select-none md:text-base xl:text-lg"
        onClick={() => {
          dispatch(toggleAuth());
          dispatch(clearError());
        }}
      >
        {isLogin ? "Daftar Disini" : "Masuk Disini"}
      </p>
    </div>
  );
};

export default NavigateAuth;
