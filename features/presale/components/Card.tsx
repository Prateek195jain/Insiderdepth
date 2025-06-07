import Image from "next/image";
import CardHeader from "./CardComponents/CardHeader";
import CardSections from "./CardComponents/CardSections";
import CardFooter from "./CardComponents/CardFooter";
import CardMidSection from "./CardComponents/CardMidSection";
import CardChat from "./CardComponents/CardChat";
import { CardData } from "./type";



const Card = ({
  title,
  sections,
  icon,
  footer,
  midSection,
  chat,
}: CardData) => (
  <div className="bg-[#14191F] border border-[#1f2937] rounded-sm max-w-[320px] h-fit shadow-md text-gray-200">
    <div className="border-b border-b-[#363636] p-2.5 flex gap-2 w-full rounded">
      <span className="bg-[#363636] w-2 h-2 rounded-full"></span>
      <span className="bg-[#363636] w-2 h-2 rounded-full"></span>
      <span className="bg-[#363636] w-2 h-2 rounded-full"></span>
    </div>

    <CardHeader />
    <div className="p-5 flex flex-col gap-2">
      {title && (
        <div className="flex items-center">
          {icon && <Image src={icon} alt="icon" width={25} height={25} />}
          <h2 className="text-white pl-3 text-lg font-semibold">{title}</h2>
        </div>
      )}

      {sections && <CardSections sections={sections} />}
      {footer && <CardFooter footer={footer} />}
      {midSection && <CardMidSection midSection={midSection} />}
      {chat && <CardChat chat={chat} />}
    </div>
  </div>
);

export default Card;
