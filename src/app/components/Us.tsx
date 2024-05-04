import Image from "next/image";
import React from "react";
import Bg from "../../../public/home4.jpg";

const Us: React.FC = () => {
  return (
    // <div
    //   className="bg-slate-100 flex flex-col px-6 sm:px-10 lg:px-20 xl:px-40 py-20 relative"
    //   id="us"
    // >
    //   <div className="flex flex-col gap-10">
    //     <div className="h-full w-full rounded-xl  flex flex-col gap-8">
    //       <h1 className="text-3xl font-bold text-orange">Nuestra Empresa</h1>
    //       <div>
    //         <h3 className="text-3xl font-bold mb-4 text-black">Misión</h3>
    //         <p className="text-black text-base lg:text-xl">
    //           Ser una empresa líder en el sector de la ingeniería y
    //           construcción, con un equipo comprometido, evolucionando
    //           constantemente nuestros servicios para ofrecer soluciones
    //           innovadores que satisfagan las necesidades de los clientes, con
    //           altos estándares de calidad, seguridad, cumplimiento, y conciencia
    //           de servicio al cliente que garanticen solidez de la empresa.
    //         </p>
    //       </div>
    //       <hr className="border border-slate-200 w-full" />
    //       <div>
    //         <h3 className="text-3xl font-bold mb-4 text-black">Visión</h3>
    //         <p className="text-black text-base lg:text-xl">
    //           {" "}
    //           Brindar servicios de ingeniería, construcción, y mantenimiento
    //           contribuyendo así con el éxito de nuestros clientes. Nuestro
    //           accionar privilegia la calidad, la seguridad y la preservación del
    //           medio ambiente, desarrollando con nuestros colaboradores las
    //           mejores prácticas de trabajo y ampliando nuestros conocimientos en
    //           un grato ambiente laboral.
    //         </p>
    //       </div>
    //     </div>
    //     {/* <div className="flex items-center justify-center overflow-hidden">
    //       <Image
    //         src={Bg}
    //         alt="atucha"
    //         className="rounded-xl h-80 object-cover"
    //       />
    //     </div> */}
    //   </div>
    // </div>
    <div
      className="flex flex-col px-10 lg:px-20 xl:px-40 py-20 gap-10 bg-gradient-to-b from-primary to-black border-t border-slate-200"
      id="us"
    >
      <div className="flex items-start justify-center col-span-1">
        <h1 className="text-5xl text-slate-200 font-bold uppercase">
          Nuestra Empresa
        </h1>
      </div>
      {/* <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full px-2 xl:px-40">
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold mb-2 text-slate-200">
            20 +
          </p>
          <span className="text-base lg:text-lg text-slate-300">
            Años en el mercado
          </span>
        </div>
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold mb-2 text-slate-200">
            18
          </p>
          <span className="text-base lg:text-lg text-slate-300">Clientes</span>
        </div>
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold mb-2 text-slate-200">
            300 +
          </p>
          <span className="text-base lg:text-lg text-slate-300">
            Proyectos ejecutados
          </span>
        </div>
        <div className="flex flex-col items-center justify-center border-b border-slate-200 pb-2">
          <p className="text-xl lg:text-2xl font-bold mb-2 text-slate-200">
            30.000.000
          </p>
          <span className="text-base lg:text-lg text-slate-300">
            Horas por administración
          </span>
        </div>
      </div> */}
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
