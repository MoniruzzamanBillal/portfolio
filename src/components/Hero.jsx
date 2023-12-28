"use client";

import Image from "next/image";

import { FiDownload } from "react-icons/fi";

import { FaHandPaper, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import Type from "./Type";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="heroCOntainer  ">
      <div
        id="home"
        className=" py-2 heroWraper w-[99%] xsm:w-[94%] sm:w-[90%] m-auto flex flex-col justify-center items-center  "
      >
        {/* user img  */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="userImg relative  "
        >
          <Image
            src={"/profile.jpg"}
            width={"100"}
            height={"100"}
            className="w-14 h-14 p-0.5 rounded-full ring-2 ring-gray-300 "
            alt="Bordered avatar"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 0.3 }}
            className="handIcon  "
          >
            <FaHandPaper className=" absolute bottom-1 right-0 text-xl transform -rotate-12   text-yellow-400 " />
          </motion.div>
        </motion.div>
        {/* user img  */}

        {/* short description starts  */}
        <motion.div className="shortDescription  mt-3 w-[95%] sm:w-[92%] md:w-[82%] xmd:w-[68%] lg:w-[50%] m-auto text-base xsm:text-xl sm:text-2xl text-center ">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="  text-xl xsm:text-2xl sm:text-3xl xmd:text-4xl font-bold xmd:font-semibold pb-2 xsm:pb-3 "
          >
            I am Md. Moniruzzaman
          </motion.p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="typingStyl text-xs xsm:text-sm sm:text-base font-semibold pb-2 xsm:pb-3 sm:pb-4 text-violet-600 "
          >
            <Type />
          </motion.div>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className=" text-sm xsm:text-base sm:text-lg md:text-xl  "
          >
            To gain confidence and fame using my potential in the field of web
            development and express my innovative creative skills for self and
            company growth. I always like to learn new things and have
            experience with new stuff.I enjoy building web application using
            React.
          </motion.p>
        </motion.div>
        {/* short description ends */}

        {/* button section  */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="btnGroup  mt-4 flex items-center justify-evenly space-x-1 xsm:space-x-2 "
        >
          {/* contact button  */}
          <a
            href="https://www.linkedin.com/in/md-moniruzzaman-a0b466249/"
            target="_blank"
            className="  py-2 px-5 rounded-md text-xs xsm:text-base bg-gray-700 text-gray-50  flex justify-evenly items-center self-center cursor-pointer hover:bg-gray-900 hover:scale-105 active:scale-95  duration-200  "
          >
            <p className="">Contact me here</p>

            <BiRightArrowAlt className="text-sm xsm:text-xl    " />
          </a>
          {/* contact button  */}

          {/* download button  */}
          <div className="    ">
            <a
              href="/moniruzzamanRESUME.pdf"
              download
              className="rounded-md  w-full text-xs xsm:text-base py-2 px-5 bg-gray-700 text-gray-50  flex justify-evenly items-center self-center cursor-pointer hover:bg-gray-900 hover:scale-105 active:scale-95  duration-200 "
            >
              <p className="">Download cv</p>

              <FiDownload className=" text-sm xsm:text-xl   " />
            </a>
          </div>
          {/* download button  */}

          <div className="icon1 p-1.5 rounded-full bg-gray-300  ">
            {" "}
            <FaGithub className=" text-base xsm:text-xl" />
          </div>
          <div className="icon2 p-1.5 rounded-full bg-gray-300 ">
            {" "}
            <FaLinkedin className=" text-base xsm:text-xl" />
          </div>

          {/*  */}
        </motion.div>
        {/* button section  */}
      </div>
    </div>
  );
};

export default Hero;
