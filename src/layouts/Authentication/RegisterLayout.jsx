import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, toggleAuth } from "../../redux/slice/authPage";
import Input from "../../components/Input/Input";
import AuthButton from "../../components/Button/AuthButton";
import NavigateAuth from "../../components/Button/NavigateAuth";
import Brand from "../../components/Icon/Brand";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

const RegisterForm = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      //sign up auth supabase
      axios
        .post(`${API_URL}/auth/register`, {
          username: username,
          email: email,
          password: password,
        })
        .then(() => {
          setLoading(false);
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
        })
        .catch((error) => {
          setLoading(false);
          dispatch(setError(error?.response.data.message));
        });
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
          <AuthButton label={loading ? "loading" : "LOGIN"} />
          <NavigateAuth addClass="sm:hidden" />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
