import Image from "next/image";
import React from "react";
import sikka from "../../../public/assets/hero/hero-heading.svg";
import heroimage from "../../../public/assets/hero/hero-image.svg";
import heroshadow from "../../../public/assets/hero/heroboxshadow.png";

const Mobilehero = () => {
  return (
    <div className="max-w-4xl border-2 border-yellow-700 mobilefor  mobilehero ">
      <div className="border-2 border-red-600">
        <div className=" border-green-600">
          <div className="heroshadow  relative top-[-80px] h-[1px] z-1">
            <Image src={heroshadow} alt="heroshadow" />
          </div>
          <div className=" mx-auto  px-2 flex items-center justify-center  border-yellow-400">
            <Image src={heroimage} alt="Image" className="w-[40%] heroimage" />
          </div>
        </div>

        <div className="flex item-center justify-center">
          <div className="w-[50%]  m-auto ">
            <Image src={sikka} alt="Sikkafont" className=" m-auto" />
          </div>
        </div>

        <div className=" border-red-400">
          <div className="px-2  m-auto">
            <p className="text-white text-center text-base  font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] ">
              Experience boundless amusement on ultimate betting platform!
              Unfold endless entertainment.
            </p>
          </div>
        </div>
        <div className="flex justify-center  items-center space-x-4 ">
          <button className="px-8 py-2 text-white  text-[.4rem] rounded  bg-opacity-15  border-white border-[0.5px] ">
            Login
          </button>
          <button className="bg-white-500 px-8 py-2 text-[.5rem]  rounded bg-white text-[#ad0b40]  border-white border-[0.5px] ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  ); 


};

export default Mobilehero;
/**
 *  <div className="max-w-4xl m-auto px-[.7rem]  flex justify-between gap-6 border-yellow-700 sikka">
      <div className="w-[60%]   m-auto border-yellow-500">
        <div className="w-[80%]  px-[.4rem] mt-[-1rem] border-pink-500">
          <Image src={sikka} alt="Sikkafont" className="sm:w-[80%] " />
        </div>
        <div
          className=" w-[90%]  py-[.1rem]
          sm:px-[.1rem] px-[.4rem]  border-pink-500"
        >
          <p className="text-white  leading-[.7rem] font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] sm:text-[1rem]  text-[.5rem] heroparagrapgh">
            Experience boundless amusement on ultimate betting platform! Unfold
            endless entertainment.
          </p>
        </div>
        <div className="flex py-[.1rem] px-[.4rem] gap-[.2rem] text-left border-pink-500">
          <button className="px-[.5rem] py-[.3rem] text-white  text-[.4rem] rounded  bg-opacity-15  border-white border-[0.5px] ">
            Login
          </button>
          <button className="bg-white-500 py-[.3rem] px-[.3rem] text-[.5rem]  rounded bg-white text-[#ad0b40]  border-white border-[0.5px] ">
            Sign Up
          </button>
        </div>
      </div>

      <div className="w-[35%] py-[.1rem]  m-auto border-pink-500">
        <div className="heroshadow  relative top-[-60px] h-[1px] z-1">
          <Image src={heroshadow} alt="heroshadow" />
        </div>
        <div className="flex justify-center items-center ">
          <div className=" border-green-600  m-auto rounded-t-lg z-10 ">
            <Image src={heroimage} alt="Image" className="m-auto" />
          </div>
        </div>
      </div>
    </div>
 */

/**
 * <div className="max-w-4xl   border-yellow-700  ">
      <div className=" py-[.1rem] ">
        <div className="w-[100px] sm:w-[400px]  m-auto flex items-center justify-center  border-yellow-400">
          <Image
            src={heroimage}
            alt="Image"
            className="h-[70px] sm:h-[100px] sikka"
          />
        </div>
        <div className=" border-red-400">
          <div className="w-[80%] m-auto">
            <p className="text-white text-center text-[.6rem] font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] heroparagrapgh">
              Experience boundless amusement on ultimate betting platform!
              Unfold endless entertainment.
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-1 items-center space-x-4 ">
          <button className="px-[.3rem] py-[.3rem] text-white  text-[.4rem] rounded  bg-opacity-15  border-white border-[0.5px] herologin">
            Login
          </button>
          <button className="bg-white-500 py-[.3rem] px-[.3rem] text-[.5rem]  rounded bg-white text-[#ad0b40]  border-white border-[0.5px] herosign">
            Sign Up
          </button>
        </div>
      </div>
    </div>
 */