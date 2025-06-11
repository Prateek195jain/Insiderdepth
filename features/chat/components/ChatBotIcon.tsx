"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import ChatPanel from "./chatPanel";

const ChatBotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-2 lg:right-4 bottom-20 z-50">
      {isOpen && (
        <div className="mb-4 ">
          <ChatPanel />
        </div>
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full border-2 border-[#0194FE] flex items-center justify-center cursor-pointer hover:opacity-70 transition"
      >
        {isOpen ? (
          <X className="text-[#0194FE] w-6 h-6" />
        ) : (
          <Image
            src="/puma-logo.png"
            alt="chatbot-logo"
            width={24}
            height={24}
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default ChatBotIcon;
