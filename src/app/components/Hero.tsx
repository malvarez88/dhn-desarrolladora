import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bg from "../../../public/home4.jpg";

import Atucha from "../../../public/atucha.jpeg";
import Logo2 from "../assets/icons/Logo2";
import Logo from "../assets/icons/Logo";

const Hero: React.FC = () => {
  return (
    <div className="h-screen grid grid-cols-6 bg-black" id="home">
      {/* <div>
        
      </div> */}
      <div className="col-span-4 p-20 flex flex-col items-start justify-center gap-16">
        <Logo2 width={300} height={300} />
        <p className="text-white text-8xl font-bold leading-tigth">
          Ingeniería, Construcción y Servicio
          {/* con fuerte
          compromiso en la satisfacción del cliente y el establecimiento de
          relaciones de largo plazo. */}
        </p>
        <Link
          href={"#contact"}
          className="flex gap-2 items-center bg-primary px-5 py-2.5 rounded-full hover:bg-orange-600 hover:scale-105 cursor-pointer transform transition-all duration-300"
        >
          <span className="text-white text-2xl font-semibold">Contacto</span>
        </Link>
      </div>
      <div className="col-span-2 hidden xl:flex overflow-hidden">
        <Image
          src={Atucha}
          alt="atucha"
          className="relative object-cover bg-center h-full mask-gradient"
        />
      </div>
    </div>
  );
};

export default Hero;
