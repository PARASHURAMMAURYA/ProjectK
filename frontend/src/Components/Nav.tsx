import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const Logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="border-gray-200  dark:border-gray-700 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={'munna'} className="h-16 rounded-full" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Project-K
          </span>
        </div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`relative  w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-solid-bg"
        >
          <ul className="  flex flex-col shadow-lg  font-medium mt-4 rounded-lg   md:space-x-16   px-8 py-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {auth ? (
              <>
                <li className="block   py-2 px-3 md:p-0   rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <NavLink
                    to="/"
                    aria-current="page"
                    className={({ isActive }) =>
                      `group   transition duration-300 no-underline hover:no-underline ${
                        isActive ? "text-gray-300" : ""
                      }`
                    }
                  >
                    Home
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
                  </NavLink>
                </li>
                <li className="block   py-2 px-3 md:p-0   rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <NavLink
                    to="/policy"
                    className={({ isActive }) =>
                      `group    transition duration-300 no-underline hover:no-underline ${
                        isActive ? "text-gray-300" : ""
                      }`
                    }
                  >
                    Policy
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
                  </NavLink>
                </li>
                <li className="block  py-2 px-3 md:p-0   rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <NavLink
                    to="/newsfeed"
                    className={({ isActive }) =>
                      `group  transition duration-300 no-underline hover:no-underline ${
                        isActive ? "text-gray-300" : ""
                      }`
                    }
                  >
                    NewsFeed
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
                  </NavLink>
                </li>

                <li className="block  py-2 px-3 md:p-0   rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `group  transition duration-300 no-underline hover:no-underline ${
                        isActive ? "text-gray-300" : ""
                      }`
                    }
                  >
                    Contact
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
                  </NavLink>
                </li>


                <li className="block    py-2 px-3 md:p-0   rounded md:hover:bg-transparent   md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <NavLink
                  onClick={Logout}
                    to="/login"
                    className={({ isActive }) =>
                      `group  transition duration-300 no-underline hover:no-underline ${
                        isActive ? "text-gray-300" : ""
                      }`
                    }
                  >
                    Logout
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
                  </NavLink>
                </li>
              </>
            ) : (
              <div className="flex flex-row   border">
                <li className="block   py-2 px-3 md:p-2   rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `group   transition duration-300 no-underline hover:no-underline ${
                        isActive ? "text-gray-300" : ""
                      }`
                    }
                  >
                    Login
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
                  </NavLink>
                </li>
<span className=" py-2 px-3 ">/</span>
                <li className="block   py-2 px-3 md:p-2   rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `group   transition duration-300 no-underline hover:no-underline ${
                        isActive ? "text-gray-300" : ""
                      }`
                    }
                  >
                    SignUp
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-red-900"></span>
                  </NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
