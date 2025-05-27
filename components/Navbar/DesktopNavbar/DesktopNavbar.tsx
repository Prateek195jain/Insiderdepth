import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <div className="flex gap-10 bg-[#161B22] p-2 border border-[#30363D9C] justify-between items-center">
      <div>
        <Image
          src="/InsiderDepthLogo.png"
          alt="logo"
          width={150}
          height={100}
        />
      </div>

      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/bitcoin-chart"
                  className={navigationMenuTriggerStyle()}
                >
                  Bitcoin chart
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/ethereum-chart"
                  className={navigationMenuTriggerStyle()}
                >
                  Ethereum chart
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>My list</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <Link href="#">Link</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/Education"
                  className={navigationMenuTriggerStyle()}
                >
                  Education
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink asChild>
                  <Link href="#">Link</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative text-white ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/70">
            <Search className="h-5 w-5" />
          </span>
          <Input
            className="pl-10 text-white/70 border-0 border-b border-white/70 rounded-none bg-transparent focus:outline-none"
            placeholder="Search alts"
          />
        </div>

        <div>
          <Bell className="text-white/70 w-5 h-5" />
        </div>

        <Button
          variant="outline"
          className="text-black/70 bg-white hover:bg-gray-200"
        >
          Register
        </Button>
        <Button className="border text-white/70 hover:opacity-80">
          Log In
        </Button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
