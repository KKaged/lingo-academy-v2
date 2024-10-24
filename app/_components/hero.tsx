import Image from "next/image";
import { Button } from "@nextui-org/react";
import hero from "@/public/hero.webp";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-dvh flex flex-col items-center lg:w-full lg:justify-around">
      <div className="w-full h-full p-5 flex flex-col justify-evenly lg:justify-around lg:items-around lg:flex-col">
        <h1 className="text-center text-3xl font-bold lg:text-7xl">
          Welcome to <span className="text-[rgb(78,101,122)]">Lingo</span>
          Academy
        </h1>
        <h2 className="text-center font-bold text-lg lg:text-4xl m-3">
          <span className="text-[rgb(78,101,122)]">英語力</span>を磨き、
          <span className="text-[rgb(78,101,122)] underline underline-offset-4">
            未来の可能性
          </span>
          広げる場所
        </h2>
      </div>
      <div className="flex flex-col justify-evenly h-1/3 items-center p-2 w-full lg:flex-row lg:justify-around lg:h-1/6">
        <aside className="flex items-center">
          <MapPin size={"25px"} className="mr-1" />
          <span className="font-medium lg:text-3xl">日本、横浜</span>
        </aside>
        <aside className="flex items-center">
          <Phone size={"25px"} className="mr-1" />
          <span className="font-medium lg:text-3xl">+80-70-2668-6559</span>
        </aside>
      </div>
      <div className="flex justify-center w-full h-1/3 items-center">
        <Button
          className="text-lg font-medium hover:animate-pulse hover:animate-bounce"
          color="success"
          variant="shadow"
          size="lg"
        >
          <Link href="#bookings" className="text-white" scroll={true}>
            無料相談を予約する
          </Link>
        </Button>
      </div>
    </section>
  );
}
