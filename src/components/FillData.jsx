import { useDispatch } from "react-redux";
import { clearError } from "../redux/slice/authPage";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

function FillData({ Label, Name, Type, value, Id, Placeholder, onChange }) {
  const dispatch = useDispatch();
  const [revealPass, setRevealPass] = useState(false);

  let conditionalType = Type;
  if (Type == "password") {
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
    <div className="w-full flex flex-col">
      <label htmlFor={Id} className="text-xl mb-2 font-bold">
        {Label}
      </label>
      <div className="relative">
        <input
          required
          type={conditionalType}
          name={Name}
          id={Id}
          value={value}
          placeholder={Placeholder}
          className={`border border-primary rounded-md w-full h-14 py-4 pl-4 font-light outline-none ${
            Type == "password" ? "pr-12" : ""
          }`}
          onChange={onChange}
          onFocus={() => {
            dispatch(clearError());
          }}
        />
        {Type == "password" ? <EyePassword /> : ""}
      </div>
    </div>
  );
}

export default FillData;
