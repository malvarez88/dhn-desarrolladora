import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bg from "../../../public/home4.jpg";
import Logo from "../../../public/logo.png";
import Atucha from "../../../public/atucha.jpeg";

const Hero: React.FC = () => {
  return (
    <div className="h-screen grid grid-cols-6 bg-neutral-900" id="home">
      {/* <div>
        
      </div> */}
      <div className="col-span-4 p-20 flex flex-col items-center justify-center gap-16">
        <Image src={Logo} alt="logo" className="relative" width={600} />
        <p className="text-neutral-100 text-2xl text-center px-8">
          Somos una empresa de Ingeniería, Construcción y Servicio con fuerte
          compromiso en la satisfacción del cliente y el establecimiento de
          relaciones de largo plazo.
        </p>
        <Link
          href={"#contact"}
          className="flex gap-2 items-center bg-orange-600 px-5 py-2.5 rounded-full hover:bg-orange-700 hover:scale-105 cursor-pointer transform transition-all duration-300"
        >
          <span className="text-neutral-100 text-2xl font-semibold">
            Contacto
          </span>
        </Link>
      </div>
      <div className="col-span-2 hidden md:flex py-4 overflow-hidden">
        <Image
          src={Atucha}
          alt="atucha"
          className="relative object-cover bg-center h-full rounded-s-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
