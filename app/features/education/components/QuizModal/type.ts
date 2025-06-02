export type QuizModalProps = {
  imageSrc: string;
  title: string;
  description: string;
  onNext?: () => void;
  onSkip?: () => void;
  triggerText?: string;
  showTrigger: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  buttonName1: string;
  buttonName2: string;
};
