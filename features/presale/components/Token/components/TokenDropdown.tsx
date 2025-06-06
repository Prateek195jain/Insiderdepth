"use client"
import React from "react"

type TokenItem = {
  id: number
  coin: string
  token: string
}

interface TokenDropdownProps {
  tokens: TokenItem[]
  selectedToken: TokenItem
  isOpen: boolean
  toggleDropdown: () => void
  onSelect: (token: TokenItem) => void
}

const TokenDropdown: React.FC<TokenDropdownProps> = ({
  tokens,
  selectedToken,
  isOpen,
  toggleDropdown,
  onSelect
}) => {
  return (
    <div className="mb-6 relative">
      <h1 className="text-gray-400 text-sm font-medium mb-2">Select the Token</h1>
      <div
        className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-3 px-4 flex items-center justify-between cursor-pointer focus:outline-none focus:bg-gray-600"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <img src={selectedToken.coin} alt={selectedToken.token} className="w-6 h-6 mr-2 object-contain" />
          <span className="text-lg">{selectedToken.token}</span>
        </div>
        <svg
          className={`fill-current h-4 w-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {tokens.map((item) => (
            <li
              key={item.id}
              className="px-4 py-3 flex items-center text-white cursor-pointer hover:bg-gray-600"
              onClick={() => onSelect(item)}
            >
              <img src={item.coin} alt={item.token} className="w-6 h-6 mr-2 object-contain" />
              <span>{item.token}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TokenDropdown
