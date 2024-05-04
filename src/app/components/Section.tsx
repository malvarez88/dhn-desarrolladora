import React from "react";
import Image from "next/image";
import Atucha from "../../../public/atucha-1.jpg";

const Section = () => {
  return (
    <div className="overflow-hidden h-auto lg:h-[500px]">
      <video
        muted
        preload="auto"
        // autoPlay
        loop
        className="grayscale"
      >
        <source src="./cemento.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Section;
