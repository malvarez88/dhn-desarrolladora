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
  //   useGSAP(() => {
  //     const tl = gsap.timeline();
  //     tl.to(imgContainerRef.current, {
  //       position: "fixed",
  //       ease: "power1.out",
  //       top: 0,
  //       scrollTrigger: {
  //         trigger: imgContainerRef.current,
  //         start: "top top",
  //         end: "bottom bottom",
  //       },
  //     });

  //     tl.to(imgRef.current, {
  //       scale: 1.4,
  //       duration: 1,
  //       ease: "power1.out",
  //       scrollTrigger: {
  //         trigger: imgRef.current,
  //         start: "top 20%",
  //         end: "150vh top",
  //         markers: true,
  //         scrub: 1,
  //       },
  //     });
  //   });
  return (
    <div className="flex flex-col items-center  h-[200vh] bg-black w-full pt-20 p-6 sm:px-10 md:px-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center mt-20 w-full">
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
          className="grid grid-cols-2 lg:flex flex-col lg:flex-row gap-y-4 gap-x-8 items-center justify-between w-full mt-10 px-2 xl:px-40 whitespace-nowrap relative z-10"
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
        className="opacity-40 w-full h-full flex items-center justify-center"
        ref={imgContainerRef}
      >
        <div>
          <Image
            src={Atucha}
            alt="atucha"
            ref={imgRef}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
