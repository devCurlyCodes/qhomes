"use client";
import React from "react";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <div className="qhomes w-[90%] md:w-1/4 px-5 flex flex-col py-3">
      <motion.span
        className="footerQheader font-poppins text-2xl text-black my-2"
        initial={{ opacity: 0.1, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}>
        OUR LOCATION
      </motion.span>
      <motion.span
        className="footerQheader font-poppins text-sm text-black my-2"
        initial={{ opacity: 0.1, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}>
        {" "}
        XYZ BUILDING, RIVERSIDE DRIVE <br />
        P.O. BOX 12345 - 00100 <br />
        NAIROBI, KENYA <br />
      </motion.span>
      <motion.span
        className="footerQheader font-inter text-md font-medium text-black"
        initial={{ opacity: 0.1, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}>
        findyourhome@qhomes.com
      </motion.span>
    </div>
  );
};

export default Location;
