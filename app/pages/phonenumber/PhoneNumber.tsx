'use client';

import React,{useState} from 'react'
import orline from "../../../public/assets/users/orline.svg";
import Image from "next/image";
import googlelogo from "../../../public/assets/users/gogle.svg"
import Applelogo from "../../../public/assets/users/Apple.svg";

const countryCodes = [
  { code: "+1", country: "Us" },
  { code: "+44", country: "Uk" },
  { code: "+49", country: "Ger" },
  // Add more country codes as needed
];

const PhoneNumber: React.FC = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(
    countryCodes[0].code
  );

  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <div  className='w-[100%]'>
      <label htmlFor="phone" className="text-white m-1 text-sm">
        Phone Number
      </label>
      <div className="flex justify-between py-1 px-2 border-red-700 items-center">
        <select
          className="w-[60%] sm:w-1/2 md:w-1/3 mr-2 text-white bg-[#1E1E1E] border-red-800 p-2 rounded"
          value={selectedCountryCode}
          onChange={handleCountryCodeChange}
        >
          {countryCodes.map((countryCode) => (
            <option key={countryCode.code} value={countryCode.code}>
              {countryCode.country} ({countryCode.code})
            </option>
          ))}
        </select>

        <input
          type="tel"
          className="w-full bg-[#1E1E1E] border-red-600 sm:w-2/3 p-2 rounded "
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>

      <div className="py-2 px-2 mt-5  bg-[#636363] flex items-center justify-center border-yellow-600 rounded-md">
        <button className="text-white py-1 px-2 font-semibold text-sm text-center ">
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
          <h2 className="text-[#1E1E1E] text-xl sm:text-sm font-semibold">Don't have an account? </h2>
          <h2 className="text-red-500 underline block"> SignUp </h2>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber