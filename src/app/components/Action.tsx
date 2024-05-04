// import React from "react";
// import Link from "next/link";
// import { FaRegBuilding } from "react-icons/fa";
// import { FaIndustry } from "react-icons/fa";
// import { FaSatelliteDish } from "react-icons/fa";
// import { FaRoad } from "react-icons/fa";
// import { MdLocalFireDepartment } from "react-icons/md";
// import { FaTree } from "react-icons/fa";
// import { FaTools } from "react-icons/fa";

// const ActionAreas = [
//   {
//     name: "Servicios",
//     info: "Provision de mano de obra, equipos y herramientas para ejecucion de sercivicios a la industria de la construccion, energia y O&G",
//     icon: <FaTools className="text-orange h-6 w-6" />,
//   },

//   {
//     name: "Energías Convencionales",
//     info: "Ejecución EPC de Centrales de generación térmica en centrales nuclears",
//     icon: <MdLocalFireDepartment className="text-orange h-6 w-6" />,
//   },
//   {
//     name: "Energías Renovables",
//     info: "Construccion de proyectos de energia eolica y fotovoltaica",
//     icon: <FaTree className="text-orange h-6 w-6 " />,
//   },
//   {
//     name: "Arquitectura",
//     info: "Diseño y Construcción de edificios, barrios de viviendas, instalaciones deportivas y educacionales.",
//     icon: <FaRegBuilding className="text-orange h-6 w-6" />,
//   },
//   {
//     name: "Proyectos Industriales",
//     info: "Ejecución EPC de centrales de generación térmica en centrales nucleares",
//     icon: <FaIndustry className="text-orange h-6 w-6" />,
//   },
//   {
//     name: "Infraestructura Vial",
//     info: "Construccion de proyectos de infraestructura vial",
//     icon: <FaRoad className="text-orange h-6 w-6" />,
//   },
//   {
//     name: "Telecomunicaciones",
//     info: "Obras de planta externa, edificios para centrales, redes de fibra óptica",
//     icon: <FaSatelliteDish className="text-orange ite h-6 w-6" />,
//   },
// ];
// //TODO: Chequear ortografia, tildes y eso!

// const Action: React.FC = () => {
//   return (
//     <div
//       className="h-full bg-black flex flex-col items-center overflow-hidden p-20 gap-10"
//       id="action"
//     >
//       <h1 className="text-primary text-7xl font-bold uppercase">
//         Areas de Acción
//       </h1>
//       <div className="w-full mt-10 flex gap-10 flex-wrap items-between justify-around self-start">
//         {ActionAreas.map((action) => (
//           <div
//             key={action?.name}
//             className="max-w-sm text-left flex flex-col items-start justify-center gap-2 border-l border-slate-200"
//           >
//             <Link href={"/"}>
//               <div className="ml-4 mb-4">{action?.icon}</div>
//               <div className="ml-4">
//                 <p className="text-white text-4xl font-bold uppercase">
//                   {action?.name}
//                 </p>
//                 <span className="text-slate-200 text-lg font-thin max-w-sm">
//                   {action?.info}
//                 </span>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Action;

import React from "react";
import Link from "next/link";
import {
  FaRegBuilding,
  FaIndustry,
  FaSatelliteDish,
  FaRoad,
  FaTree,
  FaTools,
} from "react-icons/fa";
import { MdLocalFireDepartment } from "react-icons/md";

const ActionAreas = [
  {
    name: "Servicios",
    info: "Provisión de mano de obra, equipos y herramientas para ejecución de servicios a la industria de la construcción, energía y O&G",
    icon: <FaTools className="text-orange h-6 w-6" />,
  },
  {
    name: "Energías Convencionales",
    info: "Ejecución EPC de Centrales de generación térmica en centrales nucleares",
    icon: <MdLocalFireDepartment className="text-orange h-6 w-6" />,
  },
  {
    name: "Energías Renovables",
    info: "Construcción de proyectos de energía eólica y fotovoltaica",
    icon: <FaTree className="text-orange h-6 w-6" />,
  },
  {
    name: "Arquitectura",
    info: "Diseño y construcción de edificios, barrios de viviendas, instalaciones deportivas y educacionales.",
    icon: <FaRegBuilding className="text-orange h-6 w-6" />,
  },
  {
    name: "Proyectos Industriales",
    info: "Ejecución EPC de centrales de generación térmica en centrales nucleares",
    icon: <FaIndustry className="text-orange h-6 w-6" />,
  },
  {
    name: "Infraestructura Vial",
    info: "Construcción de proyectos de infraestructura vial",
    icon: <FaRoad className="text-orange h-6 w-6" />,
  },
  {
    name: "Telecomunicaciones",
    info: "Obras de planta externa, edificios para centrales, redes de fibra óptica",
    icon: <FaSatelliteDish className="text-orange h-6 w-6" />,
  },
];

const Action: React.FC = () => {
  return (
    <div
      className="h-full bg-black flex flex-col items-center overflow-hidden p-10 lg:p-20 gap-10"
      id="action"
    >
      <h1 className="text-slate-200 text-4xl sm:text-5xl lg:text-6xl font-thin sm:mr-auto uppercase border border-slate-200 p-4 rounded-lg whitespace-nowrap">
        Áreas de Acción
      </h1>
      <div className="w-full mt-10 grid gap-10 items-start justify-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {ActionAreas.map((action) => (
          <div
            key={action.name}
            className="flex flex-col items-start pl-4 border-l border-slate-400"
          >
            <Link href="/">
              <div className="mb-4">{action.icon}</div>
              <p className="text-slate-200 text-3xl font-bold uppercase mb-2">
                {action.name}
              </p>
              <span className="text-slate-400 text-lg font-thin">
                {action.info}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Action;
