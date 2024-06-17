import logo from "@/public/logo.svg";
import Image from "next/image";
import logo2 from "@/public/logo2.png"

export default function Footer() {
  return (
    <footer className="w-full h-full border">
      <div className="flex flex-col md:justify-evenly">
        <section className="flex items-center justify-center p-5 w-full md:w-1/2">
          <Image
            src={logo2}
            alt="logo"
          />
          <h1 className="text-3xl ml-2 md:text-4xl font-bold text-center">
            <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
            Academy
          </h1>
        </section>
        <section className="flex flex-col text-center md:w-full md:p-1">
          <h3 className="text-3xl font-bold p-5 my-1 text-[rgb(78,101,122)]">
            POPULAR COURSES
          </h3>
          <ul className="flex flex-col items-center p-5">
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>English for Kids</span>
              <span className="text-slate-500">¥3,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>Online Learning</span>
              <span className="text-slate-500">¥3,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>Personal Lessons</span>
              <span className="text-slate-500">¥3,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>Group Lessons</span>
              <span className="text-slate-500">¥4,000 per hour</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>English Club</span>
              <span className="text-slate-500">¥4,000 per hour</span>
            </li>
          </ul>
        </section>
      </div>
      <section className="h-[60px] text-center font-medium bg-[rgb(221,206,184)]">
        <h2 className="text-xl p-2">© 2024 LingoAcademy </h2>
      </section>
    </footer>
  );
}
