import logo from "@/public/logo.svg";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="flex flex-col md:justify-evenly lg:flex-row">
        <section className="flex flex-col items-center justify-center p-5 w-full">
          {/* Logo and Title in a row */}
          <div className="flex items-center">
            <Image src={logo} alt="logo" width={40} height={40} />{" "}
            {/* Adjust width/height as needed */}
            <h1 className="text-3xl ml-2 md:text-4xl font-bold text-center">
              <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
              Academy
            </h1>
          </div>

          {/* Location and Phone Number */}
          <div className="flex flex-col justify-evenly h-1/3 items-center p-2 w-full lg:flex-row lg:justify-around lg:h-1/6 mt-2">
            <aside className="flex items-center">
              <MapPin size={"20px"} className="mr-1" />
              <span className="font-medium lg:text-xl">日本、横浜</span>
            </aside>
            <aside className="flex items-center">
              <Phone size={"20px"} className="mr-1" />
              <span className="font-medium lg:text-xl">+80-70-2668-6559</span>
            </aside>
          </div>
        </section>

        {/* Course Section */}
        <section className="flex flex-col text-center md:w-full md:p-1">
          <h3 className="text-3xl font-bold p-5 my-1 text-[rgb(78,101,122)]">
            人気コース
          </h3>
          <ul className="flex flex-col items-center p-5">
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>キッズ向け英語</span>
              <span className="text-slate-500">¥3,000/１コマ</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>英語初</span>
              <span className="text-slate-500">¥3,000/１コマ</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>オンライン学習</span>
              <span className="text-slate-500">¥3,000/１コマ</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>ビジネス英語</span>
              <span className="text-slate-500">¥4,000/１コマ</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Footer Bottom Section */}
      <section className="h-[60px] text-center font-medium bg-[rgb(221,206,184)]">
        <h2 className="text-xl p-2 size-full my-auto">© 2024 Lingo Academy</h2>
      </section>
    </footer>
  );
}
