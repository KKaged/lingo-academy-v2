// pages/courses.tsx
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import beginner from "@/public/learning-beginners.webp";
import business from "@/public/business-learning.webp";
import kid from "@/public/young-learners.webp";
import onLearn from "@/public/online-learners.webp";
import Navigation from "../_components/navagation";
import Footer from "../_components/footer";

const courses = [
  {
    title: "初心者向け英語",
    description:
      "当社の初心者向け英語コースは、英語学習の旅を始めたばかりの方々に最適です。高校生、スキルアップを目指す社会人、留学や海外旅行を予定している方など、幅広い方に適しています。このコースでは、読み書き、話す、聞くの基礎を築くことができます。日常会話に自信を持ち、海外での生活や学習にスムーズに適応するために、このコースをお選びください。",
    image: beginner,
    price: "¥3,000/１コマ",
  },
  {
    title: "ビジネス英語",
    description:
      "当社のビジネス英語コースで、プロフェッショナルなコミュニケーションスキルを向上させましょう。このコースは、英語でビジネスの世界をナビゲートする必要があるプロフェッショナル、起業家、求職者向けに設計されています。会議、プレゼンテーション、交渉、ネットワーキングに必要な特定の言語スキルに焦点を当てています。キャリアアップを目指し、国際的なビジネス環境で効果的にコミュニケーションするために、このコースをお選びください。",
    image: business,
    price: "¥4,000/１コマ",
  },
  {
    title: "キッズ向け英語",
    description:
      "当社のキッズ向け英語プログラムは、5歳から12歳までの若い学習者に楽しく魅力的な英語学習を提供するために特別に設計されています。ゲーム、歌、物語、インタラクティブなアクティビティを通じて、子供たちはサポート的な環境で言語スキルを伸ばします。このコースは、お子様に英語の先行学習を提供したい親や、国際教育の準備をしている方に最適です。早期に言語学習への愛を育むために、このプログラムをお選びください。",
    image: kid,
    price: "¥3,000/１コマ",
  },
  {
    title: "オンライン学習",
    description:
      "当社のオンライン学習プラットフォームは、世界中のどこにいる方でも教室をあなたのもとへお届けします。このコースは、忙しいプロフェッショナル、リモート学習者、柔軟な教育を好む方に最適です。ライブレッスンに参加し、グループアクティビティに参加し、当社の専門講師からリアルタイムのフィードバックを受け取ることができます。スケジュールに合った便利で効果的な学習体験をお求めなら、このオプションをお選びください。",
    image: onLearn,
    price: "¥3,000/１コマ",
  },
];

const Courses = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col space-y-8 p-6 bg-[rgb(202,217,226)]">
        {courses.map((course, index) => (
          <Card
            key={index}
            isBlurred
            className="w-full max-w-xl mx-auto shadow-lg transition-transform duration-300 hover:scale-105 rounded-lg border border-gray-200 bg-white"
          >
            <CardHeader className="h-56 overflow-hidden rounded-t-lg">
              <Image
                alt={`${course.title} image`}
                src={course.image}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </CardHeader>
            <CardBody className="flex flex-col items-center p-8 text-center">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">
                {course.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{course.description}</p>
            </CardBody>
            <CardFooter className="flex justify-center py-4 border-t border-gray-200">
              <span className="text-lg font-semibold text-blue-600">
                {course.price}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Courses;
