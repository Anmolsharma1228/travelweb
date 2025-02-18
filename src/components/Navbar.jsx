import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/logo/HOTEL_KING.png";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStore = localStorage.getItem("user");
    if (userStore) {
      setUser(JSON.parse(userStore));
    }
  }, []);

  const toggleUserDropdown = () => {
    setUserDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/travelblog");
  };

  return (
    <nav className="shadow-md shadow-black bg-gradient-to-r from-[#2E5077] to-[#1A1A1D] fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mx-5 justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-lg font-semibold">
              <img src={logo} className="w-[60px] rounded-full" alt="" />
            </NavLink>
          </div>

          {/*  Menu (Mobile) */}
          <div className="lg:hidden flex items-center text-3xl text-gray-400 hover:text-white">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <ImCross /> : <HiBars3CenterLeft />}
            </button>
          </div>

          {/* Desktop NavLinks */}
          <div data-testid="navbar" className="hidden lg:flex items-center">
            <NavLink
              data-testid="hotels"
              to="/travelblog"
              className={({ isActive }) =>
                isActive
                  ? "text-white hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
                  : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
              }
            >
              Travel Blog
            </NavLink>
            <NavLink
              to="/Hotels"
              className={({ isActive }) =>
                isActive
                  ? "text-white hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
                  : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
              }
            >
              Hotels
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive
                  ? "text-white hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
                  : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
              }
            >
              Help
            </NavLink>

            <div>
              <input
                type="search"
                placeholder="Search here..."
                className="text-white px-3 py-1 mx-5 rounded-sm outline-none bg-transparent border-black"
              />
            </div>

            {user && (
              <div className="flex items-center space-x-4">
                <Link to="" className="text-white hover:text-gray-300 text-2xl">
                  <FaHeart />
                </Link>
                <Link
                  to="/favoritehotel"
                  className="text-white hover:text-gray-300 text-2xl"
                >
                  <FaShoppingCart />
                </Link>
              </div>
            )}

            {user ? (
              <div className="relative ml-3">
                <button
                  onClick={toggleUserDropdown}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaRegUserCircle className="text-2xl" />
                </button>
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg w-56 p-4">
                    <p className="text-gray-700 text-sm font-bold">
                      User: {user.name || user.email}
                    </p>
                    <p className="text-gray-500 text-sm">Email: {user.email}</p>
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 py-1 rounded-md text-center text-white hover:bg-red-600 text-sm mt-2 w-full"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signup"
                className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md text-[18px] font-mono font-semibold ml-4"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile NavLinks */}
      {isOpen && (
        <div className="lg:hidden bg-transparent">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {user && (
              <p className="text-white px-3 py-2 text-lg font-bold capitalize">
                Welcome, {user.name || user.email}
              </p>
            )}

            <NavLink
              to="/travelblog"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Travel Blog
            </NavLink>
            <NavLink
              to="/Hotels"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Hotels
            </NavLink>
            <NavLink
              to="/favoritehotel"
              className={({ isActive }) =>
                isActive
                  ? "text-white hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
                  : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-[18px] font-mono font-semibold"
              }
            >
              Favorite Hotel
            </NavLink>
            <NavLink
              to="/help"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Help
            </NavLink>

            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/signup"
                className="bg-red-500 text-white hover:bg-red-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
