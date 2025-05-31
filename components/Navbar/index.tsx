import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";

const Navbar = () => {
  return (
    <div className=" fixed top-0 z-50 w-full">
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
