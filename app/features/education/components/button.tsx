import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  onClick?: () => void;
};

export default function Buttons({ className, onClick, children }: props) {
  return (
    <Button
      className={cn(
        "bg-[#287EE9] md:px-20 md:py-6 md:text-lg font-normal",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
