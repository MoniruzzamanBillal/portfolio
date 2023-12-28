"use client";

import { skillsData } from "@/util/Data";
import { motion } from "framer-motion";
import React from "react";

import Marquee from "react-fast-marquee";

// console.log(skillsData);

const Skills = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      id="skills"
      className="skillsContainer mt-9  xsm:mt-12 sm:mt-16  "
    >
      <div className="skillsWrapper  w-[99%] xsm:w-[94%] sm:w-[90%] m-auto ">
        <h1 className=" text-xl xsm:text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-4 navText ">
          My Skills
        </h1>

        {/* skill card  starts  */}
        <Marquee pauseOnHover={true}>
          <div className="skillCardContainer py-8  flex ">
            {skillsData &&
              skillsData.map((skill, ind) => (
                <div
                  key={ind}
                  class="  transition-all hover:scale-105 duration-300 hover:shadow-2xl p-4 sm:p-6 cursor-pointer mx-4 min-w-[11rem] max-w-sm  rounded-lg bg-gray-200 shadow-xl flex flex-col justify-center items-center  "
                >
                  <div class="mb-2 h-10 w-10 xsm:h-14 xsm:w-14 sm:h-16 sm:w-16 md:h-16 md:w-16  xmd:h-20 xmd:w-20 lg:h-24 lg:w-24">
                    <img
                      src={skill?.skillImg}
                      loading="lazy"
                      alt="Photo by Radu Florin"
                      class="h-full w-full   "
                    />
                  </div>

                  <div>
                    <div class="text-center font-bold text-indigo-500 md:text-lg">
                      {skill?.title}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Marquee>

        {/* skill card  ends  */}
      </div>
    </motion.div>
  );
};

export default Skills;
