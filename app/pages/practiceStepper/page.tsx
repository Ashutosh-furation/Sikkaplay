import React, { useState } from "react";
interface StepperProps {
  currentStep: number;
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = ["Step 1", "Step 2", "Step 3" ]

  return (
    <div className="border-2 w-[30%] h-[40vh] bg-black m-auto mt-20 border-black-800">
      <div className="py-2   pb-[2%] pt-4 border-white-600 ">
        <div className="border-2 h-[50px] border-red-400 flex justify-between">
          {steps?.map((st, i) => {
            return (
              <div
                key={i}
                className={`step-itemp  ${currentStep === i + 1 && "active"}
             ${i + 1 < currentStep && "completep"}
              `}
              >
                <div className="flex items-center  justify-center  border-yellow-700">
                  <div className="text-white  bg-black stepp">
                    <div className="stepbor w-2 h-2 border  border-white  bg-white rounded-full">
                      {" "}
                    </div>
                  </div>
                  <p
                    className="text-[.6rem] relative z-20 
                   font-semibold bg-black 
                  text-center text-white"
                  >
                    {st}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
