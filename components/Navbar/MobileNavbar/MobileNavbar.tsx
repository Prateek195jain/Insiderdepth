import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Bell, Search } from "lucide-react";
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
import Link from "next/link";
import Image from "next/image";

const MobileNavbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-[#30363D9C]">
      <Image src="/InsiderDepthLogo.png" alt="logo" width={150} height={100} />

      <Sheet>
        <SheetTrigger>
          <Menu className="text-white/70" />
        </SheetTrigger>

        <SheetContent className="bg-[#161B22] text-white/70 px-6 py-4 w-auto border-l border-[#30363D9C] flex flex-col ">
          <SheetHeader className="hidden">
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="relative mt-10">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
            <Input
              placeholder="Search alts"
              className="w-full pl-10 text-white/70 border-0 border-b border-white/70 rounded-none bg-transparent focus:outline-none placeholder:text-white/60"
            />
          </div>

          <div className="w-full flex justify-center my-auto">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-center w-full gap-4 py-4">
                <NavigationMenuItem className="w-full text-center">
                  <NavigationMenuLink asChild className="w-full">
                    <Link
                      href="/bitcoin-chart"
                      className={navigationMenuTriggerStyle()}
                    >
                      Bitcoin chart
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full text-center">
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
                      <Link href="#">My Link</Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full text-center">
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
                      <Link href="#">Resource Link</Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <div className="flex justify-center">
              <Bell className="w-5 h-5 text-white/70" />
            </div>
            <Button
              variant="outline"
              className="text-black/70 bg-white hover:bg-gray-200 w-full"
            >
              Register
            </Button>
            <Button className="border text-white/70 hover:opacity-80 w-full">
              Log In
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
