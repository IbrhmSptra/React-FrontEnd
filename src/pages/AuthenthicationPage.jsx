// import Login from "../layouts/Login";
// import Register from "../layouts/Register";
// import Banner from "../layouts/Banner";
// import BigBanner from "../layouts/BigBanner";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WelcomeAuth from "../layouts/Authentication/WelcomeAuth";
import LoginForm from "../layouts/Authentication/LoginLayout";
import RegisterForm from "../layouts/Authentication/RegisterLayout";
import { useSelector } from "react-redux";
import Background from "../assets/img/background.webp";
import BannerAuth from "../layouts/Authentication/BannerAuth";

function Authentication() {
  const isLogin = useSelector((state) => state.authpage.isLogin);
  return (
    <div>
      <ToastContainer
        className="font-poppins text-headline text-sm"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        progressStyle={{ backgroundColor: "#FEDA15" }}
      />
      <WelcomeAuth />
      <section
        id="auth"
        className=" h-screen py-10 px-4 sm:px-8 md:px-12 xl:px-40  font-poppins"
      >
        {/* Only For Mobile */}
        <div
          className="h-full block sm:hidden"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>

        <div className="h-full w-full hidden gap-x-2 sm:flex border-4 border-primary relative rounded-xl overflow-hidden">
          <div className="w-full px-4 md:px-8 lg:px-14">
            <LoginForm />
          </div>
          <div className="w-full px-4 md:px-10 lg:px-14">
            <RegisterForm />
          </div>
          <BannerAuth />
        </div>
      </section>
    </div>
  );
}

export default Authentication;
