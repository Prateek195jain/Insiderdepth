"use client";

import { Plus } from "lucide-react";
import JournalCardContainer from "../journal-card-container";
import { useState } from "react";
import AddJournalDialog from "./components/add-journal-dialog";

const AddJournalCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <JournalCardContainer
        onClick={() => setIsOpen(true)}
        className="border border-[rgba(71,164,240,0.54)] border-dashed hover:border-[#1E7BC2] hover:border-solid transition-all duration-300 hover:cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center h-full text-[#47A4F0]">
          <div className="bg-[rgba(71,164,240,0.17)] rounded-sm p-4 mb-2">
            <Plus />
          </div>
          <h2 className="text-xs font-semibold">Add Journal</h2>
        </div>
      </JournalCardContainer>
      <AddJournalDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AddJournalCard;
