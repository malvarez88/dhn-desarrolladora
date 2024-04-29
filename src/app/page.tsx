import Image from "next/image";
import Bg from "../../public/home4.jpg";
import Logo from "../../public/logo.png";
import Hero from "./components/Hero";
import Us from "./components/Us";
import Action from "./components/Action";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Us />
      <Action />
    </div>
  );
}
