"use client"
import React from "react"

interface AmountInputProps {
  amount: string
  onChange: (val: string) => void
  onMaxClick: () => void
}

const AmountInput: React.FC<AmountInputProps> = ({ amount, onChange, onMaxClick }) => {
  return (
    <div className="mb-8">
      <h1 className="text-gray-400 text-sm font-medium mb-2">Enter the Amount</h1>
      <div className="relative">
        <input
          type="number"
          id="amount"
          placeholder="0.00"
          value={amount}
          onChange={(e) => onChange(e.target.value)}
          className="text-lg w-full bg-gray-700 text-white py-3 px-4 pr-16 border border-gray-600 rounded-md focus:outline-none focus:bg-gray-600 focus:border-blue-500 placeholder-gray-500"
        />
        <span
          className="absolute text-md inset-y-0 right-0 pr-4 flex items-center text-blue-400 font-medium cursor-pointer hover:text-blue-300"
          onClick={onMaxClick}
        >
          Max
        </span>
      </div>
    </div>
  )
}

export default AmountInput
