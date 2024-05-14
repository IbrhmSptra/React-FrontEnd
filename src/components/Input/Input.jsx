import { useDispatch } from "react-redux";
import { clearError } from "../../redux/slice/authPage";

const Input = ({ type, label, placeholder, onchange, value }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className={`text-headline font-bold text-lg lg:text-xl`}>{label}</h3>

      <input
        className={`w-full text-xs py-3 px-4 rounded-lg border-primary text-grayText border-2 bg-card mt-1 lg:text-lg focus:outline-primary`}
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        required
        onFocus={() => {
          dispatch(clearError(""));
        }}
        value={value}
      />
    </div>
  );
};

export default Input;
