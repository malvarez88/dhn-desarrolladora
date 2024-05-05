import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bg from "../../../public/home4.jpg";

import Logo2 from "../assets/icons/Logo2";
import Logo from "../assets/icons/Logo";
import Gradient from "../../../public/gradient.png";
import Atucha from "../../../public/atucha-1.jpg";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen bg-black w-full p-6 sm:px-10 md:px-20 lg:p-28">
      <div className="flex z-20 flex-col items-center justify-center gap-8 h-full w-full mt-20 lg:mt-0">
        <div className="lg:-mt-20">
          <Logo
            width={200}
            height={200}
            // className="w-24 h-18 sm:w-32 sm:h-24 md:w-48 md:h-36 lg:w-64 lg:h-48 xl:w-96 xl:h-80"
          />
        </div>

        <p className="text-slate-300 mt-6 text-2xl lg:text-5xl font-thin leading-tigth uppercase tracking-widest text-center">
          Ingeniería, Construcción y Servicios
        </p>

        <div className="flex gap-4 lg:gap-10 mt-6">
          <Link
            href={"#action"}
            className="flex items-center bg-slate-200 border border-primary px-6 py-2 rounded-xl hover:bg-orange hover:scale-105 cursor-pointer transform transition-all duration-300"
          >
            <span className="text-primary text-sm uppercase whitespace-nowrap">
              Areas de Accion
            </span>
          </Link>
          <Link
            href={"#contact"}
            className="items-center border border-slate-200 px-6 py-2 rounded-xl hover:bg-orange hover:scale-105 cursor-pointer transform transition-all duration-300 backdrop-blur"
          >
            <span className="text-slate-100 text-sm uppercase whitespace-nowrap">
              Contacto
            </span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:flex flex-col lg:flex-row gap-y-4 gap-x-8 items-center justify-between w-full mt-10 lg:mt-28 px-2 xl:px-40 bottom-10 xl:absolute whitespace-nowrap">
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold md:mb-2 text-slate-200">
            20 +
          </p>
          <span className="text-sm sm:text-base lg:text-lg text-slate-300">
            Años en el mercado
          </span>
        </div>
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold md:mb-2 text-slate-200">
            18
          </p>
          <span className="text-sm sm:text-base lg:text-lg text-slate-300">
            Clientes
          </span>
        </div>
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold md:mb-2 text-slate-200">
            300 +
          </p>
          <span className="text-sm sm:text-base lg:text-lg text-slate-300">
            Proyectos ejecutados
          </span>
        </div>
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold md:mb-2 text-slate-200">
            30.000.000
          </p>
          <span className="text-sm sm:text-base lg:text-lg text-slate-300">
            Horas por administración
          </span>
        </div>
      </div>

      <Image
        src={Atucha}
        alt="hero-bg"
        priority
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-30 grayscale pointer-events-none z-1 bg-cover bg-center"
      />
    </div>
  );
};

export default Hero;
