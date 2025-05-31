export type QuestionType = {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
};

export const Questions: QuestionType[] = [
  {
    id: 1,
    question: "What is the primary role of volume in technical analysis?",
    options: [
      "To predict future earnings of a company",
      "To measure the speed of price changes",
      "To validate or invalidate price movements",
      "To calculate the average price of an asset",
    ],
    correctOption: 3,
  },
  {
    id: 2,
    question: "What does a bullish divergence in volume analysis indicate?",
    options: [
      "The price reaches new highs with increasing volume",
      "The price reaches new lows with decreasing volume",
      "The price remains stable with high volume",
      "The price drops with increasing volume",
    ],
    correctOption: 2,
  },
  {
    id: 3,
    question:
      "Which volume-based indicator measures the flow of money based on both volume and price movement?",
    options: [
      "On-Balance Volume (OBV)",
      "Volume Weighted Average Price (VWAP)",
      "Chaikin Money Flow (CMF)",
      "Volume RSI",
    ],
    correctOption: 3,
  },
  {
    id: 4,
    question:
      "What does high volume during a breakout from a technical pattern, such as a triangle, typically suggest?",
    options: [
      "The breakout is likely to fail",
      "The breakout is more reliable",
      "The market is entering a consolidation phase",
      "The pattern is invalid",
    ],
    correctOption: 2,
  },
  {
    id: 5,
    question:
      "In the context of algorithmic trading, what does the volume profile primarily show?",
    options: [
      "The average price over a specific period",
      "The concentration of trading volume at specific price levels",
      "The total number of trades executed in a session",
      "The speed of price changes during a trading session",
    ],
    correctOption: 2,
  },
  {
    id: 6,
    question:
      "In the context of algorithmic trading, what does the volume profile primarily show?",
    options: [
      "The average price over a specific period",
      "The concentration of trading volume at specific price levels",
      "The total number of trades executed in a session",
      "The speed of price changes during a trading session",
    ],
    correctOption: 2,
  },
  {
    id: 7,
    question:
      "In the context of algorithmic trading, what does the volume profile primarily show?",
    options: [
      "The average price over a specific period",
      "The concentration of trading volume at specific price levels",
      "The total number of trades executed in a session",
      "The speed of price changes during a trading session",
    ],
    correctOption: 2,
  },
  {
    id: 8,
    question:
      "In the context of algorithmic trading, what does the volume profile primarily show?",
    options: [
      "The average price over a specific period",
      "The concentration of trading volume at specific price levels",
      "The total number of trades executed in a session",
      "The speed of price changes during a trading session",
    ],
    correctOption: 2,
  },
];
