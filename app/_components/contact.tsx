import { Button } from "@nextui-org/button";
import emailjs from "@emailjs/browser";
import {
  DetailedHTMLProps,
  FormEvent,
  HTMLAttributes,
  LegacyRef,
  ReactNode,
  useRef,
} from "react";
import { Input, Textarea } from "@nextui-org/input";
import { User, Mail, MessageSquare, Phone } from "lucide-react";
import { Avatar } from "@nextui-org/react";
import danielImage from "../public/IMG_2141.jpg";
import Image from "next/image";

const id = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const template = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const key = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current === null) {
      console.log("Form is empty");
    } else {
      emailjs.sendForm(id, template, form.current, key).then(
        (result) => {
          alert("Your message has been sent successfully!");
          console.log(result.status);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <>
      <div className="w-full sm:h-[1200px] md:h-[900px] p-5 flex flex-col lg:flex-row items-center bg-gradient-to-r from-[rgb(16,46,62)] to-[rgb(48,115,154)]">
        <section className="h-full w-full lg:flex lg:flex-col lg:justify-center">
          <h2 className="text-4xl my-5 text-center text-white font-bold">
            問い合わせ
          </h2>
          <form
            className="w-full h-[400px] lg:h-2/3 p-2 flex flex-col items-center"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="w-96 md:w-3/4 p-2 h-full flex flex-col justify-evenly items-center bg-white rounded-xl">
              <div className="w-full h-1/3 flex flex-col 2xl:flex-row 2xl:items-center justify-around">
                <Input
                  variant="underlined"
                  isRequired
                  type="text"
                  placeholder="お名前"
                  name="name"
                  startContent={<User color="rgb(78,101,122)" />}
                  style={{ border: "none" }}
                  className="2xl:w-[40%] w-full"
                />

                <Input
                  variant="underlined"
                  isRequired
                  type="email"
                  placeholder="メール"
                  name="email"
                  startContent={<Mail color="rgb(78,101,122)" />}
                  style={{ border: "none" }}
                  className="2xl:w-[40%] w-full"
                />
              </div>

              {/* New Phone Number Input with Phone Icon */}
              <Input
                variant="underlined"
                isRequired
                type="tel" // Use 'tel' for phone input
                placeholder="お電話番号"
                name="phone" // Add name attribute for form submission
                startContent={<Phone color="rgb(78,101,122)" />} // Phone icon added here
                style={{ border: "none" }}
                className="2xl:w-[90%] w-full" // Adjust width as needed
              />

              <Textarea
                variant="underlined"
                isRequired
                placeholder="内容"
                name="message"
                startContent={<MessageSquare color="rgb(78,101,122)" />}
                style={{ border: "none" }}
                className="2xl:w-[90%]"
              />

              <Button
                size="lg"
                type="submit"
                variant="shadow"
                className="w-1/4 text-white bg-[rgb(78,101,122)]"
              >
                送る
              </Button>
            </div>
          </form>
        </section>
        <section className="h-full w-full lg:flex lg:flex-col lg:justify-center">
          <h2 className="text-4xl my-5 text-center text-white font-bold">
            講師紹介
          </h2>
          <div className="h-2/3 w-full flex flex-col items-center">
            <div className="w-96 md:w-3/4 p-2 h-full flex flex-col justify-evenly items-center bg-white rounded-xl">
              <h3 className="font-bold text-2xl">ダニエル・ヒガレダ・レオン</h3>
              <Image
                src="/IMG_2141.jpg"
                width={170} // Set desired width
                height={170} // Set desired height
                alt="Daniel Higareda Leon"
                className="rounded-full"
              />
              <h4 className="font-bold text-lg">インストラクター / CEO</h4>
              <p className="bg-slate-300 p-5 text-center font-medium rounded-xl">
                初めまして、Lingo Academyの創設者です。
                学習を楽しく効果的にすることに情熱を注ぎ、ビジネス英語とコミュニケーションを専門としています。
                私は学生が語学の目標を達成する手助けをすることが大好きです。
                趣味は、F1観戦・美味しい食べ物巡り、散歩です。
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
