interface Section {
  heading?: string;
  points: string[];
}

interface CardSectionsProps {
  sections?: Section[];
}

const CardSections: React.FC<CardSectionsProps> = ({ sections }) => {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section, idx) => (
        <div key={idx} className="py-3">
          {section.heading && (
            <p className="text-white/80 text-xl font-medium mb-2">
              {section.heading}
            </p>
          )}
          <ul className="list-disc list-outside space-y-4 px-4">
            {section.points.map((point, i) => (
              <li key={i} className="text-[#0194FE] text-wrap">
                <span className="text-[#FFFFFF52]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CardSections;
