"use client";

import Buttons from "@/app/features/education/components/button";
import { QuestionCard } from "@/components/quiz/components/QuestionCard";
import { useQuizLogic } from "@/components/quiz/hooks/useQuizLogic";

export default function QuizPage() {
  const {
    question,
    selectedOption,
    tempSelectedOption,
    isAnswered,
    handleOptionSelect,
    handleCheckAnswer,
    handleNext,
    handleBack,
  } = useQuizLogic();

  if (!question) return <div className="text-white">Question not found</div>;

  return (
    <div className="p-6 space-y-10 h-screen flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-2xl">Quiz - Knowledge Test</h1>
      <QuestionCard
        question={question.question}
        options={question.options}
        correctOption={question.correctOption}
        selectedOption={selectedOption}
        isAnswered={isAnswered}
        onSelect={handleOptionSelect}
        tempSelectedOption={tempSelectedOption}
      />
      <div className="flex justify-start lg:w-1/2 gap-4">
        {!isAnswered ? (
          <Buttons
            onClick={handleCheckAnswer}
            disabled={tempSelectedOption === null}
            className={`px-4 py-2 rounded-md transition font-semibold 
    ${
      tempSelectedOption === null
        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
        : "bg-[#287EE9] text-white hover:bg-[#4E4E4F3B]"
    }
  `}
          >
            Check Answer
          </Buttons>
        ) : (
          <Buttons onClick={handleNext}>Next</Buttons>
        )}
        <Buttons
          onClick={handleBack}
          className="bg-[#4E4E4F3B] hover:bg-[#287EE9]"
        >
          Back
        </Buttons>
      </div>
    </div>
  );
}
