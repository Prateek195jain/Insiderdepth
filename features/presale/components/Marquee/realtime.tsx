import { MarqueeDemo } from "./custommarquee";

export default function Realtime() {
  return (
    <div className="flex flex-col items-center gap-y-6 min-h-[80vh]">
      <div className="bg-[#4FACF9] h-1 w-15"></div>
      <div className="flex flex-col gap-y-14">
        <h1 className="text-xl lg:text-2xl mb-10 text-center font-medium">Real-Time Verified Transactions</h1>
        <MarqueeDemo />
      </div>
    </div>
  );
}