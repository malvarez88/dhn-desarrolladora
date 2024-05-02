import React from "react";
import { FaRegBuilding } from "react-icons/fa";

const Action: React.FC = () => {
  return (
    <div
      className="h-full bg-black flex flex-col items-center p-20"
      id="action"
    >
      <h1 className="text-slate-200 text-4xl font-bold">Proyectos</h1>
      <div className="bg-red-200 w-full h-20 mt-10"></div>
    </div>
  );
};

export default Action;
