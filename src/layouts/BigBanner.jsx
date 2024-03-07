import Background from "../components/Background";
import logo from "../assets/img/Logo.png";
import DownArrowBtn from "../components/DownArrowBtn";
import LogoForBanner from "../components/LogoForBanner";

function BigBanner() {
  return (
    <Background className="justify-center items-center">
      <img src={logo} alt="Logo" className="max-w-[144px] absolute top-12" />
      <LogoForBanner />
      <DownArrowBtn />
    </Background>
  );
}

export default BigBanner;
