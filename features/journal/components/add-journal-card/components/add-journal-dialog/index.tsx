import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddJournalDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] text-white">
        <DialogHeader>
          <DialogTitle>Add Journal</DialogTitle>
          <DialogDescription>Create a new journal entry</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          <Label htmlFor="rename" className="sr-only">
            Name
          </Label>
          <Input id="rename" name="rename" placeholder="Journal Name" />
        </div>
        <DialogFooter>
          <Button type="submit" variant="default">
            Create
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddJournalDialog;
