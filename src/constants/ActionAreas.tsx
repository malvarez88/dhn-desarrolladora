import {
  FaRegBuilding,
  FaIndustry,
  FaSatelliteDish,
  FaRoad,
  FaTree,
  FaTools,
} from "react-icons/fa";
import { MdLocalFireDepartment } from "react-icons/md";

export const ActionAreas = [
  {
    name: "Servicios",
    url: "servicios",
    info: "Provisión de mano de obra, equipos y herramientas para ejecución de servicios a la industria de la construcción, energía y O&G",
    icon: <FaTools className="text-orange h-6 w-6" />,
  },
  {
    name: "Energías Convencionales",
    url: "convencionales",
    info: "Ejecución EPC de Centrales de generación térmica en centrales nucleares",
    icon: <MdLocalFireDepartment className="text-orange h-6 w-6" />,
  },
  {
    name: "Energías Renovables",
    url: "renovables",
    info: "Construcción de proyectos de energía eólica y fotovoltaica",
    icon: <FaTree className="text-orange h-6 w-6" />,
  },
  {
    name: "Arquitectura",
    url: "arquitectura",
    info: "Diseño y construcción de edificios, barrios de viviendas, instalaciones deportivas y educacionales.",
    icon: <FaRegBuilding className="text-orange h-6 w-6" />,
  },
  {
    name: "Proyectos Industriales",
    url: "industriales",
    info: "Ejecución EPC de centrales de generación térmica en centrales nucleares",
    icon: <FaIndustry className="text-orange h-6 w-6" />,
  },
  {
    name: "Infraestructura Vial",
    url: "vial",
    info: "Construcción de proyectos de infraestructura vial",
    icon: <FaRoad className="text-orange h-6 w-6" />,
  },
  {
    name: "Telecomunicaciones",
    url: "telecomunicaciones",
    info: "Obras de planta externa, edificios para centrales, redes de fibra óptica",
    icon: <FaSatelliteDish className="text-orange h-6 w-6" />,
  },
];
