"use client";
import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { motion } from "framer-motion";

const LatestText = () => {
  return (
    <div className="latestInfo w-full md:w-1/3 p-3 py-3 md:py-10 flex items-center flex-col ">
      <motion.h1
        className="qolani-homes font-inter text-4xl text-black my-2 md:my-5 font-light w-full"
        initial={{ opacity: 0.1, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}>
        QOLANI LATEST
      </motion.h1>
      <motion.span
        className="turning font-inter text-black font-light my-3 md:my-10 w-full px-1"
        initial={{ opacity: 0.1, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}>
        At Qolani Homes, we offer premium real estate solutions tailored for
        high rental returns and long-term capital growth. Our developments are
        designed with a data-driven approach, ensuring quality assets that
        provide value to homeowners and investors alike.
      </motion.span>

      <motion.div
        className="bottomBtn mt-5 hidden w-full justify-start  md:block"
        initial={{ opacity: 0.1, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}>
        <PrimaryBtn label={"View Latest From Qolani"} />
      </motion.div>
    </div>
  );
};

export default LatestText;
