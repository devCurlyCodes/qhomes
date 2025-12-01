"use client";
import { motion } from "framer-motion";
const LocationBody = () => {
  return (
    <motion.div
      className="located h-full w-[90%] md:w-[80%] "
      initial={{ opacity: 0.1, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7799518662123!2d36.83093007448316!3d-1.3072126356483196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1106648dea1d%3A0xe3742c7260e8d96d!2sMater%20Hospital!5e0!3m2!1sen!2ske!4v1739293710145!5m2!1sen!2ske"
        width="600"
        height="450"
        className="border:1 shadow-md w-full rounded-lg"
        loading="lazy"></iframe>
    </motion.div>
  );
};

export default LocationBody;
