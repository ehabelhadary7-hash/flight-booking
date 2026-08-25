import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !user.firstName ||
    !user.lastName ||
    !user.username ||
    !user.email ||
    !user.password ||
    !user.confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (user.password !== user.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // حفظ بيانات المستخدم
  localStorage.setItem("user", JSON.stringify(user));

  // المستخدم بقى مسجل
  localStorage.setItem("isRegistered", "true");

  alert("Registration Successful");

  // التحويل لصفحة Login
  navigate("/login");
};

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center py-10 px-4">
      <div className="max-w-lg w-full bg-base-100 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="label">
              <span className="label-text">First Name</span>
            </label>

            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>

            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Username</span>
            </label>

            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Register
          </button>

        </form>

        <div className="text-center mt-6">
          <span>Already have an account? </span>

          <Link
            to="/login"
            className="text-primary font-semibold"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Register;