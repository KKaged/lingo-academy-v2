import logo from "@/public/logo.svg";
import Image from "next/image";
import logo2 from "@/public/logo2.png";

export default function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="flex flex-col md:justify-evenly lg:flex-row">
        <section className="flex items-center justify-center p-5 w-full">
          <Image src={logo2} alt="logo" />
          <h1 className="text-3xl ml-2 md:text-4xl font-bold text-center">
            <span className="text-[rgb(78,101,122)] font-bold">Lingo</span>
            Academy
          </h1>
        </section>
        <section className="flex flex-col text-center md:w-full md:p-1">
          <h3 className="text-3xl font-bold p-5 my-1 text-[rgb(78,101,122)]">
            人気コース
          </h3>
          <ul className="flex flex-col items-center p-5">
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>キッズ向け英語</span>
              <span className="text-slate-500">1時間 ¥3,000</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>英語初</span>
              <span className="text-slate-500">1時間 ¥3,000</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>オンライン学習</span>
              <span className="text-slate-500">1時間 ¥3,000</span>
            </li>
            <li className="flex justify-between w-full p-2 font-semibold">
              <span>ビジネス英語</span>
              <span className="text-slate-500">1時間 ¥4,000</span>
            </li>
          </ul>
        </section>
      </div>
      <section className="h-[60px] text-center font-medium bg-[rgb(221,206,184)]">
        <h2 className="text-xl p-2 size-full my-auto">© 2024 LingoAcademy </h2>
      </section>
    </footer>
  );
}
