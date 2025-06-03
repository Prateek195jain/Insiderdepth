import { EduContent } from "@/features/education/type";
import { eduContentArray } from "./data";

 
export default function EducationTab({ content }: { content: EduContent }) {
  return (
    <div className="w-full h-full px-5 lg:px-10 bg-[#9B93F229] border-2 border-[#9B93F229] rounded-lg">
      <div className="flex py-2 md:py-5 border-b-2 border-[#9B93F229] text-[#DDE7EE] items-center justify-between">
        <h1 className="text-lg md:text-2xl">{content.heading}</h1>
        <h1 className="text-lg md:text-2xl">Step {content.idx} of {eduContentArray.length}</h1>
      </div>
      <div className="flex flex-col gap-5 text-[#DDE7EE94] pt-5 pb-10">
        <p>{content.body}</p>
        <p className="text-[#47A4F0]">
          <span className="text-white font-bold">Key Takeaway:</span> {content.heading} provides essential insights.
        </p>
      </div>
    </div>
  );
}
