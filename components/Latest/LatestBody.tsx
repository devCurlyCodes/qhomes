"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const LatestBody = () => {
  return (
    <div className="latestImages w-full md:w-2/3   m-3 flex flex-wrap  justify-center">
      <div className="ImageCard flex flex-wrap flex-col space-x-2 px-5 ">
        <motion.div
          className="div"
          initial={{ opacity: 0.1, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}>
          <Image
            src={"/slidetwo.jpg"}
            height="1000"
            width="1000"
            className="w-72 md:w-80 h-52 md:h-64 object-cover my-5"
            alt={"development"}
          />
        </motion.div>

        <motion.div
          className="description"
          initial={{ opacity: 0.1, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: 0.1 }}>
          <span className="font-poppins text-sm ">RUNDA | NAIROBI | KE</span>
        </motion.div>
      </div>
      <motion.div
        className="ImageCard flex flex-wrap flex-col space-x-2 px-5"
        initial={{ opacity: 0.1, x: +100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}>
        <Image
          src={"/slidethree.jpg"}
          height="1000"
          width="1000"
          className="w-72 md:w-80 h-52 md:h-64 object-cover my-5"
          alt={"development"}
        />

        <motion.div
          className="description"
          initial={{ opacity: 0.1, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.1 }}>
          <span className="font-poppins text-sm ">RUNDA | NAIROBI | KE</span>
        </motion.div>
      </motion.div>
      <div className="ImageCard flex flex-wrap flex-col space-x-2 px-5">
        <motion.div
          className="div"
          initial={{ opacity: 0.1, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}>
          <Image
            src={"/slidefour.jpg"}
            height="1000"
            width="1000"
            className="w-72 md:w-80 h-52 md:h-64 object-cover my-5"
            alt={"development"}
          />
        </motion.div>

        <motion.div
          className="description"
          initial={{ opacity: 0.1, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: 0.1 }}>
          <span className="font-poppins text-sm ">RUNDA | NAIROBI | KE</span>
        </motion.div>
      </div>
      <div className="ImageCard flex flex-wrap flex-col space-x-2 px-5">
        <motion.div
          className="div"
          initial={{ opacity: 0.1, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.1,
          }}>
          <Image
            src={"/slideone.jpg"}
            height="1000"
            width="1000"
            className="w-72 md:w-80 h-52 md:h-64 object-cover my-5"
            alt={"development"}
          />
        </motion.div>

        <motion.div
          className="description"
          initial={{ opacity: 0.1, x: +100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.1 }}>
          <span className="font-poppins text-sm ">RUNDA | NAIROBI | KE</span>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestBody;
