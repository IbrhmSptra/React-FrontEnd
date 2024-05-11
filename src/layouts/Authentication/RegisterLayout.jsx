import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, toggleAuth } from "../../redux/slice/authPage";
import Input from "../../components/Input/Input";
import AuthButton from "../../components/Button/AuthButton";
import NavigateAuth from "../../components/Button/NavigateAuth";
import Brand from "../../components/Icon/Brand";
import {
  InsertCredentials,
  SignUp,
} from "../../services/supabase.auth.service";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const error = useSelector((state) => state.authpage.error);
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
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
    <>
      <form
        className="flex flex-col h-full justify-around w-full"
        onSubmit={handleRegister}
      >
        <div className=" flex w-full justify-center sm:hidden">
          <Brand className={"max-w-28"} />
        </div>
        <div className="space-y-4 mb-10 xl:space-y-6">
          <Input
            label="Username"
            type="text"
            placeholder="Enter Your Username"
            onchange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            onchange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            onchange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Re-Enter Your Password"
            onchange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
        <div className="space-y-4">
          <AuthButton label="SIGN UP" />
          <NavigateAuth addClass="sm:hidden" />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
