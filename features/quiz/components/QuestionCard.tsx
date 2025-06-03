import { OptionItem } from "./optionItem";

import ProgressTracker from "@/features/quiz/components/ProgressTracker";

interface QuestionCardProps {
  question: string;
  options: string[];
  correctOption: number;
  selectedOption: number | null;
  isAnswered: boolean;
  tempSelectedOption: number | null;
  onSelect: (idx: number) => void;
}

export const QuestionCard = ({
  question,
  options,
  correctOption,
  selectedOption,
  isAnswered,
  tempSelectedOption,
  onSelect,
}: QuestionCardProps) => {
  return (
    <div className="py-12 px-12 space-y-4 bg-[#161B22] border border-blue-400 rounded-md lg:w-1/2 lg:h-1/2">
      <div className="flex">
        <ProgressTracker />
      </div>
      <h1 className="text-lg font-bold text-white">{question}</h1>
      <div className="flex flex-col space-y-2">
        {options.map((opt, idx) => (
          <OptionItem
            key={idx}
            idx={idx}
            option={opt}
            correctOption={correctOption}
            selectedOption={selectedOption}
            tempSelectedOption={tempSelectedOption}
            isAnswered={isAnswered}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};
