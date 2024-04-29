import React from "react";
import Image from "next/image";
import Ansaldo from "../../../public/ansaldo.png";
import Areco from "../../../public/areco.jpg";
import Nasa from "../../../public/nasa.png";
import Zarate from "../../../public/zarate.jpeg";

const images = [
  {
    src: Ansaldo,
    url: "https://www.ansaldoenergia.com/",
  },
  {
    src: Areco,
    url: "https://areco.ar/",
  },
  {
    src: Nasa,
    url: "https://www.na-sa.com.ar/",
  },
  {
    src: Zarate,
    url: "https://zarate.gob.ar/",
  },
];
const repeatedImages = [...images, ...images];

const Clients: React.FC = () => {
  return (
    <div
      className="flex p-20 h-full bg-neutral-50 flex-col items-center justify-center"
      id="clients"
    >
      <h1 className="text-neutral-950 text-4xl font-bold mb-10">Clientes</h1>
      <div className="relative flex overflow-x-hidden gap-20 items-center">
        {/* <div className="animate-marquee whitespace-nowrap flex gap-32 hover:animation-paused"> */}
        {images.map((image, index) => (
          <a
            key={index}
            href={image.url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
          >
            <Image
              src={image.src}
              alt="Clientes"
              width={180}
              height={1800}
              className="object-contain hover:animation-paused h-full"
            />
          </a>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Clients;
