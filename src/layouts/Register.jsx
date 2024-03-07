import FillData from "../components/FillData";
import AuthButton from "../components/AuthButton";
import ChangeAuth from "../components/ChangeAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
  let { bottom = "z-1" } = props;
  const changePosition = () => {
    localStorage.setItem("position", false);
    location.reload();
  };
  const position = JSON.parse(localStorage.getItem("position"));
  if (position == false) {
    bottom = "z-[-1]";
  } else {
    bottom = "z-1";
  }

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [consfirmPassword, setConsfirmPassword] = useState("");

  let data = localStorage.getItem(email);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email.match("@", ".com") || email == null) {
      alert("Email invalid");
    } else if (password.length < 6) {
      alert("Password Minimal 6 Karakter");
    } else if (password !== consfirmPassword) {
      alert("Password Tidak Sama");
    } else if (data !== null) {
      alert("Email Sudah Digunakan");
    } else {
      localStorage.setItem(email, password);
      navigate("/");
    }
  };

  return (
    <div
      className={` bg-white gap-5 w-full h-full ${bottom} items-center justify-center flex flex-col p-5 absolute md:relative md:w-6/12 md:p-16 md:z-0`}
    >
      <FillData
        Type="username"
        Placeholder="Masukan Username"
        Id="regisUsername"
        Label="Username"
        Name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FillData
        Type="email"
        Placeholder="Masukan Email"
        Id="regisEmail"
        Label="Email"
        Name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FillData
        Type="password"
        Placeholder="Masukan Password"
        Id="regisPassword"
        Label="Password"
        Name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FillData
        Type="password"
        Placeholder="Confirm password"
        Id="consfirmPassword"
        Label="Confirm Password"
        Name="confirmPassword"
        value={consfirmPassword}
        onChange={(e) => setConsfirmPassword(e.target.value)}
      />
      <AuthButton onClick={handleRegister}>SIGNUP</AuthButton>
      <ChangeAuth
        onClick={changePosition}
        quetion="Sudah punya akun?"
        info="Masuk Di Sini"
        className="md:hidden"
      />
    </div>
  );
}

export default Register;
