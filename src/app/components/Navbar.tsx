import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="fixed z-10 top-8 right-8 bg-orange-600 rounded-full h-14 w-14 flex items-center justify-center hover:bg-orange-700 hover:scale-105 cursor-pointer transform transition-all duration-300">
      <RxHamburgerMenu className="text-white w-6 h-6" />
    </div>
  );
};

export default Navbar;
