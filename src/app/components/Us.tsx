import Image from "next/image";
import React, { useRef } from "react";
import Bg from "../../../public/home4.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Us: React.FC = () => {
  const usTitleRef = useRef(null);
  const divRef = useRef<HTMLDivElement>(null);
  const missionTitleRef = useRef<HTMLHeadingElement>(null);
  const missionParagraphRef = useRef<HTMLParagraphElement>(null);
  const visionTitleRef = useRef<HTMLHeadingElement>(null);
  const visionParagraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(usTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: usTitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });
    gsap.from(missionTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: missionTitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });
    gsap.from(missionParagraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: missionParagraphRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });
    gsap.from(visionTitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      delay: 0.6,
      scrollTrigger: {
        trigger: visionTitleRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });
    gsap.from(visionParagraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      delay: 0.8,
      scrollTrigger: {
        trigger: visionParagraphRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });
  });

  return (
    <div
      className="flex flex-col px-4 md:px-10 lg:px-20 xl:px-40 py-20 gap-10 bg-gradient-to-b from-primary to-black border-t border-slate-200 relative z-50"
      id="us"
    >
      <div className="flex items-start justify-center col-span-1 relative">
        <div
          className="absolute inline-block bg-secondary -skew-x-6 -skew-y-3 w-80 md:w-96 h-20 -top-5"
          ref={divRef}
        />
        <h1
          className="text-3xl md:text-5xl text-slate-200 font-bold uppercase relative z-10 drop-shadow-lg"
          ref={usTitleRef}
        >
          Nuestra Empresa
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-4">
        <div className="p-2 lg:p-6 ">
          <h3
            className="text-orange text-3xl lg:text-4xl font-thin mb-2 uppercase"
            ref={missionTitleRef}
          >
            Misión
          </h3>
          <p
            className="text-slate-200 text-lg lg:text-xl"
            ref={missionParagraphRef}
          >
            Ser una empresa líder en el sector de la ingeniería y construcción,
            con un equipo comprometido, evolucionando constantemente nuestros
            servicios para ofrecer soluciones innovadores que satisfagan las
            necesidades de los clientes, con altos estándares de calidad,
            seguridad, cumplimiento, y conciencia de servicio al cliente que
            garanticen solidez de la empresa.
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="border-l border-secondary h-60"></div>
        </div>
        <div className="p-2 lg:p-6">
          <h3
            className="text-orange text-3xl lg:text-4xl font-thin mb-2 uppercase"
            ref={visionTitleRef}
          >
            Visión
          </h3>
          <p
            className="text-slate-200 text-lg lg:text-xl"
            ref={visionParagraphRef}
          >
            Brindar servicios de ingeniería, construcción, y mantenimiento
            contribuyendo así con el éxito de nuestros clientes. Nuestro
            accionar privilegia la calidad, la seguridad y la preservación del
            medio ambiente, desarrollando con nuestros colaboradores las mejores
            prácticas de trabajo y ampliando nuestros conocimientos en un grato
            ambiente laboral.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Us;
