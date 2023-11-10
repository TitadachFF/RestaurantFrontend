import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSearchContext } from "../../hook/SearchContext";

const NavBarCate = () => {
  const {setSearchValue} = useSearchContext();
  return (
    <nav
      id="nav2"
      className="md:flex justify-center  text-pink-500 bg-white border-gray-400"
    >
      <div className="flex ">
        <ul className="flex flex-row space-x-4 md:space-x-6">
          <li className="nav2-item">
            <a
            onClick={()=>setSearchValue("อาหาร")}
              href="#"
              id="nav2-text"
              className="flex flex-col items-center dark:text-white rounded-md  w-[90px]  text-center hover:bg-gray-300"
            >
              <img
                className=" w-[50px] content-center    mx-[20px]  "
                id="nav2img"
                src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png"
                alt=""
              />
              <p>อาหารทั่วไป</p>
            </a>
          </li>
          <li>
            <a
            onClick={()=>setSearchValue("ของหวาน")}
              href="#"
              id="nav2-text"
              className="flex flex-col items-center dark:text-white rounded-md  w-[90px]  text-center hover:bg-gray-300"
            >
              <img
                className=" w-[50px] content-center    mx-[20px]  "
                src="https://png.pngtree.com/png-clipart/20230411/original/pngtree-ice-cream-dessert-realistic-white-background-transparent-png-image_9047252.png"
                alt=""
              />
              <p>ของหวาน</p>
            </a>
          </li>
          <li>
            <a
            onClick={()=>setSearchValue("เครื่องดื่ม")}
              href="#"
              id="nav2-text"
              className="flex flex-col items-center dark:text-white rounded-md  w-[90px]  text-center hover:bg-gray-300"
            >
              <img
                className=" w-[50px] content-center    mx-[20px]  "
                id="nav3img"
                src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-pearl-milk-tea-pearl-drink-transparent-png-image_9059833.png"
                alt=""
              />
              <p>เครื่องดื่ม</p>
            </a>
          </li>
          <li>
            <a
            onClick={()=>setSearchValue("ของทานเล่น")}
              href="#"
              id="nav4-text"
              className="flex flex-col items-center dark:text-white rounded-md  w-[150px]  text-center hover:bg-gray-300"
            >
              <img
                className=" w-[50px] content-center    mx-[40px]  "
                id="nav4img"
                src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-chocolate-melted-water-drops-png-image_9136876.png"
                alt=""
              />
              <p>ของทานเล่น ฯลฯ</p>
            </a>
          </li>
        </ul>
     
      </div>
    </nav>
  );
};

export default NavBarCate;