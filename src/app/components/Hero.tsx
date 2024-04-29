import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bg from "../../../public/home4.jpg";
import Logo from "../../../public/logo.png";
import Atucha from "../../../public/atucha.jpeg";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen grid grid-cols-6  bg-blue-50 overflow-hidden">
      <div className="col-span-4 p-20 flex flex-col items-center justify-center gap-16">
        <Image src={Logo} alt="logo" className="relative" />
        <p className="text-blue-900 text-3xl">
          Somos una empresa de Ingeniería, Construcción y Servicio con fuerte
          compromiso en la satisfacción del cliente y el establecimiento de
          relaciones de largo plazo.
        </p>
        <Link
          href={"/"}
          className="flex gap-2 items-center bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-700 hover:scale-105 cursor-pointer transform transition-all duration-300"
        >
          <span className="text-white text-2xl font-semibold">Contacto</span>
        </Link>
      </div>
      <div className="col-span-2 hidden md:flex">
        <Image
          src={Atucha}
          alt="atucha"
          className="relative bg-contain h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
