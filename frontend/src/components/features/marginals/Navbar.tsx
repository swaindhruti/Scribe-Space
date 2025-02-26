import { Link } from "react-router-dom";
import navData from "@/config/navbar/Data";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types/types";
import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="flex justify-between border-b-4 border-black bg-orange-500 py-4 px-8 max-w-screen w-full fixed z-50"
  >
    <Link to="/" className="flex items-center gap-4 ">
      <Button className="text-4xl font-semibold px-2 py-1 hover:shadow-none hover:translate-x-BoxShadowY hover:-translate-y-reverseBoxShadowY">
        SCRIBE
      </Button>
      <Button className="text-4xl font-semibold px-2 py-1 shadow-none bg-black text-white">
        SPACE
      </Button>
    </Link>{" "}
    <div className="flex justify-start items-center space-x-10">
      {navData.map((navItem: NavItem) => (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          key={navItem.label}
          className="flex"
        >
          <Link to={navItem.href}>
            <Button className="text-lg font-semibold bg-white hover:bg-[var(--main)] transition-all duration-300">
              {navItem.label}
            </Button>
          </Link>
        </motion.div>
      ))}
    </div>
  </motion.nav>
);

export default Navbar;
