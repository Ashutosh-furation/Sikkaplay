"use client";

import React, { useState } from "react";
import orline from "../../../public/assets/users/orline.svg";
import Image from "next/image";
import googlelogo from "../../../public/assets/users/gogle.svg";
import Applelogo from "../../../public/assets/users/Apple.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const EmailLogin: React.FC = () => {
 const [passwordVisible, setPasswordVisible] = useState(false);
 const [formData, setFormData] = useState({
   email: "",
   password: "",
 });

 const togglePasswordVisibility = () => {
   setPasswordVisible(!passwordVisible);
 };

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   setFormData({
     ...formData,
     [name]: value,
   });
 };
  
  return (
    <div className="w-[100%]">
      <label htmlFor="phone" className="text-white m-1  px-1 text-sm">
        Email address
      </label>
      <div className="flex justify-between py-1 px-2 border-red-700 items-center">
        <input
          type="email"
          className="w-full text-white px-4 bg-[#1E1E1E]
           border-red-600  p-2 rounded "
          placeholder=" Email Address"
        />
      </div>
      <label htmlFor="password" className="text-white m-1  px-1 text-sm">
        Password
      </label>
     
      <div className="relative  px-2 border-red-500">
        <input
          id="password"
          name="password"
          type={passwordVisible ? "text" : "password"}
          autoComplete="current-password"
          required
          className="appearance-none  relative block
           w-full px-6 py-2 bg-[#1E1E1E] 
              border-none
              text-white  p-2 rounded-lg
               z-10 sm:text-sm"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <div
          className="absolute  px-4 border-green-500 
          inset-y-0 right-0 
         flex items-center z-10 text-sm leading-5"
        >
          <button
            type="button"
            className="text-white
             focus:outline-none focus:ring focus:ring-opacity-50"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <AiFillEyeInvisible className="h-5 w-5" />
            ) : (
              <AiFillEye className="h-5 w-5" />
            )}
          </button>
        </div>
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
          <h2 className="text-[#1E1E1E] text-sm sm:text-base font-semibold">
            Don't have an account?{" "}
          </h2>
          <h2 className="text-red-500 text-sm sm:text-base underline block">
            {" "}
            SignUp{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;

/**
 *  {/* <div className="flex border-2 justify-between py-1 px-2 border-red-700 items-center">
        <input
          type="password"
          className="w-full text-white px-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder=" Password"
          
        />
        <div className="border-2">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>
      </div> 
 */