"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ListingsCard = () => {
  return (
    <div className="ImageCard flex  flex-col w-full md:w-1/3 lg:w-1/4 md:space-x-2  md:px-4   items-center">
      <motion.div
        className="div"
        initial={{ opacity: 0.1, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}>
        <Image
          src={"/slideone.jpg"}
          height="500"
          width="500"
          className="w-[90%] sm-md:w-[70%] md:w-96 h-60 object-cover my-2 rounded-md"
          alt={"development"}
        />
      </motion.div>

      <motion.div
        className="description h-[5%] mb-3 w-[90%] md:w-full"
        initial={{ opacity: 0.1, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.1 }}>
        <span className="font-poppins text-sm ">RUNDA | NAIROBI | KE</span>
      </motion.div>
    </div>
  );
};

export default ListingsCard;
