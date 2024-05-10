/* eslint-disable react-hooks/exhaustive-deps */
import FillData from "../components/FillData";
import AuthButton from "../components/Button/AuthButton";
import ChangeAuth from "../components/ChangeAuth";
import { useState } from "react";
import { SignIn, getUsername } from "../services/supabase.auth.service";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../redux/slice/authPage";
import { useNavigate } from "react-router-dom";

function Login(props) {
  let { top = "z-1" } = props;

  const changePosition = () => {
    localStorage.setItem("position", true);
    location.reload();
  };
  const position = JSON.parse(localStorage.getItem("position"));
  if (position == true) {
    top = "z-[-1]";
  } else {
    top = "z-1";
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.authpage.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
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
    <div
      className={`bg-white  w-full h-full gap-5 items-start justify-center flex flex-col p-5 md:p-16 md:w-6/12 font-poppins md:z-0 ${top}`}
    >
      <FillData
        Type="email"
        Placeholder="Masukan Email"
        Id="email"
        Label="Email"
        Name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FillData
        Type="password"
        Placeholder="Masukan Password"
        Id="password"
        Label="Password"
        Name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mt-5 flex items-center gap-5">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          className="accent-primary w-5 h-5 cursor-pointer"
        />
        <label
          htmlFor="remember"
          className="font-light text-base hover:cursor-pointer"
        >
          Ingat Saya
        </label>
      </div>
      {error && (
        <p className="w-full text-center text-sm font-light text-tertiary">
          {error}
        </p>
      )}

      <AuthButton onClick={handleLogin}>SignIn</AuthButton>

      <div className="flex w-full justify-center gap-1 font-poppins">
        <p className="font-light text-sm">Lupa Password?</p>
        <a
          href="#"
          className="text-tertiary font-light underline-offset-2 underline text-sm"
        >
          klik di sini
        </a>
      </div>
      <ChangeAuth
        onClick={changePosition}
        quetion="Belum punya akun?"
        info="Daftar Di Sini"
        className="md:hidden"
      />
    </div>
  );
}
export default Login;
