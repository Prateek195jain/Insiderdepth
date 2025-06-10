"use client";

import { useState } from "react";
import { chatdata } from "./data";
import { Message } from "./type";
import Image from "next/image";
import { Paperclip } from "lucide-react";

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>(chatdata);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        sender: "user",
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInput("");
  };

  return (
    <div className="max-w-sm mx-auto bg-[#161B22] rounded-lg shadow-lg p-4 flex flex-col h-[500px]">
      {" "}
      <h1 className="text-white text-center pb-4 font-semibold text-lg">
        Chat
      </h1>
      <div className="flex items-center text-gray-400 text-xs mb-8">
        <div className="flex-grow border-b border-gray-700 mr-2"></div> Sunday,
        10 Jun 2025
        <div className="flex-grow border-b border-gray-700 ml-2"></div>{" "}
      </div>
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {" "}
        <div className="flex flex-col gap-3">
          {" "}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <div className="w-8 h-8 rounded-full border-2 border-[#0194FE] flex items-center justify-center mr-2">
                  <Image
                    src="/puma-logo.png"
                    alt="chatbot-logo"
                    height={100}
                    width={100}
                    className="w-5 h-5 object-cover"
                  />
                </div>
              )}
              <div
                className={`rounded-xl px-4 py-2 max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-[#1C2631] text-white rounded-br-none"
                    : "bg-[#11263F] text-white rounded-bl-none"
                }`}
              >
                <div className="text-sm">{msg.text}</div>
                <div className="text-xs text-gray-400 text-right mt-1">
                  {msg.time}
                </div>
              </div>
              {msg.sender === "user" && (
                <div className="w-8 h-8 rounded-full border-2 border-[#0194FE] flex items-center justify-center ml-2 overflow-hidden">
                  <Image
                    src="/UserAvatar.png"
                    alt="User Avatar"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center rounded-lg mt-4 px-3 py-2 bg-[#FFFFFF0F]">
        <button className="mr-3 p-1 rounded-full text-gray-400 hover:text-white">
          <span>
            <Paperclip />
          </span>
        </button>

        <div className="flex items-center flex-1 bg-[#161B22] rounded-full px-3 py-2">
          <input
            className="flex-1 text-white bg-transparent outline-none placeholder-gray-500"
            placeholder="Type here...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Image
            src="/send.png"
            alt="send"
            height={24}
            width={24}
            onClick={handleSend}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
