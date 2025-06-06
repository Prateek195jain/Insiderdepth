import { CardData } from "./type";

export const cards: CardData[] = [
  {
    title: "Books",
    icon: "/Book.png",
    sections: [
      {
        heading: "Technical Analysis",
        points: [
          "Technical Analysis of the Financial Markets - John J. Murphy",
          "Japanese Candlestick Charting Techniques - Steve Nison",
          "Encyclopedia of Chart Patterns - Thomas N. Bulkowski",
          "Trading in the Zone - Mark Douglas",
        ],
      },
      {
        heading: "Fundamental Analysis",
        points: [
          "The Intelligent Investor - Benjamin Graham",
          "Security Analysis - Benjamin Graham and David Dodd",
          "Security Analysis - Benjamin Graham and David Dodd",
        ],
      },
    ],
    footer: "View more",
  },
  {
    title: "Data collection",
    icon: "/Database.png",
    sections: [
      {
        points: [
          "Posts from Platform X (API, hashtag)",
          "Reddit (subreddits), StockTwits, news from Bloomberg/Reuters",
        ],
      },
    ],
  },
  {
    title: "Data Processing (NLP)",
    icon: "/nlp.png",
    sections: [
      {
        points: [
          "Sentiment analysis: Sentiment classification",
          "(positive/negative/neutral)",
        ],
      },
    ],
  },
  {
    title: "Data Verification",
    icon: "/security.png",
    sections: [
      {
        points: ["Noise filtering: Spam/bot removal"],
      },
      {
        points: [
          "Cross-verification: Sentiment comparison with X, Reddit and news",
          "correlation with price movements",
        ],
      },
    ],
    footer: "and more...",
  },
  {
    midSection: [
      {
        title: "Advanced AI model",
        icon: "/ai-model.png",
        image: "/puma-logo.png",
      },
    ],
  },
  {
    title: "Chat",
    icon: "/chat.png",
    chat: [
      {
        role: "user",
        message:
          "I'm thinking of entering a short position on Bitcoin. Do you think it's the right time?",
        icon: "/User.png",
        time: "12:24",
      },
      {
        role: "bot",
        message:
          "Sentiment and technicals suggest it's a risky time to short.\n\nWant a quick breakdown?",
        icon: "/puma-chat-logo.png",
        time: "12:24",
      },
    ],
  },
];
