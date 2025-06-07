import React from "react";

// Data for each roadmap section
const roadmapSections = [
  {
    title: "Elements Completed",
    items: [
      "A fully advanced product that allows you to analyze the flow of funds on BTC, ETH and altcoins available on exchanges: Binance, OKX, Coinbase, MEXC and many others.",
      "Delta volume analysis for SPOT markets",
      "Delta volume analysis for FUTURES markets",
      "Delta volume analysis for individual exchanges",
      "Open interest indicator",
      "Educational zone with dedicated tests",
      "Advanced notification system (e.g. dynamic increase in trade volume)",
      "Online trader's diary",
      "Advanced AI model - which helps in real time during analysis",
      "Partnership with exchanges",
      "Advertising and marketing",
    ],
  },
  {
    title: "In Progress Development",
    items: [
      "Extension of charts with new advanced indicators",
      "Ability to write your own scripts and add your own indicators to the chart (an alternative to TradingView)",
      "Aggressive global marketing and participation in events around the world!",
      "Extension of AI functionality with new skills for even better real-time analysis (indicator tracking)",
      "Expansion of AI model functionality to search for real-time chart formations + provide guidance",
      "Adding functionality for tracking portfolios in the crypto market (e.g. US department, well-known project founders, microstrategy, blackrock, etc.)",
      "Real-time access to wallet preview and all transactions",
      "Expansion of the main product to include more customizable exchanges",
    ],
  },
  {
    title: "Future Expansion",
    items: [
      "Launching an internal DEX exchange",
      "Enabling real-time purchasing during analysis (connection to CEX and our DEX for DEGENS)",
      "Expanding the functionality of the main product with the latest trends and new analysis capabilities",
      "Extension of functionality for AI model",
      "Dedicated mobile application",
      "Collaboration and deployment of the product directly to exchanges and other cryptocurrency projects",
      "Becoming an official sponsor, aggressive global marketing and branding",
    ],
  },
];

const Roadmap: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className=" flex flex-col items-center gap-8  ">
          <div className="bg-[#4FACF9]  h-1 w-15"></div>
          <h1 className="text-4xl font-bold text-white mb-4">Roadmap</h1>
        </div>

        <div className="relative flex justify-around items-center mb-16 mt-8 h-24 overflow-hidden">
          <div className="absolute left-0 right-0 h-full top-1/2 -translate-y-1/2 flex items-center justify-center">
            <img
              src="/wavy-background.gif"
              alt="Roadmap Background GIF"
              className="w-[150%] object-contain opacity-95"
              style={{ height: "600px", width: "100%" }}
            />
          </div>

          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center text-2xl font-bold border-2  border-blue-400 shadow-lg p-2">
                <img
                  src={`/icons/number-${step}.svg`}
                  alt={`Roadmap Step ${step}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-8 w-px h-8 bg-blue-700"></div>
              <div className="absolute -bottom-8 w-2 h-2 rounded-full bg-blue-400 -translate-x-1/2"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmapSections.map((section, index) => (
            <div key={index} className="bg-black-800 rounded-lg p-6 shadow-lg ">
              <h2 className="text-2xl font-semibold mb-6 text-white text-center">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">&#x2022;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
