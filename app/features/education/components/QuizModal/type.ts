export type QuizModalProps = {
  imageSrc: string;
  title: string;
  description: string;
  onNext?: () => void;
  onSkip?: () => void;
  triggerText?: string;
};
