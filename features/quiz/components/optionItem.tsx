import { Check, X } from "lucide-react";

interface OptionProps {
  idx: number;
  option: string;
  correctOption: number;
  selectedOption: number | null;
  tempSelectedOption: number | null;
  isAnswered: boolean;
  onSelect: (idx: number) => void;
}

export const OptionItem = ({
  idx,
  option,
  correctOption,
  selectedOption,
  tempSelectedOption,
  isAnswered,
  onSelect,
}: OptionProps) => {
  const isCorrect = idx === correctOption;
  const isSelected = isAnswered
    ? idx === selectedOption
    : idx === tempSelectedOption;

  let boxStyle = "w-4 h-4 rounded border flex items-center justify-center";
  let icon = null;
  let textStyle = "text-white";

  if (isAnswered) {
    if (isCorrect) {
      boxStyle += " bg-green-500 border-green-900";
      icon = <Check className="w-4 h-4 text-white" />;
      textStyle = "text-green-400";
    } else if (isSelected && !isCorrect) {
      boxStyle += " bg-red-500 border-red-900";
      icon = <X className="w-4 h-4 text-white" />;
      textStyle = "text-red-400";
    } else {
      boxStyle += " border-gray-500";
    }
  } else {
    if (isSelected) {
      boxStyle += " bg-blue-500 border-blue-900";
      icon = <Check className="w-4 h-4 text-white" />;
      textStyle = "text-blue-400";
    } else {
      boxStyle += " border-gray-400";
    }
  }

  return (
    <label
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => onSelect(idx)}
    >
      <div className={boxStyle}>{icon}</div>
      <span className={textStyle}>{option}</span>
    </label>
  );
};
