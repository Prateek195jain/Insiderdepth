import { ReactNode } from "react";

interface ProgressBoxProps {
  customStyle: string;
  icon?: ReactNode;
}

const ProgressBox = ({ customStyle, icon }: ProgressBoxProps) => {
  return (
    <div className={`flex items-center justify-center ${customStyle}`}>
      {icon}
    </div>
  );
};

export default ProgressBox;
