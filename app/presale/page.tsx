import Tokenpurchase from "@/features/presale/components/Token/tokenpurchase";
import Realtime from "@/features/presale/components/Marquee/realtime";
import TokenomicsChart from "@/features/presale/components/Tokenomics/tokenomics";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white bg-black overflow-x-hidden">
      <Tokenpurchase />
      <Realtime />
      <TokenomicsChart />
    </div>
  );
};

export default Page;