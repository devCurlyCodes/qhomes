"use client";

import React, { useState } from "react";
import SmallSreenNav from "./Navbars/SmallScreenNav";
import LogoComponent from "./Navbars/LogoComponent";
import BigScreenNav from "./Navbars/BigScreenNav";

const HeaderComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container  mx-30 flex items-center justify-between px-12 z-20 fixed border-b border-t border-gray-100 w-full h-16 py-2 bg-gray-100 ">
      <LogoComponent setIsMenuOpen={setIsMenuOpen} />

      {/* Navigation Menu */}
      <BigScreenNav />

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="block md:hidden text-black-100 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && <SmallSreenNav setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
};

export default HeaderComponents;
