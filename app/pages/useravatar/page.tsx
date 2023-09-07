"use client";

import React, { useState } from "react";
import Tablist from "../tablist/Tablist";
import sikklogo from "../../../public/assets/users/sikkuserlogo.svg";
import Acelocked from "../../../public/assets/users/Bottomborder.svg";
import Image from "next/image";
import {UserAvatardata} from "../../../constants/index"

const page = () => {

    
  return (
    <div className="overflow-hidden max-w-8xl  px-2 py-2 pb-[2%] md:py-[8%] lg:py-[4%] bg-[#000000] bg-[url('/assets/users/userbackground.svg')]  border-green-700">

      <div className="w-[50%]  py-4  lg:w-[12%] md:w-[25%]  flex items-center justify-center m-auto  border-green-600">
        <Image src={sikklogo} alt="sikka" />
      </div>

      <div className="w-[100%]  py-[18%] sm:py-[4%] md:py-[6%] lg:py-[1%] lg:pb-[2%] bg-center  border-green-700  bg-no-repeat ">
        <div className="w-[100%] rounded-lg  py-10 md:py-6  sm:w-[60%] md:w-[60%] lg:w-[70%] bg-[#000000] m-auto  border-red-500">
          <div className="py-2 pb-10 flex items-center justify-center ">
            <h2 className="text-white text-center">
              Select Avatar or Upload a picture{" "}
            </h2>
          </div>

          <div className="flex items-center justify-center  m-auto  px-auto mx-auto  border-yellow-700 flex-wrap gap-4 md:gap-14">
            {UserAvatardata.length > 0 &&
              UserAvatardata.map((el) => {
                return (
                  <div key={el.id} className="w-[100px]  h-[120px] ">
                    <div className="bg-[#1E1E1E] flex items-center justify-center w-[100%]  h-[100px] rounded-full border-yellow-500 ">
                      <Image
                        src={el.cardImage}
                        alt="avatar"
                        width={50}
                        height={30}
                      />
                    </div>
                    <h2 className=" pb-4 text-white text-center">
                      {el.cardName}{" "}
                    </h2>
                  </div>
                );
              })}
          </div>
         
            <div className="py-2 px-2  mt-5  flex items-center justify-center border-yellow-600 rounded-md">
              <button className="text-white py-4 px-10 rounded-lg bg-[#636363] font-semibold text-sm text-center ">
                Next
              </button>
            </div>
          
        </div>

    
        <div className="w-[80%] m-auto py-[5%] sm:py-[10] md:py-[8%] lg:py-7 px-2 flex items-center justify-center  border-yellow-500">
          <Image
            src={Acelocked}
            alt="Acelocked"
            className="text-white color-white pt-10 sm:pt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default page;

