"use client";

import React, { useState } from "react";

interface StepfirProps {
  SetCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}


const Stepsecond: React.FC<StepfirProps> = ({ SetCurrentStep }) => {
  return (
    <div className="w-[100%] py-2  border-yellow-400">
      <div className=" border-yellow-500 gap-2 flex justify-between">
        <div className="w-[50%] border-red-600">
          <label htmlFor="DOB" className="text-white    px-2 text-sm">
            DOB
          </label>
          <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
            <input
              type="date"
              className="w-full md:py-[.8rem] text-white bg-[#1E1E1E] border-red-600  p-2 rounded "
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className=" w-[50%] border-red-600">
          <label htmlFor="phone" className="text-white    px-2 text-sm">
            Gender
          </label>
          <div className="flex justify-between py-2 md:py-4 px-2 border-yellow-700 items-center">
            <select className="w-[100%] px-2 py-[.7rem] md:py-4 mr-2 text-white bg-[#1E1E1E] border-red-800 p-2 rounded">
              <option value="Select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">other</option>
            </select>
          </div>
        </div>
      </div>

      {/**  addreesss */}

      <label htmlFor="phone" className="text-white  px-2 text-sm">
        Address
      </label>
      <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
        <input
          type="text"
          className="w-full md:py-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder=" Address"
        />
      </div>

      {/**** city ***/}

      <div className=" border-yellow-500 gap-2 flex justify-between">
        <div className="w-[50%] border-red-600">
          <label htmlFor="Country" className="text-white    px-2 text-sm">
            Country
          </label>
          <div className="flex justify-between py-2 md:py-4 px-2 border-yellow-700 items-center">
            <select className="w-[100%] px-2 py-[.7rem] md:py-4 mr-2 text-white bg-[#1E1E1E] border-red-800 p-2 rounded">
              <option value="Select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">other</option>
            </select>
          </div>
        </div>

        <div className=" w-[50%] border-red-600">
          <label htmlFor="phone" className="text-white    px-2 text-sm">
            City
          </label>
          <div className="flex justify-between py-2 md:py-4 px-2 border-yellow-700 items-center">
            <select className="w-[100%] px-2 py-[.7rem] md:py-4 mr-2 text-white bg-[#1E1E1E] border-red-800 p-2 rounded">
              <option value="Select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">other</option>
            </select>
          </div>
        </div>
      </div>

      <label htmlFor="Postal code" className="text-white  px-2 text-sm">
        Postal Code
      </label>
      <div className="flex justify-between py-2 md:py-4 px-2 border-red-700 items-center">
        <input
          type="text"
          className="w-full md:py-4 bg-[#1E1E1E] border-red-600  p-2 rounded "
          placeholder="Postal Code"
        />
      </div>
      
      <div className="px-2 pb-4">
        <div className="py-2 px-2  mt-5  bg-[#636363] flex items-center justify-center border-yellow-600 rounded-md">
          <button
            className="text-white py-1 px-2 md:font-semibold text-sm text-center "
            onClick={() => {
              SetCurrentStep((prev) => prev + 1);
            }}
          >
            One more step to go !
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Stepsecond;
