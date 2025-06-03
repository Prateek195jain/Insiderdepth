"use client";

import React from "react";

export default function Loader({
  size = 24,
  color = "text-white",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <div
      className="flex items-center justify-center"
      role="status"
      aria-label="loading"
    >
      <svg
        className={`animate-spin ${color}`}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
}
