import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Bg from "../../../public/home4.jpg";
import Logo2 from "../assets/icons/Logo2";
import Logo from "../assets/icons/Logo";
import Gradient from "../../../public/gradient.png";
import Atucha from "../../../public/atucha-1.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero: React.FC = () => {
  const heroLogoRef = useRef(null);
  const subtitleRef = useRef(null);
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(heroLogoRef.current, {
      x: 0,
      opacity: 1,
      delay: 1.5,
      duration: 1,
      ease: "power1.out",
    })
      .to(subtitleRef.current, {
        x: 0,
        opacity: 1,
        ease: "power1.out",
      })
      .to([linkRef1.current, linkRef2.current], {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power1.out",
      });
    if (ulRef.current) {
      const liElements = ulRef.current.querySelectorAll("li");
      tl.from(liElements, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.3,
        ease: "power1.out",
      });
    }
  });

  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen bg-black w-full p-6 sm:px-10 md:px-20 lg:p-28">
      <div className="flex z-20 flex-col items-center justify-center gap-8 h-full w-full mt-20 lg:mt-0">
        <div className="lg:-mt-20 opacity-0 translate-x-8" ref={heroLogoRef}>
          <Logo
            width={200}
            height={200}
            // className="w-24 h-18 sm:w-32 sm:h-24 md:w-48 md:h-36 lg:w-64 lg:h-48 xl:w-96 xl:h-80"
          />
        </div>

        <p
          className="text-slate-300 mt-6 text-2xl lg:text-5xl font-thin leading-tigth uppercase tracking-widest text-center translate-x-8 opacity-0"
          ref={subtitleRef}
        >
          Ingeniería, Construcción y Servicios
        </p>

        <div className="flex gap-4 lg:gap-10 mt-6">
          <Link
            href={"#action"}
            className="flex items-center bg-slate-200 border border-primary px-6 py-2 rounded-xl hover:bg-orange hover:scale-105 cursor-pointer transform transition-all duration-300 opacity-0"
            ref={linkRef1}
          >
            <span className="text-primary text-sm uppercase whitespace-nowrap">
              Areas de Accion
            </span>
          </Link>
          <Link
            href={"#contact"}
            className="items-center border border-slate-200 px-6 py-2 rounded-xl hover:bg-orange hover:scale-105 cursor-pointer transform transition-all duration-300 backdrop-blur opacity-0"
            ref={linkRef2}
          >
            <span className="text-slate-100 text-sm uppercase whitespace-nowrap">
              Contacto
            </span>
          </Link>
        </div>
      </div>
      <ul
        className="grid grid-cols-2 lg:flex flex-col lg:flex-row gap-y-4 gap-x-8 items-center justify-between w-full mt-10 lg:mt-28 px-2 xl:px-40 bottom-10 xl:absolute whitespace-nowrap"
        ref={ulRef}
      >
        <li className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold md:mb-2 text-slate-200">
            20 +
          </p>
          <span className="text-sm sm:text-base lg:text-lg text-slate-300">
            Años en el mercado
          </span>
        </li>
        <li className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold md:mb-2 text-slate-200">
            18
          </p>
          <span className="text-sm sm:text-base lg:text-lg text-slate-300">
            Clientes
          </span>
        </li>
        <li className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold md:mb-2 text-slate-200">
            300 +
          </p>
          <span className="text-sm sm:text-base lg:text-lg text-slate-300">
            Proyectos ejecutados
          </span>
        </li>
        <li className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold md:mb-2 text-slate-200">
            30.000.000
          </p>
          <span className="text-sm sm:text-base lg:text-lg text-slate-300">
            Horas por administración
          </span>
        </li>
      </ul>

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
