'use client';

import React,{useState,useEffect} from 'react'
import orline from "../../../public/assets/users/orline.svg";
import Image from "next/image";
import googlelogo from "../../../public/assets/users/gogle.svg"
import Applelogo from "../../../public/assets/users/Apple.svg";
import {CountryPhonecodedata} from "../../../constants/index"



const countryCodes = [
  {
    code: "+1",
    country: "Us",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
  },
  {
    code: "+44",
    country: "Uk",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
  },
  {
    code: "+49",
    country: "Ger",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
  },
  {
    code: "+91",
    country: "IN",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
  },
  {
    code: "+93",
    country: "Af",
    image:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
  },
];

const PhoneNumber: React.FC = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(
    countryCodes[0].code
  );
  // const [buttonColor, setButtonColor] = useState("bg-[#636363]"); // Default background color
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(e.target.value);
  };

  const calculateButtonColor = (input: string) => {
    if (input.length < 10) {
      return "bg-[#636363]"; 
    } else {
      return "bg-gradient-to-t from-[#AD0B40] to-[#FF1917]"; 
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
  };
    const buttonColor = calculateButtonColor(phoneNumber);


  const handleSubmit = () => {};

  return (
    <div className="w-[100%]">
      <label htmlFor="phone" className="text-white m-1 text-sm">
        Phone Number
      </label>
      <div className="flex  justify-between py-1  border-red-700 items-center">
        <select
          className="w-[60%] sm:w-1/2 md:w-1/3 mr-2 text-white bg-[#1E1E1E] border-red-800 p-2 rounded"
          value={selectedCountryCode}
          onChange={handleCountryCodeChange}
        >
          {countryCodes.map((countryCode) => (
            <option
              className="flex justify-between"
              key={countryCode.code}
              value={countryCode.code}
            >
              {countryCode.country} {countryCode.code}
            </option>
          ))}
        </select>

        <input
          type="tel"
          className="w-full text-white px-4 bg-[#1E1E1E] border-red-600 sm:w-2/3 p-2 rounded "
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div
        className={`py-2 px-2 mt-5 ${buttonColor} flex items-center 
       justify-center border-yellow-600 rounded-md`}
      >
        <button className="text-white py-1 px-2 font-semibold text-sm text-center">
          {" "}
          Get OTP{" "}
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

export default PhoneNumber

/**
 *  // <div
      //   className="py-2 px-2 mt-5 
      //  bg-[#636363] flex items-center 
      //  justify-center border-yellow-600 rounded-md"
      // >
      //   <button className="text-white py-1 px-2 font-semibold text-sm text-center">
      //     {" "}
      //     Get OTP{" "}
      //   </button>
      // </div>
       const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    if (newPhoneNumber.length <= 10) {
      setButtonColor("bg-gradient-to-t from-[#AD0B40] to-[#FF1917]"); // Change to red background if length < 10
    } else {
      setButtonColor("bg-[#636363]"); // Change to green background if length >= 10
    }
  };
 */