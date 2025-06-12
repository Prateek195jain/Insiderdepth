"use client";

import { Button } from "@/components/ui/button";
import QuizModal from "@/features/education/components/QuizModal/quizmodal";
import { useEducationSteps } from "@/features/education/hooks/useEducation";
import { QuestionCard } from "@/features/quiz/components/QuestionCard";
import { useQuizLogic } from "@/features/quiz/hooks/useQuizLogic";
import { Questions } from "../data/Quizdata";

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
    openModal,
    setOpenModal,
    getCorrectAnswerCount,
    totalQuestions,
  } = useQuizLogic(Questions);

  const { handleNextPath } = useEducationSteps();
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
          <Button
            onClick={handleCheckAnswer}
            disabled={tempSelectedOption === null}
            className={`px-4 py-2 rounded-md transition font-semibold 
    ${
      tempSelectedOption === null
        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
        : "bg-[#287EE9] text-white hover:bg-[#4E4E4F3B]"
    }
  `}
            variant={"insiderdepth"}
          >
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNext} variant={"insiderdepth"}>
            Next
          </Button>
        )}
        {getCorrectAnswerCount() <= 2 ? (
          <QuizModal
            imageSrc="/sadSmily.png"
            title="Test was not passed"
            description={`You answered ${getCorrectAnswerCount()}/${totalQuestions} correctly. The test was not passed. Please go back to the beginning of the lesson and try again.`}
            onNext={() => handleNextPath("quiz/1")}
            onSkip={() => handleNextPath("education")}
            triggerText="Start Quiz"
            showTrigger={false}
            open={openModal}
            onOpenChange={setOpenModal}
            buttonName1="Try again"
            buttonName2="skip"
          />
        ) : (
          <QuizModal
            imageSrc="/pass.png"
            title="Test passed successfully!"
            description="Great! you have successfully completed the lesson Introduction to Cryptocurrency. Go on to the next lesson and increase your knowledge."
            onNext={() => handleNextPath("NewLesson")}
            onSkip={() => console.log("Skipped")}
            triggerText="Start Quiz"
            showTrigger={false}
            open={openModal}
            onOpenChange={setOpenModal}
            buttonName1="Next lesson"
            buttonName2="Back"
          />
        )}

        <Button
          onClick={handleBack}
          className="bg-[#4E4E4F3B] text-white hover:bg-[#287EE9]"
          variant="insiderdepth"
        >
          Back
        </Button>
      </div>
    </div>
  );
}
