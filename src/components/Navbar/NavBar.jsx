import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      id="nav"
      className="dark:bg-gray-900 fixed w-full z-20 top-0 left-0  border-pink-300 dark:border-gray-600 border-b-[3px]"
    >
      <div id="logo" className="flex justify-between items-center mx-auto p-3 ">
        <div className="w-[200px]">
          <a href="/" className="flex items-center   ">
            <img
              src="http://www.babyriki.com/wp-content/uploads/2018/08/babyriki-pandy.png"
              className="h-20 mr-3 flex bg-pink-200 rounded-full    "
              alt="Pandy Logo"
            />
            <span
              id="logo-name"
              className="self-center text-2xl font-semibold whitespace-nowrap text-white font-bold text-[30px]"
            >
              Food
            </span>
            <span
              id="logo-name"
              className="self-center text-2xl font-semibold whitespace-nowrap text-pink-200 font-bold text-[30px] "
            >
              Pandy
            </span>
          </a>
        </div>

        <div className="flex md:order-2">
          <Link
            className="nav-link flex text-white bg-pink-300 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            to="Signin"
            id="log-btn"
            type="button"
          >
            📝 เข้าสู่ระบบ / ลงทะเบียน
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div id="searchbox" className="relative hidden md:block mr-[620px] ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ค้นหาเมนูที่ถูกใจได้ที่นี้เลย..."
          />
        </div>
      </div>

    
    </nav>
  );
};

export default NavBar;
