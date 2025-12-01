import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type MenuActionProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

const SmallSreenNav = ({ setIsMenuOpen }: MenuActionProps) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }} // Trigger when 50% of the item is in the viewport
      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }} // Add delay for staggered animation
      className="absolute top-16 left-0 flex flex-wrap w-full bg-gray-100 bg-opacity-95 shadow-lg md:hidden z-50 px-10">
      <nav className="flex flex-col space-y-4 px-6 py-4 font-poppins">
        <motion.div
          initial={{ opacity: 0.5, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}>
          <Link
            href="/developments"
            onClick={handleLinkClick}
            className="text-black-100 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
            DEVELOPMENTS
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}>
          <Link
            href="/#listings"
            onClick={handleLinkClick}
            className="text-black-100 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
            BUY
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}>
          <Link
            href="/#listings"
            onClick={handleLinkClick}
            className="text-black-100 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
            RENT
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, ease: "easeInOut", delay: 0.4 }}>
          <Link
            href="/insights"
            onClick={handleLinkClick}
            className="text-black-100 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
            INSIGHTS
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}>
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="text-black-100 border-b-2 text-sm border-transparent rounded-lg h-7 flex items-center px-5 
               transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
            CONTACT
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default SmallSreenNav;
