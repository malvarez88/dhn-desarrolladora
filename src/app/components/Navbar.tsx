"use client";
import React, { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileBreakpoint = 768;

  const isMobile = windowWidth <= mobileBreakpoint;

  return <nav>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</nav>;
};

export default Navbar;
