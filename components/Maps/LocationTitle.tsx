"use client";
import { motion } from "framer-motion";
const LocationTitle = () => {
  return (
    <motion.h1
      className="font-medium text-3xl font-inter my-10"
      initial={{ opacity: 0.1, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}>
      Want To Visit Us?
    </motion.h1>
  );
};

export default LocationTitle;
