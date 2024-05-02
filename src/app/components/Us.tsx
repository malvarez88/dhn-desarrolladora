import Image from "next/image";
import React from "react";
import Bg from "../../../public/home4.jpg";

const Us: React.FC = () => {
  return (
    <div className="bg-slate-100 flex flex-col px-40 py-20 relative" id="us">
      <div className="flex flex-col gap-10">
        <div className="h-full w-full rounded-xl  flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-orange">Nuestra Empresa</h1>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-black">Misión</h3>
            <p className="text-black text-xl">
              Ser una empresa líder en el sector de la ingeniería y
              construcción, con un equipo comprometido, evolucionando
              constantemente nuestros servicios para ofrecer soluciones
              innovadores que satisfagan las necesidades de los clientes, con
              altos estándares de calidad, seguridad, cumplimiento, y conciencia
              de servicio al cliente que garanticen solidez de la empresa.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-black">Visión</h3>
            <p className="text-black text-xl">
              Brindar servicios de ingeniería, construcción, y mantenimiento
              contribuyendo así con el éxito de nuestros clientes. Nuestro
              accionar privilegia la calidad, la seguridad y la preservación del
              medio ambiente, desarrollando con nuestros colaboradores las
              mejores prácticas de trabajo y ampliando nuestros conocimientos en
              un grato ambiente laboral.
            </p>
          </div>
        </div>
        {/* <div className="flex items-center justify-center overflow-hidden">
          <Image
            src={Bg}
            alt="atucha"
            className="rounded-xl h-80 object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Us;
