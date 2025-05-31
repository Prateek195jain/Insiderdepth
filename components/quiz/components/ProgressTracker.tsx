import { Questions } from "@/app/quiz/data/Quizdata";
import ProgressBox from "./ProgressBox";
import { useQuizStore } from "@/app/quiz/state/store";
import { Check, X } from "lucide-react";

const ProgressTracker = () => {
  const { answers } = useQuizStore();

  return (
    <div className="flex items-center justify-center w-full">
      {Questions.map((q, idx) => {
        const selected = answers[q.id];
        const isAnswered = selected !== undefined;
        const isCorrect = selected === q.correctOption;

        let boxStyle = "w-6 h-6 rounded-full ";
        let icon = null;

        if (isAnswered) {
          if (isCorrect) {
            boxStyle += "bg-green-500 border-2 border-green-500 ";
            icon = <Check className="w-4 h-4 text-green-900" />;
          } else {
            boxStyle += "bg-red-500 border-2 border-red-500 ";
            icon = <X className="w-4 h-4 text-red-900" />;
          }
        } else {
          boxStyle += "bg-gray-600 ";
        }

        return (
          <div key={q.id} className="flex items-center">
            <div className="border-0 rounded-full w-6 h-6 flex items-center justify-center">
              <ProgressBox customStyle={boxStyle} icon={icon} />
            </div>
            {idx !== Questions.length - 1 && (
              <div className="w-8 h-px border-t border-dotted border-white mx-2"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressTracker;
