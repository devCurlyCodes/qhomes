"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WelcomeBody = () => {
  return (
    <div className="welcomesec text-black w-[100%] md:w-[80%]  flex flex-col md:flex-row justify-between mt-5">
      <motion.div
        className="exclusive relative  flex items-center justify-center w-full md:w-1/3 p-5"
        initial={{ opacity: 0.1, x: -100, scale: 0.6 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.1 }}>
        <Image
          src={"/slideone.jpg"}
          height="1000"
          width="1000"
          className="h-80 object-cover my-5"
          alt={"development"}
        />
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black bg-opacity-50 text-white text-lg md:text-xl font-light px-4 py-2 rounded-lg">
          RESIDENTIAL
        </div>
      </motion.div>
      <motion.div
        className="exclusive relative flex items-center justify-center w-full md:w-1/3 p-5"
        initial={{ opacity: 0.1, x: -100, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}>
        <Image
          src={"/slidetwo.jpg"}
          height="1000"
          width="1000"
          className="h-80 object-cover my-5"
          alt={"development"}
        />
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black bg-opacity-50 text-white text-lg md:text-xl font-light px-4 py-2 rounded-lg">
          COMMERCIAL
        </div>
      </motion.div>
      <motion.div
        className="exclusive relative flex items-center justify-center w-full md:w-1/3 p-5"
        initial={{ opacity: 0.1, x: -100, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}>
        <Image
          src={"/slidethree.jpg"}
          height="1000"
          width="1000"
          className="h-80 object-cover my-5"
          alt={"development"}
        />
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black bg-opacity-50 text-white text-lg md:text-xl font-light px-4 py-2 rounded-lg">
          DEVELOPMENT
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeBody;
