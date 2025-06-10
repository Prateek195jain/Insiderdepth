import ArchitectureDiagram from "@/features/presale/components/ArchitectureDiagram";
import Tokenpurchase from "@/features/presale/components/Token/tokenpurchase";
import Realtime from "@/features/presale/components/Marquee/realtime";
import TokenomicsChart from "@/features/presale/components/Tokenomics/tokenomics";
import AnalysisPlatform from "@/features/presale/components/AnalysisPlatform/AnalysisPlatform";
import ExchangeAnalysis from "@/features/presale/components/ExchangeAnalysis/ExchangeAnalysis";
import Roadmap from "@/features/presale/components/Roadmap/Roadmap";
import ChatPanel from "@/features/chat/components/chatPanel";

export default function PresalePage() {
  return (
    <div className="flex flex-col   text-white bg-black overflow-x-hidden">
      <AnalysisPlatform />
      <Tokenpurchase />
      <ExchangeAnalysis />
      <ArchitectureDiagram />
      <TokenomicsChart />
      <Roadmap />
      <Realtime />
      <ChatPanel />
    </div>
  );
}
