"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar: React.FC = () => {
  return (
    <nav className="mx-auto  px-[1.2rem]  items-center flex justify-between shape">
      <div className="flex px-[1rem] justify-center items-center">
        <GiHamburgerMenu className="text-2xl   text-white cursor-pointer" />
      </div>

      <div className="text-white w-[20%] font-bold ">
        <p className=" float-right text-white sm:text-2xl lg:text-3xl game-text">
          Logo
        </p>
      </div>

      <div className="flex justify-center px-8 items-center space-x-4 ">
        <button className="text-white py-2 px-8 text-base
         rounded hover:bg-gradient-to-t from-[#AD0B40] to-[#FF1917] 
          bg-opacity-15 
        border border-white  hover:border-none transition-all duration-200 ease-in	delay-300">
          Login
        </button>
        <button className=" text-base py-2 px-8   rounded bg-white text-[#ad0b40]  border-white  hover:bg-gradient-to-t from-[#AD0B40] to-[#FF1917]  bg-opacity-15 hover:text-white hover:border-none">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
