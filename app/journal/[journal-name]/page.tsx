import JournalPageComponent from "@/features/journal/page/single-journal-page";

const SingleJournalPage = async ({
  params,
}: {
  params: Promise<{ "journal-name": string }>;
}) => {
  const resolvedParams = await params;
  return <JournalPageComponent journalName={resolvedParams["journal-name"]} />;
};

export default SingleJournalPage;
