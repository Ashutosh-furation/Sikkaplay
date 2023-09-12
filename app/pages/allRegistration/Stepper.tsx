import React, { useState } from 'react'
interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  

  return (
    <div className="py-4  pb-[2%]  border-white-600 ">
      <div className=" border-red-400 flex justify-between">
        {steps?.map((st, i) => {
          return (
            <div
              key={i}
              className={`step-itemp  ${currentStep === i + 1 && "active"}
             ${i + 1 < currentStep && "completep"}
              `}
            >
              <div className="flex items-center justify-center  border-yellow-700">
                <div className="text-white  bg-black stepp">
                  <div
                    className="activestep completestep"
                  >
                    {" "}
                  </div>
                </div>
                <p
                  className="text-md relative z-20 
                   font-normal bg-black 
                  text-center text-[#4A4A4A] textactive"
                >
                  {st}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper

/**
 * <div className="py-2 border-2 pb-[2%] pt-4 border-white-600 ">
      <div className="border-2 border-red-400 flex justify-between">
        {steps?.map((st, i) => {
          return (
            <div
              key={i}
              className={`step-item  ${currentStep === i + 1 && "active"}
             ${i + 1 < currentStep && "complete"}
              `}
            >
              <div className="text-white step"> </div>

              {/* <div className="text-white step">{i + 1}</div> 
              <p className="text-[.6rem] text-gray-500">{st} </p>
            </div>
          );
        })}
      </div>
    </div>

 */