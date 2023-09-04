import Image from "next/image";
import React from "react";
import sikka from "../../../public/assets/hero/hero-heading.svg";
import heroimage from "../../../public/assets/hero/hero-image.svg";
import heroshadow from "../../../public/assets/hero/heroboxshadow.png";

const Mobilehero = () => {
  return (
    <div className="max-w-4xl   border-yellow-700   mobilehero ">
      <div className="w-[100%]  mx-auto  px-1  py-20 pb-[20%]  mobilepadding">

        <div className=" border-green-600">
          <div className="heroshadow  relative top-[-90px] h-[1px] z-1">
            <Image src={heroshadow} alt="heroshadow" />
          </div>
          <div className="m-auto  px-2 flex items-center justify-center  border-yellow-400">
            <Image
              src={heroimage}
              alt="Image"
              className="w-[50%]  m-auto heroimage"
            />
          </div>
          <div className="w-[50%] sikka  m-auto ">
            <Image src={sikka} alt="Sikkafont" className="  m-auto" />
          </div>
        </div>

        <div className="  border-red-400">
          <div className="px-2 py-2 m-auto">
            <p className="text-white text-center text-base  font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] ">
              Experience boundless amusement on ultimate betting platform!
              Unfold endless entertainment.
            </p>
          </div>
        </div>
        <div className="flex m-1 justify-center  items-center space-x-4 buttoncon ">
          <button
            className="px-8 py-2 text-white font-lato  text-sm rounded  bg-opacity-15  border-white border-[0.5px] 
          hover:bg-gradient-to-t from-[#AD0B40] to-[#FF1917]  bg-opacity-15  hover:border-none transition-all duration-200 ease-in	delay-300
          "
          >
            Login
          </button>
          <button
            className="bg-white-500 px-8 py-2 font-lato text-sm  rounded bg-white text-[#ad0b40]  border-white border-[0.5px] 
           hover:bg-gradient-to-t from-[#AD0B40] to-[#FF1917]  bg-opacity-15  hover:border-none transition-all duration-200 ease-in	delay-300
          "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  ); 


};

export default Mobilehero;
