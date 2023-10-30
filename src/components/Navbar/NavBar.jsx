import React from "react";
import './Navbar.css';
const NavBar = () => {
  return (

<nav id="nav" class="  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div id="logo" class=" flex flex-wrap items-center mx-auto p-3">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="http://www.babyriki.com/wp-content/uploads/2018/08/babyriki-pandy.png" class="h-20 mr-3 flex" alt="Pandy Logo"/>
      <span id="logo-name" class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Food Pandy</span>
  </a>
  <div class="flex md:order-2">



    <button id="log-btn" type="button" class="flex text-white bg-pink-400 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2   text-center   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">เข้าสู่ระบบ / ลงทะเบียน</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div  id="searchbox" class="relative hidden md:block mr-10">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ค้นหาเมนูที่ถูกใจได้ที่นี้เลย..."/>
    </div>
  </div>


  <nav id="nav2" class="">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="#" class=" dark:text-white hover:underline" aria-current="page">อาหารคาว</a>
                 
                </li>
                <li>
                    <a href="#" class=" dark:text-white hover:underline">อาหารหวาน</a>
                </li>
                <li>
                    <a href="#" class=" dark:text-white hover:underline">เครื่องดื่ม</a>
                </li>
                <li>
                    <a href="#" class=" dark:text-white hover:underline">ของทานเล่น</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

  
</nav>


    
  );
};

export default NavBar;
