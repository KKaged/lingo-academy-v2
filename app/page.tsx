"use client";

//components imported
import Navagation from "./_components/navagation";
import logo from "/public/logo.svg";
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
        <section className="bg-[rgb(221,206,184)] lg:flex lg:flex-col ">
          <p className="text-center text-lg font-bold p-5 m-2 lg:text-4xl">
            英語のグループレッスンと個人レッスンを提供しています
          </p>
          <div className="lg:grid lg:grid-col-2 lg:grid-row-2 lg:gap-5 lg:size-11/12 lg:mx-auto lg:p-5">
            <Beginners />
            <Online />
            <Business />
            <Kids />
          </div>
        </section>
      </main>
      <section id="bookings" className="w-dvh overflow-hidden">
        <Contact />
      </section>
      <footer className="w-dvh overflow-hidden">
        <Footer />
      </footer>
    </>
  );
}
