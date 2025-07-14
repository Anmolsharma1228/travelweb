import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formdata, setformdata] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.email === formdata.email &&
      storedUser.password === formdata.password
    ) {
      localStorage.setItem('isAuthenticated', 'true');
      dispatch({ type: 'LOGIN', payload: storedUser });
      alert('Login successful!');
      navigate('/travelblog')
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-2xl">
        <div className="text-center py-6 bg-gradient-to-r from-[#3D0301] to-[#2E5077] text-white">
          <h1 className="text-3xl font-bold">Login Account</h1>
        </div>
        <div className="p-8">
          <form className="space-y-4">
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                value={formdata.email}
                placeholder="Email"
                onChange={(e) =>
                  setformdata({ ...formdata, [e.target.name]: e.target.value })
                }
              />
              <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                value={formdata.password}
                placeholder="Password"
                onChange={(e) =>
                  setformdata({ ...formdata, [e.target.name]: e.target.value })
                }
              />
              <i className="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
            </div>
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
