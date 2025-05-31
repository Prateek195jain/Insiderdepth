"use client";

import { QuestionCard } from "@/components/quiz/components/QuestionCard";
import { useQuizLogic } from "@/components/quiz/hooks/useQuizLogic";
import { Button } from "@/components/ui/button";

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
    <div className="p-6 space-y-4 h-screen flex flex-col items-center justify-center">
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
          <Button
            variant="secondary"
            onClick={handleCheckAnswer}
            disabled={tempSelectedOption === null}
          >
            Check Answer
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleNext}>
            Next
          </Button>
        )}
        <Button variant="default" onClick={handleBack}>
          Back
        </Button>
      </div>
    </div>
  );
}
