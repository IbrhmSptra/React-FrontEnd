function ChangeAuth({ className, quetion, info, onClick }) {
  return (
    <div
      className={`w-full flex justify-center items-center gap-1 my-5 font-poppins ${className}`}
    >
      <p className="font-medium">{quetion}</p>
      <button
        onClick={onClick}
        className="text-tertiary underline underline-offset-1 cursor-pointer font-semibold"
      >
        {info}
      </button>
    </div>
  );
}

export default ChangeAuth;
