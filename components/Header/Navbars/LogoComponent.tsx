import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type MenuActionProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

const LogoComponent = ({ setIsMenuOpen }: MenuActionProps) => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      className="log   flex flex-row space-x-1 items-center  md:w-1/4  justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger when 50% of the item is in the viewport
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }} // Add delay for staggered animation
    >
      <Link href="/">
        <Image
          className="cursor-pointer"
          width={40}
          height={40}
          src="/logo1.png"
          alt=""
        />
      </Link>
      <Link
        href="/"
        onClick={handleLinkClick}
        className="hidden md:block text-2xl font-bold text-gray-900">
        Qolani Homes
      </Link>
    </motion.div>
  );
};

export default LogoComponent;
