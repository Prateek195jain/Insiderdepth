"use client";
import { useEffect, useState } from "react";
import { ArcherContainer } from "react-archer";

import CardLayout from "./CardComponents/CardLayout";
import { CardData } from "./type";
import { cards } from "./data";

const fadeOverlays: string[] = [
  "left-0 top-0 h-full w-2/5 bg-gradient-to-r from-black to-transparent",
  "right-0 top-0 h-full w-2/5 bg-gradient-to-l from-black to-transparent",
  "left-0 top-0 w-full h-2/5 bg-gradient-to-b from-black to-transparent",
  "left-0 bottom-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent",
];

const ArchitectureDiagram: React.FC = () => {
  const leftCards: CardData[] = cards.slice(0, 4);
  const midCard: CardData = cards[4];
  const chatCard: CardData = cards[5];

  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const updateView = () => setIsMobileView(window.innerWidth < 1024);
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage: "url('/FlowChart.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minWidth: "300px",
        minHeight: "300px",
      }}
    >
      {fadeOverlays.map((className: string, index: number) => (
        <div key={index} className={`absolute ${className} z-10`}></div>
      ))}

      <div className="p-6 md:p-10 bg-[#000000C2] bg-no-repeat bg-cover bg-center min-h-screen text-white flex flex-col items-center relative z-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">
          Advanced AI Real Time Assistant
        </h1>

        <ArcherContainer strokeColor="white" strokeWidth={2} endMarker>
          <CardLayout
            isMobileView={isMobileView}
            leftCards={leftCards}
            midCard={midCard}
            chatCard={chatCard}
          />
        </ArcherContainer>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
