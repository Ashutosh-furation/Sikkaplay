"use client";

import React, { useState } from "react";
interface StepfirProps {
  SetCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep:number;
 steps:string[];
}
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

const Stepfir: React.FC<StepfirProps> = ({SetCurrentStep,  currentStep,  steps,}) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(countryCodes[0].code);
  // const [phoneNumber, setPhoneNumber] = useState<string>("");
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   phoneNumber: ""
 });
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   setFormData({
     ...formData,
     [name]: value,
   });
 };

 const isFormValid = () => {
   const { name ,email,phoneNumber  } = formData;
   return (
     name.trim() !== "" &&
     email.trim() !== "" &&
     phoneNumber.trim() !== ""
   );
 };

  return (
    <div className="w-[100%] px-6 py-4 border-yellow-400">
      <label htmlFor="phone" className="text-white    px-2 text-sm">
        Name
      </label>
      <div className="flex  justify-between py-2 md:py-2 px-2 border-red-700 items-center">
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          className="w-full md:py-4 bg-[#1E1E1E] text-white  text-sm border-red-600  p-2 rounded "
          placeholder="Full Name"
        />
      </div>
      <label htmlFor="phone" className="text-white  px-2 text-sm">
        Email
      </label>
      <div className="flex justify-between py-2 md:py-2 px-2 border-red-700 items-center">
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          className="w-full md:py-4 bg-[#1E1E1E] text-white  text-sm border-red-600  p-2 rounded "
          placeholder="Email Address"
        />
      </div>
      <label htmlFor="phone" className="text-white  px-2 text-sm">
        Phone no
      </label>
      <div className="flex  px-2 justify-between py-1  border-red-700 items-center">
        <select
          className="w-[30%]    mr-2 text-sm py-2 md:py-4 text-white bg-[#1E1E1E] border-red-800 p-2 rounded"
          name="selectedCountryCode"
        >
          {countryCodes.map((countryCode) => (
            <option
              className="flex justify-around "
              key={countryCode.code}
              value={countryCode.code}
            >
              {countryCode.country}
              {countryCode.code}
            </option>
          ))}
        </select>

        <input
          type="phoneNumber"
          name="phoneNumber"
          onChange={handleInputChange}
          className="w-[70%] py-2 md:py-[14px] text-sm text-white  px-4 bg-[#1E1E1E] border-red-600 sm:w-2/3  rounded "
          placeholder="Phone Number"
        />
      </div>

      <div className="px-2">
        <div
          className={`py-2 px-2  mt-5 
         ${
           isFormValid()
             ? "bg-gradient-to-t from-[#AD0B40] to-[#FF1917]"
             : "bg-[#636363]"
         }
         flex items-center justify-center border-yellow-600 rounded-md`}
        >
          <button
            className="text-white py-1 px-2 font-semibold text-sm text-center "
            onClick={() => {
              SetCurrentStep((prev) => prev + 1);
            }}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>

      <div className="py-5 px-2  flex items-center text-center justify-center border-yellow-600 rounded-md">
        <div className="flex justify-between gap-2 border-red-600">
          <h2 className="text-[#636363] py-1 items-center text-sm sm:text-base text-center  font-normal">
            Alreay have an account ?{" "}
          </h2>
          <h2 className="gradient-text  py-1 sm:text-base underline ">
            {" "}
            Login{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Stepfir;
