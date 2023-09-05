"use client";

import React, { useState } from "react";
interface StepfirProps {
  SetCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}


const StepThird: React.FC<StepfirProps> = () => {
  return (
    <div className="w-[100%] py-2  border-yellow-400">
      <label htmlFor="phone" className="text-white  px-2 text-sm">
        Create Password
      </label>
      <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
        <input
          type="password"
          className="w-full md:py-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder="Create Password"
        />
      </div>

      <label htmlFor="Postal code" className="text-white  px-2 text-sm">
        Confirm Password
      </label>
      <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
        <input
          type="password"
          className="w-full md:py-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder="Postal Code"
        />
      </div>
      <div className="px-2">
        <div className="py-2 px-2  mt-5  bg-[#636363] flex items-center justify-center border-yellow-600 rounded-md">
          <button className="text-white py-1 px-2 md:font-semibold text-sm text-center ">
            Let get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThird;
