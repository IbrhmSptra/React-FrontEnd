import Login from "../layouts/Login";
import Register from "../layouts/Register";
import Banner from "../layouts/Banner";
import BigBanner from "../layouts/BigBanner";
function Authentication() {
  return (
    <div className="w-screen h-screen overflow-x-hidden scroll-smooth">
      <div className="overflow-x-hidden w-screen h-screen relative">
        <BigBanner />
      </div>
      <div
        id="auth"
        className="w-screen h-screen flex justify-center items-center"
      >
        <div className="relative h-screen w-screen rounded-xl overflow-hidden flex md:border-primary md:border-2 md:h-[90%] lg:w-[80%]">
          <Login />
          <Register />
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
