import ChangeAuth from "../components/ChangeAuth";
import Logo from "../assets/img/Logo.png";
import Background from "../components/Background";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuth } from "../redux/slice/authPage";

const Banner = (props) => {
  let {
    position = "right-0",
    quetion = "Belum Punya Akun?",
    info = "Daftar Di Sini",
  } = props;

  const slide = useSelector((state) => state.authpage.authChange);
  const dispatch = useDispatch();

  if (slide == true) {
    position = "right-[50%]";
    quetion = "Sudah Punya Akun?";
    info = "Masuk Di Sini";
  }
  return (
    <div
      className={`${position} w-[50%] h-full hidden md:absolute md:flex transition-all duration-500`}
    >
      <Background className="flex-col h-full w-full justify-center gap-y-48 items-center md:flex hidden">
        <img className="h-[78px] opacity-100 w-[278px]" src={Logo} alt="logo" />
        <ChangeAuth
          onClick={() => dispatch(toggleAuth())}
          quetion={quetion}
          info={info}
          className="flex-col"
        />
      </Background>
    </div>
  );
};

export default Banner;
