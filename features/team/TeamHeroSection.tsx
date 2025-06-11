"use client";

import React from 'react';

export function TeamHeroSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-[#0A101C] text-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/0A101C/CCCCCC?text=Background+Graphic')" }} // Apni background image yahan add karein (e.g., 'url(background-graphic.png")
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black"></div>

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-8">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://placehold.co/400x400/0A101C/4FACF9/png?text=Hero+Graphic" // Apni hero graphic image yahan add karein (hero-graphic.png")
            alt="Demo Advanced Tool Graphic"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet our team
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed max-w-xl md:max-w-none mx-auto md:mx-0">
            We are creating an advanced tool for you to get ahead of the big
            investors by watching their purchases and the flow of capital
            between assets.
          </p>
        </div>
      </div>
    </div>
  );
}
