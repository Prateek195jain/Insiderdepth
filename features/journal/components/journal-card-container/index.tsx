import { cn } from "@/lib/utils";
import React from "react";

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const JournalCardContainer: React.FC<CardContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-3xs aspect-square bg-[rgba(42,45,62,0.43)] rounded-md p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default JournalCardContainer;
