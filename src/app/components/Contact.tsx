import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div
      className="bg-black py-20 grid items-center justify-center gap-10 grid-cols-1 lg:grid-cols-2 px-10 lg:px-20 xl:px-40"
      id="contact"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl lg:text-6xl uppercase font-bold text-slate-200">
          Contacto
        </h1>
        <div className="flex flex-col gap-4">
          <span className="text-slate-300">
            Angel J. Carranza 2139, CABA - Argentina
          </span>
          <span className="text-slate-300">+54 9 11 4775-0832</span>
        </div>
      </div>

      <div className="flex flex-col h-full items-start justify-center gap-4">
        <a
          href="https://www.linkedin.com/company/dhn-desarrolladora-srl/"
          target="_blank"
          className="flex gap-4 items-center justify-center"
        >
          <FaLinkedin className="w-8 h-10 text-white" />
          <span className="text-xl text-slate-200">Linkedin</span>
        </a>
        <a
          href="mailto:info@dhnconstrucciones.com"
          className="flex gap-4 items-center justify-center"
        >
          <IoIosMail className="w-10 h-10 text-white" />
          <span className="text-xl text-slate-200">E-mail</span>
        </a>
        <a
          href="tel:+54-11-4775-0832"
          className="flex gap-4 items-center justify-center"
        >
          <FaPhoneSquare className="w-8 h-10 text-white" />
          <span className="text-xl text-slate-200">Telefono</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
