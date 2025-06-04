export type NavLinkItem = {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
};
