"use client";

import { useEducationSteps } from "@/features/education/hooks/useEducation";
import {Button} from "@/components/ui/button";
import EducationTab from "@/features/education/educationtab";
import QuizModal from "../../features/education/components/QuizModal/quizmodal";

export default function Education() {
  const {
    currentContent,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    handleNextPath,
  } = useEducationSteps();

  return (
    <div className="flex flex-col gap-5 lg:gap-10 p-10 lg:px-60 bg-[#010409] text-white pt-30 min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="md:text-4xl text-xl font-semibold">
          Introduction to Cryptocurrency
        </h1>
        <EducationTab content={currentContent} />
      </div>

      <div className="flex gap-5 lg:gap-10">
        {!isLastStep ? (
          <Button onClick={nextStep} disabled={isLastStep} variant={"insiderdepth"}>
            Next
          </Button>
        ) : (
          <QuizModal
            imageSrc="/knowledge.png"
            title="Test Your Knowledge!"
            description="There are 5 questions ahead of you. Don't worry about getting them right; you're not being assessed."
            onNext={() => handleNextPath("quiz/1")}
            onSkip={() => handleNextPath("NewLesson")}
            triggerText="Start Quiz"
            showTrigger={true}
            buttonName1="next"
            buttonName2="skip"
          />
        )}
        <Button
          onClick={prevStep}
          disabled={isFirstStep}
          className="bg-[#4E4E4F3B] hover:bg-[#287EE9]"
          variant={"insiderdepth"}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
