"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";

const Navbar = () => {
  // Estado para controlar la visibilidad del menú
  const [menuVisible, setMenuVisible] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="fixed z-10">
      <div
        className="bg-orange-600 fixed rounded-full top-8 right-8 h-14 w-14 flex items-center justify-center hover:bg-orange-700 hover:scale-105 cursor-pointer transform transition-all duration-300"
        onClick={toggleMenu}
      >
        <RxHamburgerMenu className="text-white w-6 h-6" />
      </div>

      {menuVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-0 backdrop-blur-3xl"
          onClick={toggleMenu}
        ></div>
      )}
      {menuVisible && (
        <div
          className={`fixed flex flex-col top-0 right-0 h-full w-1/4 bg-blue-50 shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
            menuVisible ? "" : "translate-x-full"
          }`}
        >
          <div
            className="bg-orange-600 fixed rounded-full top-8 right-8 h-14 w-14 flex items-center justify-center hover:bg-orange-700 hover:scale-105 cursor-pointer transform transition-all duration-300"
            onClick={toggleMenu}
          >
            <AiOutlineClose className="text-white w-6 h-6" />
          </div>
          <ul className="flex flex-col gap-2 mt-24 text-3xl items-center text-blue-950 uppercase flex-grow">
            <li className="hover:bg-orange-100 p-4 rounded-lg">
              <a href="#">Nuestra Empresa</a>
            </li>
            <li className="hover:bg-orange-100 p-4 rounded-lg">
              <a href="#">Areas de Acción</a>
            </li>
            <li className="hover:bg-orange-100 p-4 rounded-lg">
              <a href="#">Cliente</a>
            </li>
            <li className="hover:bg-orange-100 p-4 rounded-lg">
              <a href="#">Contacto</a>
            </li>
          </ul>
          <div className="flex gap-2 w-full h-20 items-center justify-center flex-grow">
            <a href="mailto:info@dhnconstrucciones.com">
              <IoIosMail className="w-12 h-12 text-blue-950" />
            </a>

            <a href="tel:+54-11-4775-0832">
              <FaPhoneSquare className="w-10 h-10 text-blue-950" />
            </a>
            <a
              href="https://www.linkedin.com/company/dhn-desarrolladora-srl/"
              target="_blank"
            >
              <FaLinkedin className="w-10 h-10 text-blue-950" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
