import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => (
  <div className="relative text-white">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/70">
      <Search className="h-5 w-5" />
    </span>
    <Input
      className="pl-10 text-white/70 border-0 border-b border-white/70 rounded-none bg-transparent focus:outline-none placeholder:text-white/60"
      placeholder="Search alts"
    />
  </div>
);

export default SearchBar;
