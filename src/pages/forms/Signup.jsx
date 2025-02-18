import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value.trim().length < 3) {
      setErrors((prev) => ({
        ...prev,
        name: "Name must be at least 3 characters long.",
      }));
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else if (name === "password" && value.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setformdata({ ...formdata, [name]: value });
  };

  const handlesigup = (e) => {
    e.preventDefault();

    // Check for validation errors before proceeding
    if (!formdata.name || errors.name) {
      alert("Please provide a valid name.");
      return;
    }
    if (!formdata.email || errors.email) {
      alert("Please provide a valid email.");
      return;
    }
    if (!formdata.password || errors.password) {
      alert("Please provide a valid password.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formdata));
    alert("Signup successful!");
    navigate('/login')
  };

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-2xl">
        <div className="text-center py-6 bg-gradient-to-r from-[#3D0301] to-[#2E5077] text-white">
          <h1 className="text-3xl font-bold">Create account</h1>
        </div>
        <div className="p-8">
          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                placeholder="Full Name"
                value={formdata.name}
                onChange={handlechange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                placeholder="Email"
                value={formdata.email}
                onChange={handlechange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                placeholder="Password"
                value={formdata.password}
                onChange={handlechange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
            </div>
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
              onClick={handlesigup}
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-blue-700">
            <Link to="/login">Already have an account?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
