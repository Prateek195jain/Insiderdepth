import { JournalCard } from "../components";
import AddJournalCard from "../components/add-journal-card";
import JOURNALS from "../constants/journal-mock-data";

const JournalPage = () => {
  return (
    <main className="sm:w-4/5 mx-auto bg-[#010409]">
      <h1 className="mt-24 text-white md:text-2xl text-xl font-semibold">
        Your trader&apos;s journal
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <AddJournalCard />
        {JOURNALS.map((journal) => (
          <JournalCard
            key={journal.id}
            earnings={journal.earnings}
            title={journal.title}
          />
        ))}
      </section>
    </main>
  );
};

export default JournalPage;
