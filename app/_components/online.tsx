import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import onLearn from "@/public/online-learners.webp";
import Image from "next/image";

export default function online() {
  return (
    <Card
      isBlurred
      className="w-full h-full lg:size-full lg:col-start-2 lg:row-start-1"
    >
      <CardHeader className="text-3xl h-fit flex flex-col">
        <Image
          alt="card background"
          src={onLearn}
          className="w-full rounded-xl "
        />
      </CardHeader>
      <CardBody className="p-5">
        <h1 className="text-2xl text-center p-2 font-bold">オンライン英会話</h1>
        <p className="text-center font-medium">
          いつでもどこでも、世界中のどこからでも、教室があなたのもとへ。初心者から上級者、ビジネスパーソンから幼い子供まで、あらゆるレベルとニーズに合わせた幅広いコースをご用意しています。私たちのバーチャルクラスルームは、インタラクティブな学習を促進する最先端のテクノロジーで装備されています。ライブレッスンに参加し、グループ活動に参加し、専門講師からリアルタイムのフィードバックを受け取ることができます。自分のペースで英語を学び、ライフスタイルに合った柔軟なスケジュールで学習できます。
        </p>
      </CardBody>
      <CardFooter>
        <span className="text-2xl text-slate-500">時給3,000円</span>
      </CardFooter>
    </Card>
  );
}
