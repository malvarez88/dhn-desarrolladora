import React from "react";
import Logo from "../assets/icons/Logo";
import Link from "next/link";

const DesktopNavbar: React.FC = () => {
  return (
    <div className="fixed w-full px-10 py-6 backdrop-blur-sm z-[999]">
      <div className="flex align-center justify-between">
        <div className="bg-black w-auto h-auto p-2 rounded-full">
          <Link href={"/"}>
            <Logo width={20} height={20} />
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-10 text-slate-200 text-lg uppercase">
          <li className="hover:underline hover:scale-105 cursor-pointer">
            <Link href={"/"}>Inicio</Link>
          </li>
          <li className="hover:underline hover:scale-105 cursor-pointer">
            <Link href={"#us"}>Sobre Nosotros</Link>
          </li>
          <li className="hover:underline hover:scale-105 cursor-pointer">
            <Link href={"#proyectos"}>Proyectos</Link>
          </li>
          <li className="hover:underline hover:scale-105 cursor-pointer">
            <Link href={"#contacto"}>Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavbar;
