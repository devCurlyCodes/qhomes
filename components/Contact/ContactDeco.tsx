"use client";
import { motion } from "framer-motion";
const ContactDeco = () => {
  return (
    <div className="aMessageA min-h-[50vh] md:min-h-[70vh] w-full flex flex-col items-center justify-center text-white">
      <motion.h1
        className="font-inter font-medium md:my-5 text-2xl md:text-3xl"
        initial={{ opacity: 0.1, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}>
        WE ARE A MESSAGE AWAY
      </motion.h1>
      <div className="info flex flex-col items-start my-5 md:my-10 text-xl md:text-3xl">
        <motion.span
          className="font-thin font-inter "
          initial={{ opacity: 0.1, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}>
          Talk to us now and
        </motion.span>
        <motion.span
          className="font-light font-inter my-1"
          initial={{ opacity: 0.1, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}>
          Find Your Perfect Home{" "}
        </motion.span>
      </div>
    </div>
  );
};

export default ContactDeco;
