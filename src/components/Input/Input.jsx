import { useDispatch } from "react-redux";
import { clearError } from "../../redux/slice/authPage";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Input = ({ type, label, placeholder, onchange, value }) => {
  const dispatch = useDispatch();
  const [revealPass, setRevealPass] = useState(false);

  let conditionalType = type;
  if (type == "password") {
    if (revealPass) {
      conditionalType = "text";
    } else {
      conditionalType = "password";
    }
  }

  function EyePassword() {
    if (revealPass) {
      return (
        <FaRegEye
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          size={20}
          onClick={() => {
            setRevealPass(!revealPass);
          }}
        />
      );
    } else {
      return (
        <FaRegEyeSlash
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          size={20}
          onClick={() => {
            setRevealPass(!revealPass);
          }}
        />
      );
    }
  }

  return (
    <div>
      <h3 className={`text-headline font-bold text-lg lg:text-xl`}>{label}</h3>
      <div className="relative">
        <input
          className={`w-full text-xs py-3 px-4 rounded-lg border-primary text-grayText border-2 bg-card mt-1 lg:text-lg focus:outline-primary`}
          type={conditionalType}
          placeholder={placeholder}
          onChange={onchange}
          required
          onFocus={() => {
            dispatch(clearError(""));
          }}
          value={value}
        />
        {type == "password" ? <EyePassword /> : null}
      </div>
    </div>
  );
};

export default Input;
