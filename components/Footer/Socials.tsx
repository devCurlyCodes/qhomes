"use client";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className="social w-[90%] md:w-1/4 px-5 flex flex-col py-3">
      <motion.span
        className="footerQheader font-poppins text-2xl text-black my-2"
        initial={{ opacity: 0.1, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}>
        SOCIALS
      </motion.span>
      <motion.div
        className="socials flex flex-row items-center space-x-1 mt-3"
        initial={{ opacity: 0.1, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}>
        <div className=" flex items-center justify-center bg-black text-white p-1 rounded-sm border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-slate-600 cursor-pointer">
          <IconBrandFacebook size={22} />
        </div>
        <div className=" flex items-center justify-center bg-black text-white p-1 rounded-sm border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-slate-600 cursor-pointer">
          <IconBrandInstagram size={22} />
        </div>
        <div className=" flex items-center justify-center bg-black text-white p-1 rounded-sm border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-slate-600 cursor-pointer">
          <IconBrandX size={22} />
        </div>
        <div className=" flex items-center justify-center bg-black text-white p-1 rounded-sm border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-slate-600 cursor-pointer">
          <IconBrandLinkedin size={22} />
        </div>
      </motion.div>
    </div>
  );
};

export default Socials;
