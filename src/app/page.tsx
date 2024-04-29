import Image from "next/image";
import Bg from "../../public/home4.jpg";
import Logo from "../../public/logo.png";
import Hero from "./components/Hero";
import Us from "./components/Us";
import Action from "./components/Action";
import Certifications from "./components/Certifications";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Us />
      <Action />
      <Certifications />
      <Clients />
      <Contact />
    </>
  );
}
