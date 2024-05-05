import Image from "next/image";
import React from "react";
import Bg from "../../../public/home4.jpg";

const Us: React.FC = () => {
  return (
    <div
      className="flex flex-col px-4 md:px-10 lg:px-20 xl:px-40 py-20 gap-10 bg-gradient-to-b from-primary to-black border-t border-slate-200"
      id="us"
    >
      <div className="flex items-start justify-center col-span-1 relative">
        <div className="absolute inline-block bg-secondary -skew-x-6 -skew-y-3 w-80 md:w-96 h-20 -top-5" />
        <h1 className="text-3xl md:text-5xl text-slate-200 font-bold uppercase relative z-10 drop-shadow-lg">
          Nuestra Empresa
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-4">
        <div className="p-2 lg:p-6 ">
          <h3 className="text-orange text-3xl lg:text-4xl font-thin mb-2 uppercase">
            Misión
          </h3>
          <p className="text-slate-200 text-lg lg:text-xl">
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
          <h3 className="text-orange text-3xl lg:text-4xl font-thin mb-2 uppercase">
            Visión
          </h3>
          <p className="text-slate-200 text-lg lg:text-xl">
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
