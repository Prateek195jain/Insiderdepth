import React from "react";

const fadeOverlays = [
  "left-0 top-0 h-full w-2/5 bg-gradient-to-r from-black to-transparent",
  "right-0 top-0 h-full w-2/5 bg-gradient-to-l from-black to transparent",
  "left-0 top-0 w-full h-2/5 bg-gradient-to-b from-black to-transparent",
  "left-0 bottom-0 w-full h-2/5 bg-gradient-to-t from-black to transparent",
];

const AnalysisPlatform: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 leading-tight font-DM Sans">
          Analysis platform for Bitcoin, Ethereum and Altcoins.{" "}
          <br className="hidden sm:inline" /> Supported by Advanced AI
          Technology.
        </h1>

        <div
          className="relative w-full max-w-6xl mx-auto mt-8 sm:mt-12 p-4 sm:p-8 bg-[#000000C2] rounded-lg shadow-2xl overflow-hidden
                    flex flex-col items-center justify-center
                    min-h-[600px] sm:min-h-[700px] lg:min-h-[400px]
                    lg:block"
        >
          <div
            className="relative w-full h-auto mb-8 mx-auto
                          lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[65%] lg:h-full lg:mb-0
                          flex items-center justify-center p-2 sm:p-4"
          >
            <div className="relative w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-none">
              <img
                src="/ai-chip.gif"
                alt="AI Chip"
                className="w-full h-full object-contain z-[1]"
              />

              {fadeOverlays.map((className, index) => (
                <div
                  key={index}
                  className={`absolute ${className} z-[10]`}
                ></div>
              ))}
            </div>
          </div>

          <div
            className="relative w-full h-[300px] sm:h-[400px] mx-auto
                          lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] lg:h-full
                          flex items-center justify-center p-2 sm:p-4"
          >
            <img
              src="/icons/crypto-chart.svg"
              alt="Crypto Chart"
              className="w-full h-full object-contain"
            />

            <div
              className="absolute bottom-2 left-2 w-16 h-16
                            sm:bottom-4 sm:left-4 sm:w-20 sm:h-20
                            lg:bottom-4 lg:left-4 lg:w-24 lg:h-24 z-20"
            >
              <img
                src="/icons/bitcoin-logo.svg"
                alt="Bitcoin Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div
              className="absolute top-2 right-2 w-14 h-14
                            sm:top-4 sm:right-4 sm:w-16 sm:h-16
                            lg:top-4 lg:right-4 lg:w-20 lg:h-20 z-20"
            >
              <img
                src="/icons/up-arrows.svg"
                alt="Upward Arrows"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPlatform;
