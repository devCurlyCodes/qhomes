"use client";
import React from "react";
import { motion } from "framer-motion";

const ListingHeader = () => {
  return (
    <div className="welcomeHeading flex flex-col items-center space-y-2 md:py-4  w-full">
      <motion.h1
        className="qolani-homes font-inter text-xl text-black font-semibold text-center px-3 md:text-2xl md:my-5"
        initial={{ opacity: 0.1, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.3, ease: "easeInOut", delay: 0.1 }}>
        Explore Our Homes - Rent, Buy, Invest
      </motion.h1>
      <div className="buyOrRent w-[70%] flex flex-row space-x-4 md:my-3">
        <div className=" flex items-center justify-center bg-black text-white py-1 px-3 font-medium font-inter text-sm md:text-md rounded-sm border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-slate-600 cursor-pointer">
          <motion.span
            initial={{ opacity: 0.1, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}>
            ALL
          </motion.span>
        </div>
        <div className=" flex items-center justify-center bg-black text-white py-1 px-3 font-medium font-inter text-sm md:text-md rounded-sm border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-slate-600 cursor-pointer">
          <motion.span
            initial={{ opacity: 0.1, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}>
            RENT
          </motion.span>
        </div>
        <div className=" flex items-center justify-center bg-black text-white py-1 px-3 font-medium font-inter text-sm md:text-md rounded-sm border border-transparent transition-all duration-300 hover:bg-white hover:text-black hover:border-slate-600 cursor-pointer">
          <motion.span
            initial={{ opacity: 0.1, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}>
            BUY
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ListingHeader;
