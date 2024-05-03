"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import Logo from "../assets/icons/Logo";

const MobileNavbar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="fixed z-50 opacity-90">
      <div
        className="bg-primary fixed rounded-full top-[2%] right-[2%] h-14 w-14 flex items-center justify-center hover:bg-orange-600 hover:scale-105 cursor-pointer transform transition-all duration-300"
        onClick={toggleMenu}
      >
        <RxHamburgerMenu className="text-white w-6 h-6" />
      </div>

      {menuVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-10 z-0 backdrop-blur-3xl"
          onClick={toggleMenu}
        ></div>
      )}
      {menuVisible && (
        <div
          className={`fixed flex flex-col top-0 right-0 h-full w-2/3 md:w-1/2 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
            menuVisible ? "" : "translate-x-full"
          }`}
        >
          <div className="flex items-center mt-6">
            <Logo width={100} height={50} />
            <div
              className="bg-primary fixed rounded-full top-8 right-8 h-14 w-14 flex items-center justify-center hover:bg-orange-600 hover:scale-105 cursor-pointer transform transition-all duration-300"
              onClick={toggleMenu}
            >
              <AiOutlineClose className="text-white w-6 h-6" />
            </div>
          </div>

          <ul className="flex flex-col gap-2 mt-24 text-xl sm:text-3xl items-center text-primary flex-grow font-semibold">
            <li className="hover:bg-orange-100 p-4 rounded-lg">
              <a href="#us">Nuestra Empresa</a>
            </li>
            <li className="hover:bg-orange-100 p-4 rounded-lg">
              <a href="#action">Areas de Acción</a>
            </li>
            <li className="hover:bg-orange-100 p-4 rounded-lg">
              <a href="#clients">Clientes</a>
            </li>
            <li className="hover:bg-orange-100 p-4 rounded-lg">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
          <div className="flex gap-2 w-full h-20 items-center justify-center flex-grow">
            <a href="tel:+54-11-4775-0832">
              <FaPhoneSquare className="w-10 h-10 text-neutral-900" />
            </a>
            <a href="mailto:info@dhnconstrucciones.com">
              <IoIosMail className="w-12 h-12 text-neutral-900" />
            </a>
            <a
              href="https://www.linkedin.com/company/dhn-desarrolladora-srl/"
              target="_blank"
            >
              <FaLinkedin className="w-10 h-10 text-neutral-900" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
