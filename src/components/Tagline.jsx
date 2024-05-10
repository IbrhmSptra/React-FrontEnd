import Logo from "../assets/img/Cooking-logo.png";

export default function Tagline() {
  return (
    <div className="text-center lg:flex items-center gap-x-4">
      <img
        src={Logo}
        alt="Cooking Logo"
        className="max-w-20 inline-block lg:max-w-32"
      />
      <h1 className="font-poppins text-3xl max-w-60 font-bold lg:text-6xl lg:max-w-[30rem] lg:text-start">
        MASAK YANG <span className="text-tertiary">KAMU MAU</span>
      </h1>
    </div>
  );
}
