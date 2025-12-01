"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ConstructionLeft = () => {
  return (
    <div className="latestImages w-full md:w-1/3   flex flex-wrap  justify-center   min-h-[90vh]">
      <div className="ImageCard flex  flex-col space-x-2 md:px-5   h-full ">
        <motion.div
          className="div"
          initial={{ opacity: 0.1, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, ease: "easeInOut", delay: 0.1 }}>
          <Image
            src={"/construction.jpg"}
            height="1000"
            width="1000"
            className="w-72 md:w-full h-[83vh] object-cover my-5"
            alt={"development"}
          />
        </motion.div>

        <motion.div
          className="description h-[5%] "
          initial={{ opacity: 0.1, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.1 }}>
          <span className="font-poppins text-sm ">RUNDA | NAIROBI | KE</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ConstructionLeft;
