import Image from "next/image";
import React from "react";
import Bg from "../../../public/home4.jpg";

const Us = () => {
  return (
    <div className="bg-blue-950 flex flex-col p-20">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1 shadow-lg h-full w-full rounded-xl p-10 flex flex-col gap-8 bg-blue-50">
          <h1 className="text-2xl font-bold text-orange-600">
            Nuestra Empresa
          </h1>
          <div>
            <h3 className="text-5xl font-bold mb-4 text-blue-800">Misión</h3>
            <p className="text-blue-950 text-xl">
              Ser una empresa líder en el sector de la ingeniería y
              construcción, con un equipo comprometido, evolucionando
              constantemente nuestros servicios para ofrecer soluciones
              innovadores que satisfagan las necesidades de los clientes, con
              altos estándares de calidad, seguridad, cumplimiento, y conciencia
              de servicio al cliente que garanticen solidez de la empresa.
            </p>
          </div>
          <div>
            <h3 className="text-5xl font-bold mb-4 text-blue-800">Visión</h3>
            <p className="text-blue-950 text-xl">
              Brindar servicios de ingeniería, construcción, y mantenimiento;
              contribuyendo así con el éxito de nuestros clientes. Nuestro
              accionar privilegia la calidad, la seguridad y la preservación del
              medio ambiente, desarrollando con nuestros colaboradores las
              mejores prácticas de trabajo y ampliando nuestros conocimientos en
              un grato ambiente laboral.
            </p>
          </div>
        </div>
        <div className="col-span-1 shadow-lg h-full w-full rounded-xl p-10 flex flex-col gap-10 bg-blue-50 items-center">
          <Image src={Bg} alt="us" className="rounded-lg bg-cover h-80" />
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
            <div className="bg-slate-50 p-4 shadow-md rounded-lg">
              <p className="text-3xl font-bold mb-2 text-orange-600">20</p>
              <span className="text-md">Años en el mercado</span>
            </div>
            <div className="bg-slate-50 p-4 shadow-md rounded-lg">
              <p className="text-3xl font-bold mb-2 text-orange-600">18</p>
              <span className="text-md">Clientes</span>
            </div>
            <div className="bg-slate-50 p-4 shadow-md rounded-lg">
              <p className="text-3xl font-bold mb-2 text-orange-600">+ 200</p>
              <span className="text-md">Proyectos ejecutados</span>
            </div>
            <div className="bg-slate-50 p-4 shadow-md rounded-lg">
              <p className="text-3xl font-bold mb-2 text-orange-600">
                22.000.000
              </p>
              <span className="text-md">Horas por administración</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
