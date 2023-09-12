

import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface StepfirProps {
  SetCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  steps: string[];
}

const StepThird: React.FC<StepfirProps> = ({ SetCurrentStep, currentStep,steps }) => {
 const [passwordVisible, setPasswordVisible] = useState(false);
 const [formData, setFormData] = useState({
   createpassword: "",
   confirmpassword: "",
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

const isFormValid = () => {
  const { createpassword, confirmpassword } = formData;
  return (
    createpassword.trim() !== "" && confirmpassword.trim() 
  );
};

  return (
    <div className="w-[100%] px-6 py-2  border-yellow-400">
      <label htmlFor="phone" className="text-white  px-2 text-sm">
        Create Password
      </label>

      <div className="relative py-2 px-2 border-red-500">
        <input
          id="password"
          name="createpassword"
          type={passwordVisible ? "text" : "password"}
          autoComplete="current-password"
          required
          className="appearance-none  relative block
           w-full px-6 py-2 md:py-4 bg-[#1E1E1E] 
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

      <label htmlFor="Confirm password" className="text-white px-2 text-sm">
        Confirm Password
      </label>

      <div className="relative py-2 px-2 border-red-500">
        <input
          id="password"
          name="confirmpassword"
          type={passwordVisible ? "text" : "password"}
          autoComplete="current-password"
          required
          className="appearance-none  relative block
           w-full px-6 py-2 md:py-4 bg-[#1E1E1E] 
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

      <div className="px-2 pb-4">
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
            className={`text-white py-1 px-2 md:font-semibold text-sm text-center `}
            onClick={() => {
              SetCurrentStep((prev) => prev + 1);
            }}
            disabled={currentStep === steps.length}
          >
            Let get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThird;

/**
 *  {/* <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
        <input
          type="password"
          className="w-full md:py-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder="Create Password"
        />
      </div>
      
       {/* <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
        <input
          type="password"
          className="w-full md:py-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder="Postal Code"
        />
      </div> 
      
 */