interface JournalEntry {
  id: string;
  title: string;
  earnings: number; // Earnings can be negative or positive
}

const JOURNALS: JournalEntry[] = [];

function generateJournalMockData() {
  const numberOfEntries = Math.floor(Math.random() * 50) + 1; // Random number of entries between 1 and 10
  for (let i = 1; i <= numberOfEntries; i++) {
    JOURNALS.push({
      id: i.toString(),
      title: `Journal Entry ${i}`,
      earnings: Math.floor(Math.random() * 1000) - 500, // Random earnings between -500 and 500
    });
  }
}

generateJournalMockData();

export default JOURNALS;
