"use client";

import { useEducationSteps } from "@/app/features/hooks/useEducation";
import Buttons from "../features/education/components/button";
import EducationTab from "@/app/features/education/educationtab";


export default function Education() {
  const {
    currentStep,
    currentContent,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep
  } = useEducationSteps();

  return (
    <div className="flex flex-col gap-5 lg:gap-10 p-10 lg:px-60 bg-[#010409] text-white pt-10 min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="md:text-4xl text-xl font-semibold">Introduction to Cryptocurrency</h1>
        <EducationTab content={currentContent} />
      </div>

      <div className="flex gap-5 lg:gap-10">
        <Buttons onClick={nextStep} disabled={isLastStep}>Next</Buttons>
        <Buttons onClick={prevStep} disabled={isFirstStep} className="bg-[#4E4E4F3B] hover:bg-[#287EE9]">Back</Buttons>
      </div>
    </div>
  );
}
