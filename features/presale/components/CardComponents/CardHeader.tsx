import Image from "next/image";

interface CardHeaderProps {
  title?: string;
  icon?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, icon }) => {
  if (!title) return null;

  return (
    <div className="flex items-center">
      {icon && <Image src={icon} alt="icon" width={25} height={25} />}
      <h2 className="text-white pl-3 text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default CardHeader;
