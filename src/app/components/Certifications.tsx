"use client";
import React, { useState } from "react";
import Image from "next/image";
import ISO from "../../../public/Certificado-ISO-DHN.jpeg";
import Nuclear from "../../../public/Certificado-Nuclear.jpg";

const Certifications: React.FC = () => {
  // Estado para controlar qué imagen está seleccionada
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Función para manejar el clic en una imagen
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  // Función para cerrar la imagen a ancho completo
  const closeFullScreenImage = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className="bg-black flex items-center justify-center py-20 p-4 md:p-10 lg:p-20 flex-col gap-8"
      id="certifications"
    >
      <h1 className="text-slate-200 text-4xl font-bold">Certificaciones</h1>
      <p className="text-slate-100 text-xl text-center">
        Nuestra empresa cuenta con certificados de calidad y ejecución de obras
        civiles en Centrales Nucleares de Generación de Energía.
      </p>
      <div className="flex gap-20 flex-col lg:flex-row">
        <Image
          src={ISO}
          alt="iso"
          className="relative cursor-pointer"
          width={200}
          height={200}
          onClick={() => handleImageClick(ISO.src)}
        />
        <Image
          src={Nuclear}
          alt="nuclear"
          className="relative cursor-pointer"
          width={200}
          height={200}
          onClick={() => handleImageClick(Nuclear.src)}
        />
      </div>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeFullScreenImage}
        >
          <Image
            src={selectedImage}
            alt="fullscreen"
            fill
            className="max-w-full max-h-full object-contain p-10"
          />
        </div>
      )}
    </div>
  );
};

export default Certifications;
