import React from "react";
import { FaRegBuilding } from "react-icons/fa";

const Action = () => {
  return (
    <div className="h-screen bg-blue-50 flex flex-col items-center p-20">
      <h1 className="text-blue-950 text-4xl font-bold">Areas de Acción</h1>
      <FaRegBuilding className="w-10 h-10 text-blue-950" />
    </div>
  );
};

export default Action;
