"use client";

import React, { useState } from "react";
import JournalCardContainer from "../journal-card-container";
import BookIcon from "@/features/shared/icons/book";
import MenuDots from "@/features/shared/icons/menu-dots";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteDialog, RenameDialog } from "./components";

interface JournalCardProps {
  title: string;
  earnings: number;
}

const JournalCard: React.FC<JournalCardProps> = ({ earnings, title }) => {
  const IS_PROFIT = earnings >= 0;

  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState<boolean>(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  return (
    <JournalCardContainer>
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center justify-between mb-2">
          <div className="rounded-xs p-2 bg-[rgba(71,164,240,0.17)]">
            <BookIcon />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full aspect-square h-full flex justify-center items-center p-2 hover:bg-[rgba(71,164,240,0.17)] transition-colors duration-300 cursor-pointer">
              <MenuDots />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#161B22] border-[#262B32] text-white rounded-md shadow-lg">
              <DropdownMenuItem onClick={() => setIsRenameDialogOpen(true)}>
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsDeleteDialogOpen(true)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <h2 className="text-white/90 text-lg font-semibold mb-4">{title}</h2>
          <p className="text-gray-400">
            {IS_PROFIT ? "Profit" : "Loss"}:{" "}
            <span className={cn(IS_PROFIT ? "text-green-500" : "text-red-500")}>
              {IS_PROFIT ? "+" : ""}
              {earnings}%
            </span>
          </p>
        </div>
      </div>

      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        setOpen={setIsDeleteDialogOpen}
      />

      <RenameDialog
        isOpen={isRenameDialogOpen}
        setOpen={setIsRenameDialogOpen}
        currentName={title}
      />
    </JournalCardContainer>
  );
};

export default JournalCard;
