"use client";

import React, { useState } from "react";
import orline from "../../../public/assets/users/orline.svg";
import Image from "next/image";
import googlelogo from "../../../public/assets/users/gogle.svg";
import Applelogo from "../../../public/assets/users/Apple.svg";


const EmailLogin: React.FC = () => {

  
  return (
    <div className="w-[100%]">
      <label htmlFor="phone" className="text-white m-1  px-1 text-sm">
        Email address
      </label>
      <div className="flex justify-between py-1 px-2 border-red-700 items-center">
        <input
          type="email"
          className="w-full bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder=" Email Address"
         
        />
      </div>
      <label htmlFor="password" className="text-white m-1  px-1 text-sm">
        Password
      </label>
      <div className="flex justify-between py-1 px-2 border-red-700 items-center">
        <input
          type="password"
          className="w-full bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder=" Email Address"
         
        />
      </div>

      <div className="py-2 px-2 mt-5  bg-[#636363] flex items-center justify-center border-yellow-600 rounded-md">
        <button className="text-white py-1 px-2 font-semibold text-sm text-center ">
          Login
        </button>
      </div>

      <div className="px-2 py-4 flex items-center justify-center border-yellow-600 rounded-md">
        <Image src={orline} alt="orline" />
      </div>
      <div className=" py-2">
        <div className="py-1 bg-[#1E1E1E] flex items-center justify-center border-yellow-600 rounded-md">
          <div className="py-1 px-2 flex justify-between gap-2 border-red-600">
            <Image src={googlelogo} alt="googlelogo" />
            <h2 className="text-white"> Continue with Google </h2>
          </div>
        </div>
      </div>

      <div className="py-2">
        <div className=" py-1  bg-[#1E1E1E] flex items-center justify-center border-yellow-600 rounded-md">
          <div className=" py-1 px-2 flex justify-between gap-2 border-red-600">
            <Image src={Applelogo} alt="Applelogo" />
            <h2 className="text-white"> Continue with Apple </h2>
          </div>
        </div>
      </div>

      <div className="py-5 px-2 flex items-center justify-center border-yellow-600 rounded-md">
        <div className="flex justify-between gap-2 border-red-600">
          <h2 className="text-[#1E1E1E] text-base sm:text-sm font-semibold">
            Don't have an account?{" "}
          </h2>
          <h2 className="text-red-500 underline block"> SignUp </h2>
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;
