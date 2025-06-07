import React from 'react';

// Data for each exchange logo with more responsive position and image classes
const exchangeLogos = [
  {
    src: '/icons/binance-logo.svg',
    alt: 'Binance',
    // Responsive positioning: smaller offsets on mobile, larger on desktop
    positionClasses: 'top-[5%] left-[10%] sm:left-[20%] lg:top-[10%] lg:left-[20%]',
    // Responsive sizing: using w-16/h-16 (64px) by default, scaling up for larger screens
    imgClasses: 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain',
  },
  {
    src: '/icons/coinbase-logo.svg',
    alt: 'Coinbase',
    positionClasses: 'top-[10%] right-[10%] sm:right-[20%] lg:top-[15%] lg:right-[20%]',
    imgClasses: 'w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain',
  },
  {
    src: '/icons/bybit-logo.svg',
    alt: 'Bybit',
    positionClasses: 'top-[40%] right-[2%] sm:right-[5%] lg:top-[40%] lg:right-[5%]',
    imgClasses: 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain',
  },
  {
    src: '/icons/mexc-logo.svg',
    alt: 'MEXC',
    positionClasses: 'bottom-[10%] right-[5%] sm:right-[15%] lg:bottom-[10%] lg:right-[15%]',
    imgClasses: 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain',
  },
  {
    src: '/icons/bitfinex-logo.svg',
    alt: 'Bitfinex',
    positionClasses: 'bottom-[5%] left-[15%] sm:left-[30%] lg:bottom-[5%] lg:left-[30%]',
    imgClasses: 'w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain',
  },
  {
    src: '/icons/okx-logo.svg',
    alt: 'OKX',
    positionClasses: 'top-[40%] left-[2%] sm:left-[5%] lg:top-[40%] lg:left-[5%]',
    imgClasses: 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain',
  },
];

const ExchangeAnalysis: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background image should scale with the container */}
      <img
        src="/icons/background-wavy-pattern.svg"
        alt="Background Wavy Pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main container for logos and text - its height is crucial for positioning */}
        <div className="relative w-full max-w-4xl mx-auto h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center">
          {/* Text needs to be responsive in size and position */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-tight w-full max-w-[80%] sm:max-w-[70%] text-center">
            We deeply analyze and <br className="hidden sm:inline" />compile assets on the most <br className="hidden sm:inline" /> popular exchanges
          </h2>

          {/* Dynamically render exchange logos */}
          {exchangeLogos.map((logo, index) => (
            <div
              key={index}
              // The base `w-16 h-16` provides a good size for smaller screens.
              // `p-2` gives padding for the logo inside the circle.
              className={`absolute ${logo.positionClasses} p-2 rounded-full bg-black-800 flex items-center justify-center shadow-lg
                         ${logo.imgClasses.includes('w-28') ? 'w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20' : 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24'}
              `}
            >
              <img src={logo.src} alt={logo.alt} className="object-contain w-full h-full" />
              {/* Note: I've replaced `logo.imgClasses` with direct Tailwind classes here for consistency,
                         and applied w-full h-full to the img to make it fill its parent div. */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeAnalysis;