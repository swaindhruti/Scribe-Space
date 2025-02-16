import { Link } from "react-router-dom";
import navData from "@/config/Navbar/Data";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types/types";
import { PenSquare } from "lucide-react";

const Navbar = () => (
  <div className="flex justify-between border-4 border-black bg-orange-500 py-4 px-8 max-w-screen w-full">
    <Link
      to="/"
      className="flex items-center gap-2 hover:scale-105 transition-transform"
    >
      <PenSquare size={40} className="text-primary" />
      <span className="text-4xl font-semibold">Scribe Space</span>
    </Link>
    <div className="flex justify-start items-center space-x-12">
      {navData.map((navItem: NavItem) => (
        <div key={navItem.label} className="flex">
          {navItem.isButton ? (
            <Link to={navItem.href}>
              <Button className="text-lg font-semibold">{navItem.label}</Button>
            </Link>
          ) : (
            <Link
              to={navItem.href}
              className="text-xl font-semibold hover:scale-125 transition-all duration-300"
            >
              {navItem.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Navbar;
