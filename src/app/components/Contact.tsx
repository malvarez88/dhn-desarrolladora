import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div
      className="bg-neutral-800 p-20 flex flex-col items-center justify-center gap-10"
      id="contact"
    >
      <h1 className="text-4xl font-bold text-white">Contacto</h1>
      <div className="flex gap-8">
        <a
          href="https://www.linkedin.com/company/dhn-desarrolladora-srl/"
          target="_blank"
        >
          <FaLinkedin className="w-10 h-10 text-white" />
        </a>
        <a href="mailto:info@dhnconstrucciones.com">
          <IoIosMail className="w-10 h-12 text-white" />
        </a>
        <a href="tel:+54-11-4775-0832">
          <FaPhoneSquare className="w-10 h-10 text-white" />
        </a>
      </div>
      <div className="text-white">Angel J. Carranza 2139, CABA - Argentina</div>
    </div>
  );
};

export default Contact;
