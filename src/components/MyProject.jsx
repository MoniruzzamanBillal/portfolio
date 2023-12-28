"use client";

import { projectsData } from "@/util/Data";

import { RiFolderVideoFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";

const MyProject = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      id="projects"
      className="myProjectContainer  "
    >
      <div className="myProjectWrapper    mt-9  xsm:mt-12 sm:mt-16 mb-2 w-[99%] xsm:w-[97%] sm:w-[94] md:w-[92%] xmd:w-[90%] lg:w-[86%] m-auto ">
        {/* title  */}

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="titleContainer text-center mb-12 "
        >
          <h1 className=" inline text-3xl font-semibold  navText  text-center  pb-1 border-b-4 border-b-violet-700 ">
            My Projects
          </h1>
        </motion.div>
        {/* title  */}

        {/* project card */}
        <div className="projectCardWrapper grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 ">
          {/* <!-- product - start --> */}

          {projectsData &&
            projectsData.map((project, ind) => (
              <motion.div
                key={ind}
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="  w-[98%] xsm:w-[85%]  sm:w-[78%] md:w-[68%] xmd:w-[60%] m-auto lg:m-0 lg:w-auto flex flex-col items-center justify-between overflow-hidden rounded-md border bg-gray-50 drop-shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300  "
              >
                {/* card img  */}
                <div
                  href="#"
                  className="group bg-gray-100 h-64 sm:h-72  md:h-80 lg:h-96 "
                >
                  <img
                    src={project?.imageUrl}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className=" h-full w-full  transition duration-200 group-hover:scale-105"
                  />
                </div>
                {/* card img  */}

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  {/* card header  */}
                  <p className="font-semibold mb-3 text-lg  ">
                    {project?.title}{" "}
                  </p>
                  {/* card header  */}

                  {/* card description  */}

                  <p className="mb-4 text-gray-500">{project?.description}</p>
                  {/* card description ends */}

                  {/* card technology starts  */}
                  <div className="  py-3 mb-1 flex  flex-wrap justify-center items-center gap-4  ">
                    {project?.tags.map((tech, ind) => (
                      <div className="   " key={ind}>
                        <p className=" inline bg-gray-300 p-1.5 rounded-md text-sm ">
                          {tech}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* card technology ends  */}

                  {/* card button  */}
                  <div className="cardButton   mt-3 flex justify-center items-center gap-4 ">
                    {/* live button  */}
                    <a href={project?.liveLink} target="_blank">
                      <div className="liveButton  flex justify-center items-center bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md gap-2 text-gray-50 font-semibold active:scale-95 ">
                        <button>Live Link</button>
                        <RiFolderVideoFill className="text-lg" />
                      </div>
                    </a>

                    {/*code   */}
                    <a href={project?.github} target="_blank">
                      <div className="liveButton flex justify-center items-center bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md gap-2 text-gray-50 font-semibold active:scale-95 ">
                        <button>Code</button>
                        <FaCode className="text-lg" />
                      </div>
                    </a>
                  </div>
                  {/* card button ends */}
                </div>
              </motion.div>
            ))}

          {/* <!-- product - end --> */}
        </div>
        {/* project card */}
      </div>
    </motion.div>
  );
};

export default MyProject;
