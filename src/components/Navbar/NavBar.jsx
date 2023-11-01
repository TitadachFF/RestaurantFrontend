import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav
      id="nav"
      className="dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div id="logo" className="flex justify-between items-center mx-auto p-3">
        <div className="w-[200px]">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="http://www.babyriki.com/wp-content/uploads/2018/08/babyriki-pandy.png"
              className="h-20 mr-3 flex"
              alt="Pandy Logo"
            />
            <span
              id="logo-name"
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              Food Pandy
            </span>
          </a>
        </div>
        <div className="flex md:order-2">
          <button
            id="log-btn"
            type="button"
            className="flex text-white bg-pink-400 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            เข้าสู่ระบบ / ลงทะเบียน
          </button>
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

      <nav id="nav2" className="md:flex justify-center">
        <div className="flex ">
          <ul className="flex flex-row space-x-4 md:space-x-6">
            <li className="nav2-item">
              <a
                href="#"
                id="nav2-text"
                className="flex flex-col items-center dark:text-white"
              >
                <img
                  id="nav2img"
                  src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png"
                  alt=""
                />
                <p>อาหารทั่วไป</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                id="nav2-text"
                className="flex flex-col items-center dark:text-white"
              >
                <img
                  id="nav3img"
                  src="https://png.pngtree.com/png-clipart/20230411/original/pngtree-ice-cream-dessert-realistic-white-background-transparent-png-image_9047252.png"
                  alt=""
                />
                <p>ของหวาน</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                id="nav2-text"
                className="flex flex-col items-center dark:text-white"
              >
                <img
                  id="nav3img"
                  src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-pearl-milk-tea-pearl-drink-transparent-png-image_9059833.png"
                  alt=""
                />
                <p>เครื่องดื่ม</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                id="nav4-text"
                className="flex flex-col items-center dark:text-white"
              >
                <img
                  id="nav4img"
                  src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-chocolate-melted-water-drops-png-image_9136876.png"
                  alt=""
                />
                <p>ขนม เเละ ของทานเล่น</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default NavBar;
