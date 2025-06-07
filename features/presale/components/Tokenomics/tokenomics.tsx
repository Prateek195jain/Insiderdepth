"use client";

import React, { useState } from 'react';
import CustomPieChart from './chart';
import { tokenomicsData } from './data';

const TokenomicsChart: React.FC = () => {
  const contactAddress = '125x5687xx65482';
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopyContact = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(contactAddress)
        .then(() => {
          setCopyStatus('Copied!');
          setTimeout(() => setCopyStatus(''), 2000);
        })
        .catch(() => {
          fallbackCopyTextToClipboard(contactAddress);
          setCopyStatus('Copied! (fallback)');
          setTimeout(() => setCopyStatus(''), 2000);
        });
    } else {
      fallbackCopyTextToClipboard(contactAddress);
      setCopyStatus('Copied! (fallback)');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen text-white p-4">
      <div className="">
        <div className="flex flex-col items-center gap-6 mt-10">
            <div className="bg-[#4FACF9] h-1 w-15"></div>
            <h1 className="text-xl lg:text-2xl text-center font-medium">Tokenomics</h1>
        </div>

        <div className="flex items-center justify-center m-8">
            <div className="bg-gradient-to-b from-transparent to-[#586270] p-px rounded-md">  
                <div className="bg-gradient-to-b from-black to-[#010409] rounded-md py-4 px-4 flex items-center space-x-5 md:space-x-10">
                    <span className="text-[#8F97A1] text-md md:text-lg">Contact : {contactAddress}</span>
                    <button
                    onClick={handleCopyContact}
                    className="text-[#287EE9] hover:text-blue-300 font-medium text-md md:text-lg focus:outline-none"
                    >
                    {copyStatus || 'Copy'}
                    </button>
                </div>
            </div>
        </div>

        <CustomPieChart />

        <div className="md:flex grid grid-cols-3 mx-auto gap-y-2 gap-x-4 text-sm mt-4">
          {tokenomicsData.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <span
                className="inline-block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-gray-300">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TokenomicsChart;