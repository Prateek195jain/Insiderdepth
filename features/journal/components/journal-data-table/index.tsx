import { DataTable } from "@/features/shared/components/data-table";
import { JOURNAL_ENTRY_COLUMNS } from "./columns";
import JOURNAL_TABLE_MOCK_DATA from "@/features/journal/constants/journal-table-mock-data";

const JournalDataTable = () => {
  const filterableColumns = [
    {
      id: "type",
      title: "Position Type",
      options: [
        { label: "Long", value: "Long" },
        { label: "Short", value: "Short" },
      ],
    },
    {
      id: "financialInstrument",
      title: "Instrument",
      options: [
        { label: "BTC/USD", value: "BTC/USD" },
        { label: "ETH/USD", value: "ETH/USD" },
        { label: "ADA/USD", value: "ADA/USD" },
        { label: "SOL/USD", value: "SOL/USD" },
        { label: "DOGE/USD", value: "DOGE/USD" },
        { label: "DOT/USD", value: "DOT/USD" },
      ],
    },
  ];

  const searchableColumns = [
    { id: "financialInstrument", title: "Instrument" },
  ];

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={JOURNAL_ENTRY_COLUMNS}
        data={JOURNAL_TABLE_MOCK_DATA}
        filterableColumns={filterableColumns}
        searchableColumns={searchableColumns}
      />
    </div>
  );
};

export default JournalDataTable;
