 import React,{useState} from 'react'
import Stepper from './Stepper';
// import Stepfir from './Stepfir';
import Stepsecond from './Stepsecond';
import StepThird from './StepThird';
import Stepfir from './Stepfir';

const steps = ["Step 1", "Step 2", "Step 3"];
interface StepperProps {
  currentStep: number;
}

interface StepfirProps {
  SetCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepControl:React.FC<StepfirProps> = () => {

    const [currentStep, SetCurrentStep] = useState<number>(0);

    const handleNextStep = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };

    const handlePrevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };
    
  return (
    <div className="border-2 border-red-800">
      {/* <Stepper /> */}
     
      {/* {currentStep === 0 && <Stepfir />} */}
      {currentStep === 1 && <Stepsecond />}
      {currentStep === 2 && <StepThird />}
 
      <div className="mt-4">
        <button
          onClick={handleNextStep}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepControl


/**
 *  <div className='border-2 border-red-800 container flex justify-around 
     mt-4 mb-8'>
         <button className='bg-white text-slate-400 uppercase py-2 px-4
         rounded-xl font-semibold cursor-pointer border-2 border-slate-300
         '>
           Back
         </button>
     </div>
 */