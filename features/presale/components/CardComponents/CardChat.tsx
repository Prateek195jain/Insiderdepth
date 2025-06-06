import Image from "next/image";

interface ChatMessage {
  role: "user" | "bot";
  message: string;
  icon: string;
  time: string;
}

interface CardChatProps {
  chat?: ChatMessage[];
}

const CardChat: React.FC<CardChatProps> = ({ chat }) => {
  if (!chat?.length) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <hr className="w-[25%] border-t border-[#363636]" />
        <p className="w-[50%] text-xs text-gray-400">Sunday, 10 Jun 2025</p>
        <hr className="w-[25%] border-t border-[#363636]" />
      </div>

      {chat.map((msg, idx) => (
        <div key={idx}>
          {msg.role === "user" ? (
            <div className="flex justify-end items-start gap-1">
              <div className="bg-[#1f2937] text-white/85  p-3 rounded-md max-w-[80%]">
                <p className="text-sm whitespace-pre-line leading-relaxed">
                  {msg.message}
                </p>
              </div>
              <Image
                src={msg.icon}
                alt="user icon"
                width={24}
                height={24}
                className="mt-1"
              />
            </div>
          ) : (
            <div className="flex items-start gap-2">
              <Image
                src={msg.icon}
                alt="bot icon"
                width={24}
                height={24}
                className="mt-1"
              />
              <div className="bg-[#11263F] text-white/85 p-3 rounded-md max-w-[80%]">
                <p className="text-sm whitespace-pre-line">{msg.message}</p>
              </div>
            </div>
          )}
          <p className="text-xs text-gray-400 mt-1 ml-[28px]">{msg.time}</p>
        </div>
      ))}
    </div>
  );
};

export default CardChat;
