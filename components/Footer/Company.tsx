"use client";
import React from "react";
import { motion } from "framer-motion";

const Company = () => {
  return (
    <motion.div
      className="company w-[90%] md:w-1/4 px-5 flex flex-col py-3 items-center"
      initial={{ opacity: 0.1, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}>
      <span className="footerQheader font-poppins text-2xl text-black my-2 w-full flex ">
        COMPANY
      </span>
      <span className="footerQheader font-poppins text-sm text-thin text-black my-1 w-full">
        SERVICES
      </span>
      <span className="footerQheader font-poppins text-sm text-thin text-black my-1 w-full">
        CAREERS
      </span>
      <span className="footerQheader font-poppins text-sm text-thin text-black my-1 w-full">
        GET IN TOUCH
      </span>
      <span className="footerQheader font-poppins text-sm text-thin text-black my-1 w-full">
        PRIVACY POLICY
      </span>
    </motion.div>
  );
};

export default Company;
