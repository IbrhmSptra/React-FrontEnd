import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignIn, getUsername } from "../services/supabase.auth.service";
import { setError } from "../redux/slice/authPage";
import Input from "../components/Input/Input";
import AuthButton from "../components/Button/AuthButton";
import NavigateAuth from "../components/Button/NavigateAuth";
import Brand from "../components/Brand";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.authpage.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };
    SignIn((res, error) => {
      if (error) {
        dispatch(setError(error));
      } else {
        getUsername((username) => {
          localStorage.setItem("username", username);
          navigate(0);
        }, res.user.id);
      }
    }, credentials);
  };
  return (
    <form
      className="flex flex-col h-full justify-around w-full"
      onSubmit={handleLogin}
    >
      <div className=" flex w-full justify-center sm:hidden">
        <Brand className={"max-w-28"} />
      </div>
      <div className="space-y-8 mb-10">
        <Input
          label="Email"
          type="email"
          placeholder="Masukan Email"
          onchange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Masukan Password"
          onchange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
      <div className="space-y-10">
        <AuthButton label={"LOGIN"} />
        <NavigateAuth addClass="sm:hidden" />
      </div>
    </form>
  );
};

export default LoginForm;
