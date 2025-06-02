"use client";

import { useState } from "react";
import { eduContentArray } from "@/app/features/education/data";
import { useRouter } from "next/navigation";

export function useEducationSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

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

  const handleNextPath = (path: string) => {
    router.push(`/${path}`);
  };

  return {
    currentStep,
    currentContent: eduContentArray[currentStep],
    nextStep,
    prevStep,
    handleNextPath,
    totalStep: eduContentArray.length,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === eduContentArray.length - 1,
  };
}
