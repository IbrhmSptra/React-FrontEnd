import { useSelector } from "react-redux";
import Brand from "../components/Brand";
import NavigateAuth from "../components/Button/NavigateAuth";
import Background from "../assets/img/background.webp";

const BannerAuth = () => {
  const isLogin = useSelector((state) => state.authpage.isLogin);
  return (
    <div
      className={`w-1/2 h-full absolute  bg-primary flex flex-col justify-evenly items-center transition-all duration-300 ${
        isLogin ? "translate-x-full" : "translate-x-0"
      }`}
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Brand className={"max-w-48"} />
      <NavigateAuth />
    </div>
  );
};

export default BannerAuth;
