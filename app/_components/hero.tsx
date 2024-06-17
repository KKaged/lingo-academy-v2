import Image from "next/image";
import { Button } from "@nextui-org/react";
import hero from "@/public/hero.webp";
import { MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-evenly">
      <div>
        <h1 className="text-center text-3xl font-bold">
          Welcome to <span className="text-[rgb(78,101,122)]">Lingo</span>
          Academy
        </h1>
        <h2 className="text-center font-bold text-lg m-3">
          The nexus to improve your English skills
        </h2>
      </div>
      <div className="flex flex-col items-center p-2 w-full">
        <aside className="flex items-center">
          <MapPin size={"25px"} className="mr-1" />
          <span className="font-medium">Yokohama, Japan</span>
        </aside>
        <aside className="flex items-center">
          <Phone size={"25px"} className="mr-1" />
          <span className="font-medium">+80-70-2668-6559</span>
        </aside>
      </div>
      <div className="flex justify-center">
        <Button
          className="m-2 text-lg font-bold"
          color="success"
          variant="shadow"
        >
          Book a free consultation
        </Button>
      </div>
    </section>
  );
}
