"use client";

import React from "react";
import Type from "./Type";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

import { FaHandPaper, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";

const Test = () => {
  return (
    <div className="heroCOntainer  ">
      <div
        id="home"
        className=" py-2 heroWraper w-[99%] xsm:w-[94%] sm:w-[90%] m-auto flex flex-col justify-center items-center  "
      >
        {/* user img  */}
        <div className="userImg relative ">
          <Image
            src={"/profile.jpg"}
            width={"100"}
            height={"100"}
            className="w-14 h-14 p-0.5 rounded-full ring-2 ring-gray-300 "
            alt="Bordered avatar"
          />

          <FaHandPaper className=" absolute bottom-1 right-0 text-xl transform -rotate-12   text-yellow-400 " />
        </div>
        {/* user img  */}

        {/* short description starts  */}
        <div className="shortDescription  mt-3 w-[95%] sm:w-[92%] md:w-[82%] xmd:w-[68%] lg:w-[50%] m-auto text-base xsm:text-xl sm:text-2xl text-center ">
          <p className="  text-4xl font-semibold pb-3 ">
            I am Md. Moniruzzaman
          </p>

          <div className="typingStyl text-base font-semibold pb-4 text-violet-600 ">
            <Type />
          </div>

          <p className="  text-xl  ">
            {" "}
            To gain confidence and fame using my potential in the field of web
            development and express my innovative creative skills for self and
            company growth. I always like to learn new things and have
            experience with new stuff.I enjoy building web application using
            React.
          </p>
        </div>
        {/* short description ends */}

        {/* button section  */}
        <div className="btnGroup  mt-4 flex items-center justify-evenly space-x-1 xsm:space-x-2 ">
          {/* contact button  */}
          <div className="  py-2 px-5 rounded-md text-xs xsm:text-base bg-gray-700 text-gray-50  flex justify-evenly items-center self-center cursor-pointer hover:bg-gray-900 hover:scale-105 active:scale-95  duration-200  ">
            <p className="">Contact me here</p>

            <BiRightArrowAlt className="text-sm xsm:text-xl    " />
          </div>
          {/* contact button  */}

          {/* download button  */}
          <div className="    ">
            <button className="rounded-md  w-full text-xs xsm:text-base py-2 px-5 bg-gray-700 text-gray-50  flex justify-evenly items-center self-center cursor-pointer hover:bg-gray-900 hover:scale-105 active:scale-95  duration-200 ">
              <p className="">Download cv</p>

              <FiDownload className=" text-sm xsm:text-xl   " />
            </button>
          </div>
          {/* download button  */}

          <div className="icon1 p-1.5 rounded-full bg-gray-50  ">
            {" "}
            <FaGithub className=" text-base xsm:text-xl" />
          </div>
          <div className="icon2 p-1.5 rounded-full bg-gray-50 ">
            {" "}
            <FaLinkedin className=" text-base xsm:text-xl" />
          </div>

          {/*  */}
        </div>
        {/* button section  */}
      </div>
    </div>
  );
};

export default Test;
