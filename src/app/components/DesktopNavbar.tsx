import React, { useRef } from "react";
import Logo from "../assets/icons/Logo";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DesktopNavbar: React.FC = () => {
  const logoRef = useRef(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      logoRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, ease: "power1.out" }
    );
    if (ulRef.current) {
      const liElements = ulRef.current.querySelectorAll("li");
      gsap.from(liElements, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        ease: "power1.out",
        delay: 0.5,
      });
    }
  });

  return (
    <div className="fixed w-full px-10 py-4 backdrop-blur-sm z-[999]">
      <div className="flex align-center justify-between">
        <div
          className="bg-slate-200 w-auto h-auto p-2 rounded-full"
          ref={logoRef}
        >
          <Link href={"/"}>
            <Logo width={25} height={25} />
          </Link>
        </div>
        <ul
          className="flex items-center justify-center gap-10 text-slate-200 text-base uppercase"
          ref={ulRef}
        >
          <li className="hover:underline hover:scale-105 cursor-pointer">
            <Link href={"/"}>Inicio</Link>
          </li>
          <li className="hover:underline hover:scale-105 cursor-pointer">
            <Link href={"#us"}>Sobre Nosotros</Link>
          </li>
          <li className="hover:underline hover:scale-105 cursor-pointer">
            <Link href={"#action"}>Servicios</Link>
          </li>
          <li className="hover:underline hover:scale-105 cursor-pointer">
            <Link href={"#contact"}>Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavbar;
