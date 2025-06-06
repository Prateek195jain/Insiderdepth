import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RenameDialog = ({
  isOpen,
  setOpen,
  currentName,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  currentName: string;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="text-white">
        <DialogHeader>
          <DialogTitle>Rename</DialogTitle>
          <DialogDescription>
            Please enter the name of the journal you want to rename.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          <Label htmlFor="rename" className="sr-only">
            Name
          </Label>
          <Input
            id="rename"
            name="rename"
            defaultValue={currentName}
            placeholder="Journal 1"
          />
        </div>
        <DialogFooter>
          <Button type="submit" variant="default">
            Rename
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

export default RenameDialog;
