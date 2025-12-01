import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex justify-center bg-white box-border z-20 fixed border-b border-t border-gray-100 w-full h-16 py-2">
      <nav className="  w-full md:w-[90%] lg:w-[80%] px-3 flex flex-row items-center justify-between">
        <div className="logo w-[80%] md:w-1/3 text-4xl font-semibold">
          QHomes
        </div>

        <div className="hidden md:flex md:w-2/3   items-center h-full ">
          <nav className="flex w-[90%] justify-end font-inter h-full items-center">
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
        </div>

        <div className="toggle-button block md:hidden w-[20%] text-center">
          <button
            className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all 
                     hover:black hover:shadow-lg active:scale-95">
            Button
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
