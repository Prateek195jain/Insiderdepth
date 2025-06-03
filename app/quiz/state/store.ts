import { create } from "zustand";

type QuizState = {
  answers: Record<number, number>; // questionId -> selectedOption
  setAnswer: (questionId: number, selectedOption: number) => void;
};

export const useQuizStore = create<QuizState>((set) => ({
  answers: {},
  setAnswer: (questionId, selectedOption) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: selectedOption,
      },
    })),
}));
