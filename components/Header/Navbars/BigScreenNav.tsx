import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const BigScreenNav = () => {
  return (
    <motion.div
      className="log"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }} // Trigger when 50% of the item is in the viewport
      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }} // Add delay for staggered animation
    >
      <nav className="hidden md:flex space-x-4 h-[12vh] w-[60vw] items-center justify-center  font-inter">
        <Link
          href="/developments"
          className="text-gray-700 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
          DEVELOPMENTS
        </Link>

        <Link
          href="/#listings"
          className="text-gray-700 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
          BUY
        </Link>

        <Link
          href="/#listings"
          className="text-gray-700 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
          RENT
        </Link>

        <Link
          href="/insights"
          className="text-gray-700 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
          INSIGHTS
        </Link>

        <Link
          href="/contact"
          className="text-gray-700 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
          CONTACT
        </Link>
      </nav>
    </motion.div>
  );
};

export default BigScreenNav;
