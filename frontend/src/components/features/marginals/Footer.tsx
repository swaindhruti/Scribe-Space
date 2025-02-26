import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <motion.footer
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="flex flex-col md:flex-row justify-between border-t-4 border-black bg-orange-500 py-8 px-8 max-w-screen w-full">
      <Link to="/" className="flex items-center gap-4 mb-4 md:mb-0">
        <Button className="text-4xl font-semibold px-2 py-1 hover:shadow-none hover:translate-x-BoxShadowY hover:-translate-y-reverseBoxShadowY">
          SCRIBE
        </Button>
        <Button className="text-4xl font-semibold px-2 py-1 shadow-none bg-black text-white">
          SPACE
        </Button>
      </Link>
      <div className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="flex"
        >
          <Link to="/about">
            <Button className="text-lg font-semibold bg-white hover:bg-[var(--main)] transition-all duration-300">
              About
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="flex"
        >
          <Link to="/contact">
            <Button className="text-lg font-semibold bg-white hover:bg-[var(--main)] transition-all duration-300">
              Github
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="flex"
        >
          <Link to="/contact">
            <Button className="text-lg font-semibold bg-white hover:bg-[var(--main)] transition-all duration-300">
              Twitter
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="flex"
        >
          <Link to="/contact">
            <Button className="text-lg font-semibold bg-white hover:bg-[var(--main)] transition-all duration-300">
              LinkedIn
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
