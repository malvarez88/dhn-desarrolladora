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
    <div className="flex items-center justify-center h-screen bg-black w-full">
      <div className="flex absolute z-20 flex-col items-center justify-start pt-36 gap-16 h-full">
        <Logo2 className="w-24 h-18 sm:w-32 sm:h-24 md:w-48 md:h-36 lg:w-64 lg:h-48 xl:w-96 xl:h-80" />
        <p className="text-slate-300 text-2xl lg:text-4xl font-bold leading-tigth">
          Ingeniería, Construcción y Servicios
        </p>
        <div className="flex gap-10">
          <Link
            href={"#action"}
            className="flex gap-2 items-center bg-primary border border-primary px-6 py-2 rounded-xl hover:bg-orange hover:scale-105 cursor-pointer transform transition-all duration-300"
          >
            <span className="text-slate-100 text-lg">Proyectos</span>
          </Link>
          <Link
            href={"#contact"}
            className="flex gap-2 items-center border border-slate-200 px-6 py-2 rounded-xl hover:bg-orange hover:scale-105 cursor-pointer transform transition-all duration-300 backdrop-blur"
          >
            <span className="text-slate-200 text-lg">Contacto</span>
          </Link>
        </div>
      </div>
      <div className="lg:flex grid grid-cols-2 gap-4 items-center justify-between w-full absolute bottom-4 lg:bottom-16 px-2 lg:px-40">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl lg:text-3xl font-bold mb-2 text-slate-200">
            20 +
          </p>
          <span className="text-lg lg:text-xl text-slate-300">
            Años en el mercado
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl lg:text-3xl font-bold mb-2 text-slate-200">
            18
          </p>
          <span className="text-lg lg:text-xl text-slate-300">Clientes</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl lg:text-3xl font-bold mb-2 text-slate-200">
            300 +
          </p>
          <span className="text-lg lg:text-xl text-slate-300">
            Proyectos ejecutados
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl lg:text-3xl font-bold mb-2 text-slate-200">
            30.000.000
          </p>
          <span className="text-lg lg:text-xl text-slate-300">
            Horas por administración
          </span>
        </div>
      </div>

      <Image
        src={Atucha}
        alt="hero-bg"
        className="absolute w-full h-full opacity-10 pointer-events-none rounded-b-2xl z-1"
      />
    </div>
  );
};

export default Hero;

{
  /* <div class="bg-cover bg-center h-screen" 
         style="background-image: url('your-image-url.jpg');">
  <!-- Your content here -->
</div> */
}
