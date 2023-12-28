"use client";

import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="aboutContainer   "
    >
      <div
        id="about"
        className="aboutWrapper mt-9  xsm:mt-12 sm:mt-16 mb-2 w-[99%] xsm:w-[94%] sm:w-[92] md:w-[88%] xmd:w-[84%] lg:w-[75%] m-auto  flex flex-col justify-center items-center text-center  "
      >
        <h1 className=" navText text-xl sm:text-3xl md:text-4xl font-semibold mb-3.5 xsm:mb-4 sm:mb-6 md:mb-8 ">
          About me
        </h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className=" text-xs xsm:text-sm  sm:text-base md:text-lg mb-3 sm:mb-5 md:mb-6 "
        >
          As a dedicated frontend developer skilled in React, HTML, CSS,
          Tailwind, JavaScript, Next.js, Express.js, and MongoDB, I excel in
          translating concepts into user-friendly web designs. My expertise,
          cultivated through practical projects, emphasizes creative solutions
          and a commitment to writing clear, effective code.
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className=" text-xs xsm:text-sm  sm:text-base md:text-lg mb-6 "
        >
          Outside of coding, I leverage various avenues to broaden my knowledge,
          including enjoying quality television series and anime. Furthermore, I
          remain dedicated to lifelong learning and actively pursue
          opportunities to develop new skills and perspectives.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
