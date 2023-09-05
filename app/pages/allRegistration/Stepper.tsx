import React, { useState } from 'react'
interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = ["Step1", "Step2", "Step3"];

  return (
    <div className="py-4 pb-[10%] pt-4 border-white-600 ">
      <div className=" border-red-400 flex justify-between">
        {steps?.map((st, i) => {
          return (
            <div
              key={i}
              className={`step-item  ${currentStep === i + 1 && "active"}
             ${ i+1 <currentStep && "complete"}
              `}
            >
              <div className="text-white step">{i + 1}</div>
              <p className="text-gray-500">{st} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper

/**
 * const Stepper = () => {
  return (
    <div className="border-2 border-white-600 mx-4 p-4
     flex justify-between items-center">
      {displaySteps}
    </div>
  );
}

const displaySteps = (
  <div className="w-full flex items-center">
    <div className=" relative flex flex-col item-center text-teal-600">
      <div
        className="rounded-full transition duration-500 ease-in-out
        border-2 border-gray-300 h-12 w-12 flex items-center justify-center
        py-3">
        1
      </div>
      <div className="absolute top-0 text-center mt-16 w-32 text-xs
       font-medium uppercase
      ">
        Description
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out">
      </div>
    </div>
  </div>
);

 * 
 */