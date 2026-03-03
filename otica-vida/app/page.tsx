import Image from "next/image";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import "./globals.css";
import CardOculos from "../src/components/Cards/Card.Oculos";
import Footer from "../src/components/Footer/Footer";
import Sobre from "@/src/components/Sobre/Sobre";
export default function Home() {
  return (
    <>
    
      <Header/>
        <Hero/>
        <CardOculos/>
        <Sobre/>
      <Footer/>
    </>
  );
}
