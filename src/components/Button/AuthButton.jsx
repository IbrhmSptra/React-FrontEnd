import Loading from "../Icon/Loading";

const ButtonAuth = ({ label }) => {
  return (
    <button
      className={`text-headline bg-primary w-full py-2 rounded-xl font-bold flex justify-center md:text-lg`}
      type="submit"
    >
      {label == "loading" ? <Loading /> : label}
    </button>
  );
};

export default ButtonAuth;
