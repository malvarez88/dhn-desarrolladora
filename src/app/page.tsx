"use client";
import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import Us from "./components/Us";
import Action from "./components/Action";
import Certifications from "./components/Certifications";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <Us />
      <Action />
      <Section />
      <Certifications />
      <Clients />
      <Contact />
    </>
  );
}
