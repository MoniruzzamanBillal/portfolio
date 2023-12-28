"use client";

import React, { useRef } from "react";
import { ContactInfo } from "@/util/Data";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xs289qc",
        "template_jijd2bp",
        form.current,
        "GRdTJiE8CHcFoD9LB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contactContainer mt-16  py-6 bg-gray-50 ">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="contactWrapper  w-[99%] xsm:w-[96%] sm:w-[93%] md:w-[90%] m-auto  "
      >
        {/* header section  */}
        <div className="header  text-center mb-1.5 xsm:mb-3 ">
          <h1 className=" text-center inline text-xl xsm:text-2xl sm:text-3xl xmd:text-4xl font-semibold pb-1  border-b-4  border-violet-700 ">
            Get in Touch
          </h1>
        </div>

        {/* header section  */}

        {/* contact section  */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="contactContainer mt-16 grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 gap-6 xsm:gap-3 "
        >
          {/* contact card  */}

          {ContactInfo &&
            ContactInfo.map((info, ind) => (
              <div
                key={ind}
                className="contactCard  flex flex-col justify-center items-center  "
              >
                <div className="topImg my-2  h-10 w-10   xsm:h-16 xsm:w-16 ">
                  <img className="  w-full h-full " src={info?.logo} />
                </div>

                <div className="title py-1  text-base xsm:text-lg font-semibold ">
                  <h1> {info?.title} </h1>
                </div>

                <div className="contactData py-2 text-xs xsm:text-sm ">
                  <h1>{info?.data} </h1>
                </div>
              </div>
            ))}

          {/* contact card  */}
        </motion.div>
        {/* contact section  */}

        {/* form section  */}
        <motion.div className="formSection  p-0.5 mt-10 flex flex-col xmd:flex-row justify-between items-center  ">
          {/* form left starts  */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="formLeft  w-full xsm:w-[94%] sm:w-[90%] md:w-[80%] xmd:w-[55%]  xmd:mb-0  "
          >
            {/*  */}
            <div className="topHeader mb-5 bodyText ">
              <p className="navText font-semibold ">
                I'd Love to hear from you. Whether you have a question or just
                want to say Hi, feel free to drop a message. I'll try my best to
                get back to you!
              </p>
            </div>
            {/*  */}

            <div className="formSection bg-green-50 p-3 rounded-md ">
              <form ref={form} onSubmit={sendEmail}>
                {/* name  */}

                <div className=" mb-4 ">
                  <label
                    for="name"
                    className="block mb-1  font-medium text-gray-900 "
                  >
                    Your name :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded focus:border-primary-500 block w-full p-2.5 border-none outline-none "
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* name  */}

                {/*  */}
                <div className="mb-4">
                  <label
                    for="email"
                    className="block mb-1  font-medium text-gray-900"
                  >
                    Your email :
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded focus:border-primary-500 block w-full p-2.5 border-none outline-none"
                    placeholder="Your email"
                    required
                  />
                </div>
                {/*  */}

                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="block mb-1  font-medium text-gray-900"
                  >
                    Your message :
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    name="message"
                    className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded focus:border-primary-500 block w-full p-2.5 border-none outline-none"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <div className="button text-center ">
                  <button
                    type="submit"
                    className=" bg-violet-700 hover:bg-violet-800 active:scale-95 hover:shadow-xl mt-4 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800  focus:outline-none  "
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
          {/* form left ends */}

          {/* form right starts  */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="formRight  w-[99%] xsm:w-[85%] sm:w-[76%] md:w-[65%] xmd:w-[45%]  "
          >
            <div className="imgContainer flex justify-center items-center   ">
              <img
                className=" w-full h-full "
                src={"https://i.ibb.co/L0VXKL4/Mail-sent.png"}
              />
            </div>
          </motion.div>
          {/* form right ends */}
        </motion.div>
        {/* form section ends */}
      </motion.div>
    </div>
  );
};

export default Contact;
