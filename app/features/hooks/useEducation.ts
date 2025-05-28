import { useState } from "react";
import { eduContentArray } from "@/app/features/education/data";


export function useEducationSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < eduContentArray.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const totalStep = eduContentArray.length;
  return {
    currentStep,
    currentContent: eduContentArray[currentStep],
    nextStep,
    prevStep,
    totalStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === eduContentArray.length - 1
  };
}
