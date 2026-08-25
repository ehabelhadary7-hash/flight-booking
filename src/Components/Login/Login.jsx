import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("isRegistered", "true");
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login Successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("error.message");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No registered account found.");
      return;
    }

    if (
      loginData.username === savedUser.username &&
      loginData.password === savedUser.password
    ) {
      localStorage.setItem("loggedIn", "true");
      alert("Login Successful");

      navigate("/");
    } else {
      alert("Username or Password is incorrect");
    }
  };

  return (
    <div className="bg-base-200 flex justify-center items-center min-h-screen">


      {/* Login Form */}
      <div className="lg:p-36 md:p-20 p-8 w-full lg:w-1/2">

        <div className="btn-wrapper text-center">
          {/* <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button" onClick={handleGoogleLogin}>
            Login with
            <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Google
          </button> */}
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block mb-2">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
            />

            <span>Remember Me</span>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Login
          </button>

        </form>

        <div className="mt-6 text-center">
          Don't have an account?

          <Link
            to="/register"
            className="text-primary font-semibold ml-2"
          >
            Register
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Login;