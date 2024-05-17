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
      className="flex p-4 py-20 md:p-10 lg:p-20 h-full bg-white flex-col items-center justify-center"
      id="clients"
    >
      <div className="flex items-start justify-center col-span-1 relative">
        <div className="absolute inline-block bg-secondary -skew-x-6 -skew-y-3 w-20 md:w-40 h-20 -top-5" />
        <h1 className="text-3xl md:text-5xl text-black font-bold uppercase relative z-10 drop-shadow-lg">
          Clientes
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row overflow-x-hidden gap-20 items-center mt-20">
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
              height={180}
              className="object-contain hover:animation-paused h-full"
              priority
            />
          </a>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Clients;
