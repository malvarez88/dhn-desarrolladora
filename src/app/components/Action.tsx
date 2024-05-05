import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ActionAreas } from "@/constants/ActionAreas";

gsap.registerPlugin(ScrollTrigger);

const Action: React.FC = () => {
  const actionTitle = useRef(null);
  const actionUlRef = useRef<HTMLUListElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(actionTitle.current, {
      opacity: 0,
      x: -50,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: actionTitle.current,
        start: "top 60%",
        end: "bottom 20%",
      },
    });
    if (actionUlRef.current) {
      const liElements = actionUlRef.current.querySelectorAll("li");
      gsap.from(liElements, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: actionUlRef.current,
          start: "top 60%",
          end: "bottom 20%",
        },
      });
    }
  });
  return (
    <div
      className="h-full bg-black flex flex-col items-center overflow-hidden p-10 lg:p-20 xl:px-40 gap-10"
      id="action"
    >
      <h1
        className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-thin sm:mr-auto uppercase border border-slate-200 p-4 rounded-lg whitespace-nowrap"
        ref={actionTitle}
      >
        Áreas de Acción
      </h1>
      <ul
        className="w-full mt-10 grid gap-10 items-start justify-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-3"
        ref={actionUlRef}
      >
        {ActionAreas.map((action) => (
          <li
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Action;
