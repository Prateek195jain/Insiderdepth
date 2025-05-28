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

const NavLinks = ({ direction = "row" }: { direction?: "row" | "col" }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={`flex ${direction === "col" ? "flex-col gap-4" : "gap-6"}`}
      >
        <NavigationMenuItem className="">
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
              <Link href="#">My Link</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/Education" className={navigationMenuTriggerStyle()}>
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
  );
};

export default NavLinks;
