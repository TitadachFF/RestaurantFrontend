import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full bg-pink-100 p-5">

      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <div className="flex flex-row">
        <img src="http://www.babyriki.com/wp-content/uploads/2018/08/babyriki-pandy.png" alt="logo-ct" className="w-20  " />
        <h className="font-bold text-[30px] text-pink-500 mt-[20px]">FoodPandy</h>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-0">
            
          <li>
            <Typography
              as="a"
              href="#"
              color="pink"
              className="font-normal transition-colors hover:bg-pink-200 rounded-md w-[90px]  "
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="pink"
              className="font-normal transition-colors hover:bg-pink-200 rounded-md w-[90px] "
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="pink"
              className="font-normal transition-colors hover:bg-pink-200 rounded-md w-[90px]  "
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="pink"
              className="font-normal transition-colors hover:bg-pink-200 rounded-md w-[90px] "
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-pink-500" />
      <Typography color="pink" className="text-center font-normal">
        &copy; 2023 FoodPandy Project Restaurant Manage
      </Typography>
    </footer>
  );
}
