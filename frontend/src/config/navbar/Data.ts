import { NavItem } from "@/types/types";

const navData: NavItem[] = [
  {
    label: "Home",
    href: "/",
    isButton: false,
  },
  {
    label: "Blogs",
    href: "/blogs",
    isButton: false,
  },
  {
    label: "About",
    href: "/about",
    isButton: false,
  },
  {
    label: "Contact",
    href: "/contact",
    isButton: false,
  },
  {
    label: "Get Started — free",
    href: "/auth",
    isButton: true,
  },
];

export default navData;
