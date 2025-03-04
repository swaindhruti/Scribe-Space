import { NavItem, FooterItem } from "@/types/types";

const navData: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Get Started — free",
    href: "/auth",
  },
];

const FooterData: FooterItem[] = [
  {
    label: "About",
  },
  {
    label: "Github",
  },
  {
    label: "Twitter",
  },
  {
    label: "LinkedIn",
  },
];

export { navData, FooterData };
