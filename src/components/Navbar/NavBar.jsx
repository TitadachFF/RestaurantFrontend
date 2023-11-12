import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { useAuthContext } from "../../context/AuthContext";
import { useSearchContext } from "../../hook/SearchContext";



const NavBar = () => {

  const {user, logout} = useAuthContext();
  const navigate = useNavigate();
  const handlelogout =() =>{
    logout();
    navigate("/signin")

  }

  
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const { searchValue, setSearchValue } = useSearchContext();


  

  return (
    <nav
      id="nav"
      className="dark:bg-gray-900 fixed w-full z-20 top-0 left-0  border-pink-300 dark:border-gray-600 border-b-[3px] "
    >
      <div id="logo" className="flex justify-between items-center mx-auto p-3 ">
        <div className="w-[200px]">
          <a href="/" className="flex items-center   ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7p18fA7YH5GS2LXXkuRrACVTCWAZbt1y8TwkdHy0Fb_SOpx2dQ_smcCvReGo-Ig-OAuw&usqp=CAU"
              className="h-20 mr-3 flex  rounded-full    "
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


   


        {!user &&(
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
          </button>

        </div>
     )}
      
     
        <div id="searchbox" className=" relative hidden md:block  ">
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
          value={searchValue}
          onChange={handleSearchInputChange}
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ค้นหาเมนูที่ถูกใจได้ที่นี้เลย..."
          />
          
        </div>

<div className="ml-[420px]">
        {user && user.roles.includes("ROLES_ADMIN") &&  (
        
          <Link className="nav-link  bg-red-500 rounded-xl pl-[10px] pr-[10px] pt-[5px] pb-[5px]  font-bold text-white" to="add">
         +เพิ่มรายการอาหาร
            </Link>
   
            )}
</div>

        {user &&(
        <div className="">
              <span className=" text-white text-[20px] ">ยินดีต้อนรับ, <span className="mr-sm2 h4">
                <Link className='nav-link ' to={"Profile"}>{user.username} </Link>
                <Link className='nav-link bg-blue-300 rounded-xl pl-[10px] pr-[10px] pt-[5px] pb-[5px] mr-1' to={"Profile"}>ดูข้อมูลบัญชี</Link></span>
              </span>
           
              <button className=" text-red-800 rounded-xl  mr-2 text-[15px] pl-[2px] pr-[2px] border-[1px] border-solid border-pink-300 border "  onClick={handlelogout}>ออกจากระบบ</button>
            </div>
        )}
      </div>


      
    
    </nav>
  );
};

export default NavBar;
