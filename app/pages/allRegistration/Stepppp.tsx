import React, { useState } from "react";
import {Steps } from "antd"

interface StepperProps {
  currentStep: number;
}

const Stepppp: React.FC<StepperProps> = () => {
  
  const steps = ["Step1", "Step2", "Step3"];

  return (
    <div className="py-4 border-2 text-[#636363]  pb-[10%] pt-4 border-white-600 ">
      <Steps>
        <Steps.Step title="Step1" className="text-[#636363]"></Steps.Step>
        <Steps.Step title="Step2" className="text-[#636363]"></Steps.Step>
        <Steps.Step title="Step3" className="text-[#636363]"></Steps.Step>
      </Steps>
    </div>
  );
};

export default Stepppp;
