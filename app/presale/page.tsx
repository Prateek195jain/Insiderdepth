import ArchitectureDiagram from "@/features/presale/components/ArchitectureDiagram";
import Tokenpurchase from "@/features/presale/components/Token/tokenpurchase";
import Realtime from "@/features/presale/components/Marquee/realtime";
import TokenomicsChart from "@/features/presale/components/Tokenomics/tokenomics";

export default function PresalePage() {

  return (
    <div className="flex flex-col justify-center items-center text-white bg-black overflow-x-hidden">
      <ArchitectureDiagram />
      <Tokenpurchase />
      <Realtime />
      <TokenomicsChart />
    </div>
  )
};
