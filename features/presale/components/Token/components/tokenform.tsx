"use client";
import React, { useState } from "react";
import TokenDropdown from "./TokenDropdown";
import AmountInput from "./Amtinput";

type TokenItem = {
  id: number;
  coin: string;
  token: string;
};

const imgarray = [
  { img: "/purchaseform.png" },
  { img: "/purchaseform1.png" },
  { img: "/purchaseform2.png" },
  { img: "/purchaseform3.png" },
  { img: "/purchaseform4.png" },
];

const tokenselect: TokenItem[] = [
  { id: 1, coin: "/purchaseform5.png", token: "BNB" },
  { id: 2, coin: "/purchaseform2.png", token: "POLYGON" },
  { id: 3, coin: "/purchaseform6.webp", token: "BITCOIN" },
  { id: 4, coin: "/TRX.png", token: "TRON" },
  { id: 5, coin: "/Eth.png", token: "ETHEREUM" },
  { id: 6, coin: "/DOGE.png", token: "DOGECOIN" },
];

const TokenPurchaseForm = () => {
  const [amount, setAmount] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState(tokenselect[0]);
  const maxAmount = 1000;

  const handleMaxClick = () => {
    setAmount(maxAmount.toFixed(2));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTokenSelect = (tokenItem: TokenItem) => {
    setSelectedToken(tokenItem);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent px-4 py-8">
      <div className="bg-[#161B22EB] p-8 rounded-lg shadow-xl backdrop-blur-sm w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Token Purchase</h2>

        <TokenDropdown
          tokens={tokenselect}
          selectedToken={selectedToken}
          isOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          onSelect={handleTokenSelect}
        />

        <AmountInput amount={amount} onChange={setAmount} onMaxClick={handleMaxClick} />

        <button
          disabled={!parseFloat(amount) || parseFloat(amount) <= 0}
          className={`w-full text-lg font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-300 ${
            !parseFloat(amount) || parseFloat(amount) <= 0
              ? "bg-blue-400 cursor-not-allowed text-gray-400"
              : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
          }`}
        >
          Buy now
        </button>

        <div className="mt-8">
          <div className="flex space-x-4 mb-4">
            {imgarray.map((item, index) => (
              <img key={index} src={item.img} alt="" className="w-6 h-6 object-contain rounded-md" />
            ))}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Multi wallet support, buy via BEP20 network,
            <br />
            Ethereum, Linea, Polygon, Base, Arbitrum & more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenPurchaseForm;