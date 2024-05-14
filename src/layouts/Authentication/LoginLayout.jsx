import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setError } from "../../redux/slice/authPage";
import Input from "../../components/Input/Input";
import AuthButton from "../../components/Button/AuthButton";
import NavigateAuth from "../../components/Button/NavigateAuth";
import Brand from "../../components/Icon/Brand";
import axios from "axios";

const LoginForm = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const error = useSelector((state) => state.authpage.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${API_URL}/auth/login`, { email: email, password: password })
      .then((res) => {
        localStorage.setItem("username", res.data.data.username);
        setLoading(false);
        navigate(0);
      })
      .catch((error) => {
        setLoading(false);
        dispatch(setError(error?.response.data.message));
      });
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
        <AuthButton label={loading ? "loading" : "LOGIN"} />
        <NavigateAuth addClass="sm:hidden" />
      </div>
    </form>
  );
};

export default LoginForm;
