function AuthButton({ children, className, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`bg-primary w-full py-2 mt-8 font-bold text-xl rounded-md uppercase ${className}`}
    >
      {children}
    </button>
  );
}
export default AuthButton;
