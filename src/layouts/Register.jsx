import FillData from "../components/FillData";
import AuthButton from "../components/Button/AuthButton";
import ChangeAuth from "../components/ChangeAuth";
import { useState } from "react";
import { InsertCredentials, SignUp } from "../services/supabase.auth.service";
import { useDispatch, useSelector } from "react-redux";
import { setError, toggleAuth } from "../redux/slice/authPage";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

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
  const [confirmPassword, setConfirmPassword] = useState("");
  const error = useSelector((state) => state.authpage.error);
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (
      email == "" ||
      username == "" ||
      password == "" ||
      confirmPassword == ""
    ) {
      dispatch(setError("Lengkapi input terlebih dahulu"));
    } else if (username.length > 8) {
      dispatch(setError("Username maksimal 8 huruf"));
    } else if (password !== confirmPassword) {
      dispatch(setError("Password Tidak Sama"));
    } else {
      const data = { email: email, password: password };
      //sign up auth supabase
      SignUp((data, error) => {
        // kalau eror
        if (error) {
          dispatch(setError(error));
        } else {
          //insert credentials user into table akun
          InsertCredentials(data.user.id, username, email);
          //add toast
          toast("Akun anda berhasil terdaftar", {
            icon: () => <FaCheckCircle size={40} color="#FEDA15" />,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
          //clear the state
          setUsername("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          dispatch(toggleAuth());
        }
      }, data);
    }
  };

  return (
    <div
      className={` bg-white gap-5 w-full h-full ${bottom} items-center justify-center flex flex-col p-5 absolute md:relative md:w-6/12 md:p-16 md:z-0`}
    >
      <FillData
        Type="text"
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
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <AuthButton onClick={handleRegister}>SIGNUP</AuthButton>
      {error && (
        <p className="text-center text-sm font-light text-tertiary">{error}</p>
      )}

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
