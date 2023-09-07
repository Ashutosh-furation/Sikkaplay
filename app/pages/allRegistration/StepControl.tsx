import React,{useState} from 'react'
import Stepper from './Stepper';
import Stepsecond from './Stepsecond';
import StepThird from './StepThird';
import Stepfir from './Stepfir';


interface StepfirProps {
  SetCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  steps: string[];
}

const StepControl: React.FC<StepfirProps> = ({
  currentStep,
  SetCurrentStep,
  steps,
}) => {
  return (
    <div className=" border-red-800">
      <Stepper currentStep={currentStep} steps={steps} />

      {currentStep === 1 && (
        <Stepfir
          SetCurrentStep={SetCurrentStep}
          currentStep={currentStep}
          steps={steps}
        />
      )}
      {currentStep === 2 && <Stepsecond SetCurrentStep={SetCurrentStep} />}
      {currentStep === 3 && (
        <StepThird
          SetCurrentStep={SetCurrentStep}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
};

export default StepControl

