"use client";
import React from "react";
import { ArcherElement } from "react-archer";
import { CardData } from "../type";
import Card from "../Card";

type CardLayoutProps = {
  isMobileView: boolean;
  leftCards: CardData[];
  midCard: CardData;
  chatCard: CardData;
};

const CardLayout: React.FC<CardLayoutProps> = ({
  isMobileView,
  leftCards,
  midCard,
  chatCard,
}) => {
  if (isMobileView) {
    return (
      <div className="flex flex-col items-center gap-10 relative z-10">
        <div className="z-20">
          {leftCards.map((card, idx) => (
            <ArcherElement
              key={idx}
              id={`source-${idx}`}
              relations={[
                {
                  targetId: "mid",
                  sourceAnchor: "bottom",
                  targetAnchor: "top",
                },
              ]}
            >
              <div className="mb-4">
                <Card {...card} />
              </div>
            </ArcherElement>
          ))}
        </div>

        <ArcherElement
          id="mid"
          relations={[
            {
              targetId: "chat",
              sourceAnchor: "bottom",
              targetAnchor: "top",
            },
          ]}
        >
          <div className="z-20">
            <Card {...midCard} />
          </div>
        </ArcherElement>

        <ArcherElement id="chat">
          <div className="z-20">
            <Card {...chatCard} />
          </div>
        </ArcherElement>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-16 lg:gap-32 min-h-[60vh] relative z-10">
      <div className="flex flex-col gap-6">
        {leftCards.map((card, idx) => (
          <ArcherElement
            key={idx}
            id={`source-${idx}`}
            relations={[
              {
                targetId: "mid",
                sourceAnchor: "right",
                targetAnchor: "left",
              },
            ]}
          >
            <div className="z-20">
              <Card {...card} />
            </div>
          </ArcherElement>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-28">
        <ArcherElement
          id="mid"
          relations={[
            {
              targetId: "chat",
              sourceAnchor: "right",
              targetAnchor: "left",
            },
          ]}
        >
          <div className="z-20">
            <Card {...midCard} />
          </div>
        </ArcherElement>

        <ArcherElement id="chat">
          <div className="z-20">
            <Card {...chatCard} />
          </div>
        </ArcherElement>
      </div>
    </div>
  );
};

export default CardLayout;
