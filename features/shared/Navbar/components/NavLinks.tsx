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
import { NavLinkItem } from "./type";

const navItems: NavLinkItem[] = [
  { label: "Bitcoin chart", href: "/bitcoin-chart" },
  { label: "Ethereum chart", href: "/ethereum-chart" },
  { label: "My list", dropdown: [{ label: "My Link", href: "#" }] },
  { label: "Education", href: "/educationPage" },
  { label: "Resources", dropdown: [{ label: "Resource Link", href: "#" }] },
  { label: "🔥Presale", href: "/presale" },
];

const NavLinks = ({ direction = "row" }: { direction?: "row" | "col" }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={`flex ${direction === "col" ? "flex-col gap-4" : "gap-2"}`}
      >
        {navItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.href ? (
              <NavigationMenuLink asChild>
                <Link href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.label}
                </Link>
              </NavigationMenuLink>
            ) : item.dropdown ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 ">
                  {item.dropdown.map((subItem, subIndex) => (
                    <NavigationMenuLink asChild key={subIndex}>
                      <Link
                        href={subItem.href}
                        className={navigationMenuTriggerStyle()}
                      >
                        <span className="text-black">{subItem.label}</span>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </>
            ) : null}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
