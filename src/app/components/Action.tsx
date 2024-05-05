import React from "react";
import Link from "next/link";
import { ActionAreas } from "@/constants/ActionAreas";

const Action: React.FC = () => {
  return (
    <div
      className="h-full bg-black flex flex-col items-center overflow-hidden p-10 lg:p-20 xl:px-40 gap-10"
      id="action"
    >
      <h1 className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-thin sm:mr-auto uppercase border border-slate-200 p-4 rounded-lg whitespace-nowrap">
        Áreas de Acción
      </h1>
      <div className="w-full mt-10 grid gap-10 items-start justify-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
        {ActionAreas.map((action) => (
          <div
            key={action.name}
            className="flex flex-col items-start pl-4 border-l border-slate-400"
          >
            <Link
              as={`/area-de-accion/${action.url}`}
              href={"/area-de-accion/[name]"}
            >
              <div className="mb-4">{action.icon}</div>
              <p className="text-slate-200 text-2xl lg:text-3xl font-bold uppercase mb-2">
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
