/* eslint-disable react-hooks/exhaustive-deps */
import FillData from "../components/FillData";
import AuthButton from "../components/AuthButton";
import ChangeAuth from "../components/ChangeAuth";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  const [goto, setGoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let user = localStorage.getItem(email);

  useEffect(() => {
    if (user == password) {
      setGoto("/");
    }
  }, [password]);

  const handleLogin = () => {
    if (user != password) {
      alert("Email atau Password tidak sesuai");
    }
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
      <Link to={goto} className="w-full">
        <AuthButton onClick={handleLogin}>SignIn</AuthButton>
      </Link>
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
