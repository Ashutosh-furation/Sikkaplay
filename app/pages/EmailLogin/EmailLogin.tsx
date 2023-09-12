"use client";

import React, { useState } from "react";
import orline from "../../../public/assets/users/orline.svg";
import Image from "next/image";
import googlelogo from "../../../public/assets/users/gogle.svg";
import Applelogo from "../../../public/assets/users/Apple.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { logIn, logOut } from "../../../store/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store/store";
import { useSelector } from "react-redux";
interface FormData {
  phoneNumber: string;
  email: string;
  password: string;
}

const EmailLogin: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const userdata = useAppSelector((state) => state.authReducer.value);
  console.log("data", userdata);

  const [username, SetUserName] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();
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

  //  console.log("data",formData)

  const handleLogin = () => {
    dispatch(logIn(username));
  };
  console.log("username", username);

  const isFormValid = () => {
    const { email, password } = formData;
    return email.trim() !== "" && password.trim() !== "";
  };

  return (
    <div className="w-[100%] px-2">
      <h1 className="text-white">{userdata?.username} </h1>
      <label htmlFor="phone" className="text-white m-1   text-sm">
        Email address
      </label>
      <div className="flex justify-between py-1  border-red-700 items-center">
        <input
          // type="email"
          // name="email"
          type="text"
          onChange={(e) => SetUserName(e.target.value)}
          className="w-full text-white px-4 bg-[#1E1E1E]
           border-red-600  p-2 rounded "
          placeholder=" Email Address"
          // onChange={handleInputChange}
        />
      </div>
      <label htmlFor="password" className="text-white m-1   text-sm">
        Password
      </label>

      <div className="relative py-1  border-red-500">
        <input
          id="password"
          name="password"
          type={passwordVisible ? "text" : "password"}
          autoComplete="current-password"
          required
          className="appearance-none  relative block
           w-full px-4 py-2 bg-[#1E1E1E] 
              border-none
              text-white  p-2 rounded
               z-10 "
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
            className="text-white"
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
      <div
        onClick={handleLogin}
        className={`py-2 px-2 mt-5 
         ${
           isFormValid()
             ? "bg-gradient-to-t from-[#AD0B40] to-[#FF1917]"
             : "bg-[#636363]"
         }
       flex items-center justify-center border-yellow-600 rounded-md`}
      >
        <button
          className={`text-white py-1 px-2 font-semibold text-sm text-center `}
        >
          Login
        </button>
      </div>

      <div className="px-2 py-4 flex items-center justify-center border-yellow-600 rounded-md">
        <Image src={orline} alt="orline" />
      </div>

      <div className=" py-2">
        <div className="py-2 bg-[#1E1E1E] flex items-center justify-center border-yellow-600 rounded-md">
          <div className="py-1 px-2 flex justify-between gap-2 border-red-600">
            <Image src={googlelogo} alt="googlelogo" />
            <h2 className="text-white text-center m-auto text-sm">
              {" "}
              Continue with Google{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="py-2">
        <div className=" py-2  bg-[#1E1E1E] flex items-center justify-center border-yellow-600 rounded-md">
          <div className="py-1 px-2 flex justify-between gap-2 border-red-600">
            <Image src={Applelogo} alt="Applelogo" />
            <h2 className="text-white text-center m-auto text-sm">
              {" "}
              Continue with Apple{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="py-5 px-2 flex items-center justify-center border-yellow-600 rounded-md">
        <div className="flex justify-between gap-2 border-red-600">
          <h2 className="text-[#636363] text-sm sm:text-base font-normal">
            Don't have an account?{" "}
          </h2>
          <h2 className="text-[#CA2446] text-sm font-normal sm:text-base underline block">
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
