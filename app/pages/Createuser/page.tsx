"use client";
import React, { useState } from "react";

import sikklogo from "../../../public/assets/users/sikkuserlogo.svg";
import Acelocked from "../../../public/assets/users/Bottomborder.svg";
import Image from "next/image";

import StepControl from "../allRegistration/StepControl";


interface StepperProps {
  currentStep: number;
}

interface StepfirProps {
  SetCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}
interface Stepsprop{
  steps:string[]
}

const Page: React.FC<Stepsprop>= () => {
  const [currentStep, SetCurrentStep] = useState<number>(1);
  const steps: string[] = ["Step1", "Step2", "Step3"];

  return (
    <div className="overflow-hidden  max-w-8xl  h-[100%] px-2 py-[16%]  pb-[20%] sm:py-[2%] md:py-[6%] lg:py-[3%]  bg-[#000000] bg-[url('/assets/users/userbackground.svg')]  border-red-700">
      {/*       
      <div className="w-[30%] border-2  lg:py-1 md:w-[30%]  lg:w-[20%]  flex items-center justify-center m-auto  border-green-600">
        <Image src={sikklogo} alt="sikka" />
      </div> */}
      <div
        className="w-[100%]  py-[2%] pt-[10%] pb-[8%]  
      sm:py-[7%] md:py-[8%] lg:py-[2%] 
      lg:pb-[2%] bg-center
        border-green-700  bg-no-repeat "
      >
        <div className="w-[50%] py-2 sm:pb-4 lg:py-1 md:w-[40%]  lg:w-[20%]  flex items-center justify-center m-auto  border-green-600">
          <Image src={sikklogo} alt="sikka" />
        </div>

        <div className="pt-[6%]  sm:pt-2  ">
          <div className="w-[100%]   rounded-lg px-4 mb-5 lg:py-[1%] sm:w-[60%] md:w-[50%] lg:w-[40%] bg-[#000000] m-auto  border-red-500">
            <StepControl
              SetCurrentStep={SetCurrentStep}
              currentStep={currentStep}
              steps={steps}
            />
          </div>
        </div>

        <div className="w-[80%] m-auto  sm:py-[10] md:py-[8%] lg:py-2 px-2 flex items-center justify-center  border-yellow-500">
          <Image
            src={Acelocked}
            alt="Acelocked"
            className="text-white color-white pt-10 sm:pt-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
