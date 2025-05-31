import Image from "next/image";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import SearchBar from "./SearchBar";

const DesktopNavbar = () => {
  return (
    <div className="flex gap-10 bg-[#161B22] p-2 border border-[#30363D9C] justify-between items-center">
      <Image src="/InsiderDepthLogo.png" alt="logo" width={150} height={100} />
      <NavLinks />
      <div className="flex gap-4 items-center">
        <SearchBar />
        <AuthButtons />
      </div>
    </div>
  );
};

export default DesktopNavbar;
