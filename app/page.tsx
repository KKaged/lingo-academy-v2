"use client";

//components imported
import Navagation from "./_components/navagation";

import hero from "@/public/hero.webp";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { MapPin, Phone } from "lucide-react";
import Beginners from "./_components/beginners";
import Hero from "./_components/hero";
import Online from "./_components/online";
import Business from "./_components/business";
import Kids from "./_components/kids";
import Contact from "./_components/contact";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <header className="w-dvh overflow-hidden">
        <Navagation />
        <Hero />
      </header>

      <main className="w-dvh overflow-hidden">
        <section className="bg-[rgb(221,206,184)]">
          <p className="text-center font-bold p-5 text-2xl">
            Our language center offers group and personal lessons in English
          </p>
          <Beginners />
          <Online />
          <Business />
          <Kids />
        </section>
      </main>
      <section className="w-dvh overflow-hidden">
        <Contact />
      </section>
      <footer className="w-dvh overflow-hidden">
        <Footer />
      </footer>
    </>
  );
}
