import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import SearchBar from "./Searchbar";

const MobileNavbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-[#30363D9C]">
      <Image src="/InsiderDepthLogo.png" alt="logo" width={150} height={100} />
      <Sheet>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <SheetTrigger>
          <Menu className="text-white/70" />
        </SheetTrigger>
        <SheetContent className="bg-[#161B22] text-white/70 px-6 py-4 w-auto border-l border-[#30363D9C] flex flex-col">
          <div className="mt-10">
            <SearchBar />
          </div>
          <div className="w-full flex justify-center my-auto">
            <NavLinks direction="col" />
          </div>
          <div className="mt-auto">
            <AuthButtons isColumn />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
