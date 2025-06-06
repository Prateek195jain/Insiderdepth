import Image from "next/image";

interface MidSection {
  title: string;
  icon: string;
  image: string;
}

interface CardMidSectionProps {
  midSection?: MidSection[];
}

const CardMidSection: React.FC<CardMidSectionProps> = ({ midSection }) => {
  if (!midSection?.length) return null;

  return (
    <>
      {midSection.map((section, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center gap-4 mt-4"
        >
          <div className="flex gap-4">
            {section.icon && (
              <Image src={section.icon} alt="icon" width={25} height={25} />
            )}
            <h1 className="font-bold text-xl">{section.title}</h1>
          </div>
          {section.image && (
            <Image src={section.image} alt="model" width={100} height={100} />
          )}
        </div>
      ))}
    </>
  );
};

export default CardMidSection;
