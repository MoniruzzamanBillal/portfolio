"use client";

import { motion } from "framer-motion";
import { links } from "@/util/Data.js";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="navContainer backdrop-blur  fixed w-full z-20 pt-2.5 ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="navWrapper backdrop-blur bg-gray-300 w-[99%] xsm:w-[80%] sm:w-[75%] md:w-[70%] xmd:w-[65%] lg:w-[50%] m-auto py-1.5 rounded-lg flex justify-evenly items-center self-center   "
      >
        {links.map((link, ind) => (
          <Link
            href={link.hash}
            className=" group relative navText font-semibold hover:font-bold transition-all duration-100 py-1 px-2 rounded text-xs  xsm:text-sm md:text-base "
          >
            <div className="test absolute top-0 left-0 bg-gray-200 w-0 group-hover:w-full h-full z-[-10] transform origin-right transition-all duration-300 rounded "></div>

            {link.name}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Nav;
