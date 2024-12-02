import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../redux/userSlice";

// Import images using ES module imports for Vite
import gradientImage from "../assets/services/service-3.png";
import backgroundImage from "../assets/services/service-1.png";
import serviceImage from "../assets/bg1.png";

const Login = () => {
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(gradientImage);
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((store) => store.app.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const images = [serviceImage, gradientImage, backgroundImage];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentBackgroundImage(images[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      try {
        const user = { email, password };
        const res = await axios.post(`http://localhost:9090/api/user/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setUser(res.data.user));
          navigate("/mainpage"); // Navigate to /mainpage after successful login
        }
      } catch (error) {
        console.log(error);
        toast.error("Can't login, check credentials");
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      try {
        const res = await axios.post(`http://localhost:9090/api/user/register`, {
          fullName,
          email,
          password,
        }, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
          setIsLogin(true);
        }
      } catch (error) {
        console.log(error);
        toast.error("Can't register, try again.");
      } finally {
        dispatch(setLoading(false));
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div
        className="absolute"
        style={{
          backgroundImage: `url(${currentBackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          transition: "background-image 1s ease",
        }}
      />
      <form
        onSubmit={getInputData}
        className="flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-80 rounded-md"
      >
        <h1 className="text-3xl text-white mb-5 font-bold">
          {isLogin ? "LogIn" : "SignUp"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              type="text"
              placeholder="FullName"
              className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-purple-400 p-3 mt-6 text-white rounded-md font-medium"
            disabled={isLoading}
          >
            {`${isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}`}
          </button>
          <p className="text-white font-medium mt-8">
            {isLogin ? "New to ColecIQ?" : "Already Have an Account?"}
            <span
              className="ml-2 text-purple-500 cursor-pointer"
              onClick={loginHandler}
            >
              {isLogin ? "SignUp" : "LogIn"}
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
