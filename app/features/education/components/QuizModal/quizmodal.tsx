import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogPortal,
  AlertDialogOverlay
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {QuizModalProps} from "@/app/features/education/components/QuizModal/type"

export default function QuizModal({
  imageSrc,
  title,
  description,
  onNext,
  onSkip,
  triggerText = "Take Quiz"
}: QuizModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-[#287EE9] md:px-20 md:py-6 md:text-lg font-normal">
          {triggerText}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogPortal>
        <AlertDialogOverlay className="backdrop-blur-sm bg-black/30 fixed inset-0 z-40" />
        <AlertDialogContent className="bg-[#161B22] border-[#262B32] rounded gap-y-10 py-10 z-50">
          <AlertDialogHeader className="gap-y-5">
            <img src={imageSrc} alt="" className="h-10 w-10 mx-auto" />
            <AlertDialogTitle className="text-center text-white text-2xl">{title}</AlertDialogTitle>
            <AlertDialogDescription className="mx-auto w-[80%] text-center text-[#DDE7EE94] text-md">
              {description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="justify-center gap-4">
            <AlertDialogAction
              className="bg-[#287EE9] rounded md:px-20 md:py-6 md:text-lg font-normal"
              onClick={onNext}
            >
              Next
            </AlertDialogAction>
            <AlertDialogCancel
              className="bg-[#4E4E4F3B] rounded border-[#4E4E4F3B] text-[#FFFFFF8F] md:px-20 md:py-6 md:text-lg font-normal"
              onClick={onSkip}
            >
              Skip
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}
