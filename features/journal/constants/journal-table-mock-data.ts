import { JournalEntry } from "../components/journal-data-table/columns";

const JOURNAL_TABLE_MOCK_DATA: JournalEntry[] = [];

function generateMockData() {
  const instruments = [
    "BTC/USD",
    "ETH/USD",
    "ADA/USD",
    "SOL/USD",
    "DOGE/USD",
    "DOT/USD",
  ];
  const types = ["Long", "Short"];
  const emotions = ["Confident", "Anxious", "Greedy", "Fearful", "Neutral"];
  const reasons = [
    "Technical breakout",
    "News event",
    "Market sentiment",
    "Gut feeling",
    "Pattern recognition",
  ];

  for (let i = 1; i <= 100; i++) {
    const entryPrice = Number((Math.random() * 1000).toFixed(2));
    const isLong =
      (types[Math.floor(Math.random() * types.length)] as "Long" | "Short") ===
      "Long";
    const stopLoss = isLong
      ? Number((entryPrice * (1 - Math.random() * 0.05)).toFixed(2))
      : Number((entryPrice * (1 + Math.random() * 0.05)).toFixed(2)); // 0-5% below/above entry
    const takeProfit = isLong
      ? Number((entryPrice * (1 + Math.random() * 0.1)).toFixed(2))
      : Number((entryPrice * (1 - Math.random() * 0.1)).toFixed(2)); // 0-10% above/below entry

    // Simulate profit/loss: -1 for loss, 0 for break-even, 1 for profit
    const resultOutcome = Math.floor(Math.random() * 3) - 1;
    let profitLossValue: number;

    if (resultOutcome === 1) {
      // Profit
      profitLossValue = isLong
        ? takeProfit - entryPrice
        : entryPrice - takeProfit;
    } else if (resultOutcome === -1) {
      // Loss
      profitLossValue = isLong ? stopLoss - entryPrice : entryPrice - stopLoss;
    } else {
      // Break-even
      profitLossValue = 0;
    }
    profitLossValue = Number(profitLossValue.toFixed(2));

    JOURNAL_TABLE_MOCK_DATA.push({
      id: i.toString(),
      financialInstrument:
        instruments[Math.floor(Math.random() * instruments.length)],
      entry: entryPrice,
      type: isLong ? "Long" : "Short",
      stopLoss: stopLoss,
      takeProfit: takeProfit,
      profitLoss: profitLossValue,
      result: resultOutcome, // -1 for loss, 0 for break-even, 1 for profit
      reasonForEntry: reasons[Math.floor(Math.random() * reasons.length)],
      yourEmotions: emotions[Math.floor(Math.random() * emotions.length)],
      yourConclusion: `Conclusion for trade ${i}`,
    });
  }
}

generateMockData();

export default JOURNAL_TABLE_MOCK_DATA;
