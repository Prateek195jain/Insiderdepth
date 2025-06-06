"use client";
import { useEffect, useState } from "react";
import { ArcherContainer } from "react-archer";
import { cards } from "./data";
import CardLayout from "./CardComponents/CardLayout";

const ArchitectureDiagram = () => {
  const leftCards = cards.slice(0, 4);
  const midCard = cards[4];
  const chatCard = cards[5];

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const updateView = () => setIsMobileView(window.innerWidth < 1024);
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/FlowChart.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minWidth: "300px",
        minHeight: "300px",
      }}
    >
      <div
        className="p-6 md:p-10 bg-[#000000C2] bg-no-repeat bg-cover bg-center min-h-screen text-white flex flex-col items-center"
        // style={{
        //   background:
        //     "linear-gradient(269.9deg, #010409 8.94%, rgba(1, 4, 9, 0.66) 30.22%, rgba(1, 4, 9, 0.26) 53.87%, rgba(1, 4, 9, 0) 83.44%)",
        // }}
      >
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
