import Image from "next/image";
import React from "react";

export const GoogleRegisterButton = () => (
  <div>
    <button
      className="w-full flex items-center justify-center gap-2 bg-[#232A36] text-gray-300 py-3 rounded-md font-medium text-base mb-2"
      disabled
    >
      <span className="px-2">
        <Image src="/Google.png" alt="Google-logo" height={18} width={18} />
      </span>
      Register with Google
    </button>
    <div className="flex items-center gap-2 text-gray-500 text-sm">
      <div className="flex-1 h-px bg-[#232A36]" />
      <span>OR</span>
      <div className="flex-1 h-px bg-[#232A36]" />
    </div>
  </div>
);
