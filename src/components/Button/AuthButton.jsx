const ButtonAuth = ({ label }) => {
  return (
    <button
      className={`text-headline bg-primary w-full py-2 rounded-xl font-bold md:text-lg`}
      type="submit"
    >
      {label}
    </button>
  );
};

export default ButtonAuth;
