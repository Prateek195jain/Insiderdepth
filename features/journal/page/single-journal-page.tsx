import { MoveLeftIcon } from "lucide-react";
import JournalDataTable from "../components/journal-data-table";

const SingleJournalPage = ({ journalName }: { journalName: string }) => {
  return (
    <main className="sm:w-11/12 mx-auto bg-[#010409] mt-24 text-white">
      <div className="flex items-center gap-4 mb-8">
        <div className="cursor-pointer">
          <span className="sr-only">Go back</span>
          <MoveLeftIcon />
        </div>
        <h1 className="text-2xl font-semibold text-center flex-1">
          Journal: {journalName}
        </h1>
      </div>
      <div>
        <JournalDataTable />
      </div>
    </main>
  );
};

export default SingleJournalPage;
