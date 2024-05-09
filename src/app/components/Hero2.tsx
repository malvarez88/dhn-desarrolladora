import React, { useRef } from "react";
import Image from "next/image";
import Atucha from "../../../public/atucha-1.jpg";
import Logo2 from "../assets/icons/Logo2";
import Logo from "../assets/icons/Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero2: React.FC = () => {
  const imgRef = useRef(null);
  const imgContainerRef = useRef(null);
  const contentRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(contentRef.current, {
      opacity: 0,
      y: -400,
      duration: 4,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 30%",
        end: "bottom bottom",
        // markers: true,
        scrub: true,
      },
    });

    tl.to(imgContainerRef.current, {
      position: "fixed",
      ease: "power1.inOut",
      top: "30px",
      scrollTrigger: {
        trigger: imgContainerRef.current,
        start: "-30px top",
        end: "110px bottom",
        scrub: true,
        markers: true,
      },
    });
    tl.to(imgRef.current, {
      scale: 1.2,
      duration: 1.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 30%",
        end: "bottom bottom",
        // markers: true,
        pin: imgRef.current,
        scrub: true,
      },
    });
  });
  return (
    <div className="flex flex-col items-center h-[150vh] bg-gradient-to-b from-black to-primary w-full pt-20 p-6 sm:px-10 md:px-20 overflow-hidden">
      <div
        className="flex flex-col items-center justify-center mt-20 w-full opacity-100 mb-20"
        ref={contentRef}
      >
        <h1 className="text-transparent text-6xl font-bold bg-gradient-to-b from-primary to-secondary bg-clip-text">
          DHN CONSTRUCCIONES
        </h1>
        <p
          className="text-slate-300 mt-6 text-2xl lg:text-4xl font-medium leading-tigth uppercase tracking-widest opacity-1"
          // ref={subtitleRef}
        >
          Ingeniería, Construcción y Servicios
        </p>
        <ul
          className="grid grid-cols-2 lg:flex flex-col lg:flex-row gap-y-4 gap-x-8 items-center justify-between w-full mt-10 px-2 xl:px-40 whitespace-nowrap relative z-[100]"
          //   ref={ulRef}
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
      </div>

      <div
        className="opacity-50 w-full h-auto flex items-center justify-center rounded-xl"
        ref={imgContainerRef}
      >
        <Image
          src={Atucha}
          alt="atucha"
          ref={imgRef}
          className="rounded-xl mt-20"
        />
      </div>
    </div>
  );
};

export default Hero2;
