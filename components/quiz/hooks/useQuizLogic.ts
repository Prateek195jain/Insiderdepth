import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuizStore } from "@/app/quiz/state/store";
import { Questions } from "@/app/quiz/data/Quizdata";

export const useQuizLogic = () => {
  const router = useRouter();
  const params = useParams();

  const questionId = parseInt(params.questionId as string, 10);
  const question = Questions.find((q) => q.id === questionId);

  const { answers, setAnswer } = useQuizStore();

  const [tempSelectedOption, setTempSelectedOption] = useState<number | null>(
    null
  );
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  useEffect(() => {
    const savedOption = answers[questionId];
    if (savedOption !== undefined) {
      setSelectedOption(savedOption);
      setTempSelectedOption(savedOption);
      setIsAnswered(true);
    } else {
      setSelectedOption(null);
      setTempSelectedOption(null);
      setIsAnswered(false);
    }
  }, [questionId, answers]);

  const handleOptionSelect = (idx: number) => {
    if (!isAnswered) {
      setTempSelectedOption(idx);
    }
  };

  const handleCheckAnswer = () => {
    if (tempSelectedOption !== null && !isAnswered) {
      setSelectedOption(tempSelectedOption);
      setIsAnswered(true);
      setAnswer(questionId, tempSelectedOption);
    }
  };

  const handleNext = () => {
    const nextId = questionId + 1;
    const hasNext = Questions.some((q) => q.id === nextId);
    if (hasNext) router.push(`/quiz/${nextId}`);
    else router.push("/quiz/result");
  };

  const handleBack = () => {
    const prevId = questionId - 1;
    const hasPrev = Questions.some((q) => q.id === prevId);
    if (hasPrev) router.push(`/quiz/${prevId}`);
  };

  return {
    question,
    selectedOption,
    tempSelectedOption,
    isAnswered,
    handleOptionSelect,
    handleCheckAnswer,
    handleNext,
    handleBack,
  };
};
