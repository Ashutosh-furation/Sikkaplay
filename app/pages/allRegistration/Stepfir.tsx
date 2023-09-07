"use client";

import React, { useState } from "react";
interface StepfirProps {
  SetCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep:number;
 steps:string[];
}


const Stepfir: React.FC<StepfirProps> = ({
  SetCurrentStep,
  currentStep,
  steps,
}) => {
  return (
    <div className="w-[100%] py-2  border-yellow-400">
      <label htmlFor="phone" className="text-white    px-2 text-sm">
        Name
      </label>
      <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
        <input
          type="text"
          className="w-full md:py-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder="Full Name"
        />
      </div>
      <label htmlFor="phone" className="text-white  px-2 text-sm">
        Email
      </label>
      <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
        <input
          type="email"
          className="w-full md:py-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder="Email Address"
        />
      </div>
      <label htmlFor="phone" className="text-white  px-2 text-sm">
        Phone no
      </label>
      <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
        <input
          type="email"
          className="w-full md:py-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder="Email Address"
        />
      </div>
      <div className="px-2">
        <div className="py-2 px-2  mt-5  bg-[#636363] flex items-center justify-center border-yellow-600 rounded-md">
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
          <h2 className="text-[#1E1E1E] py-1 items-center text-center text-lg sm:text-sm font-semibold">
            Alreay have an account ?{" "}
          </h2>
          <h2 className="text-red-500 py-1 underline block"> Login </h2>
        </div>
      </div>
    </div>
  );
};

export default Stepfir;
