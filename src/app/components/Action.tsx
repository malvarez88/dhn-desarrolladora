import React from "react";
import { FaRegBuilding } from "react-icons/fa";

const Action: React.FC = () => {
  return (
    <div
      className="h-full bg-white flex flex-col items-center p-20"
      id="action"
    >
      <h1 className="text-neutral-950 text-4xl font-bold">Areas de Acción</h1>
      {/* <FaRegBuilding className="w-10 h-10 text-neutral-950" /> */}
      <div className="bg-red-200 w-full h-20 mt-10"></div>
    </div>
  );
};

export default Action;
