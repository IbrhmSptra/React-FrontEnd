import Brand from "../../components/Icon/Brand";
import Tagline from "../../components/Tagline";
import StartButton from "../../components/Button/StartButton";
import Background from "../../assets/img/background.webp";

const WelcomeAuth = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-between py-10 bg-primary"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    >
      <Brand className="max-w-20 lg:max-w-28" />
      <Tagline />
      <StartButton />
    </div>
  );
};

export default WelcomeAuth;
