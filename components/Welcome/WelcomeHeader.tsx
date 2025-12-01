"use client";
import React from "react";
import { motion } from "framer-motion";

const WelcomeHeader = () => {
  return (
    <div className="welcomeHeading flex flex-col items-center space-y-4">
      <motion.h1
        className="qolani-homes font-inter text-2xl text-white"
        initial={{ opacity: 0.1, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}>
        QOLANI HOMES
      </motion.h1>
      <motion.span
        className="turning font-inter text-2xl text-white font-light"
        initial={{ opacity: 0.1, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}>
        Turning Dreams into Homes
      </motion.span>
    </div>
  );
};

export default WelcomeHeader;
