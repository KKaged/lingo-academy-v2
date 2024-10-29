import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";
import beginner from "@/public/learning-beginners.webp";

export default function Beginners() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card
      isBlurred
      className="w-full h-full lg:size-fit lg:col-start-1 lg:row-start-1"
    >
      <CardHeader className="text-3xl h-fit w-full">
        <Image
          alt="card background"
          src={beginner}
          className="w-full rounded-xl"
        />
      </CardHeader>
      <CardBody className="flex items-center">
        <h1 className="text-2xl text-center font-bold p-2">
          英語初心者必見！海外旅行に役立つ英語を学ぼう
        </h1>
        <p className=" text-center font-medium">
          英語を学び始めたばかりの方でも、このコースで自信を持って英語を話せるようになります。経験豊富な講師が、楽しく効果的な方法で、読み書き、話す、聞くのスキルを磨きます。日常会話や実用的な語彙に重点を置き、旅先でのコミュニケーションに役立つ英語を身に付けましょう。英語を話す楽しさを体験して、海外旅行をより充実させましょう！
        </p>
        <Button
          color="primary"
          variant="ghost"
          onPress={onOpen}
          className="m-2 lg:w-1/2"
        >
          オンライン学習オプション
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  <h1>初心者向けオンライン英語</h1>
                </ModalHeader>
                <ModalBody>
                  <p className="text-justify">
                    自宅で快適に英語を学びませんか？当校のオンラインレッスンは、対面レッスンと同じ高品質な指導を提供します。柔軟なスケジュールとインタラクティブなバーチャルクラスルームで、レッスンに参加し、仲間と会話の練習をし、講師から個別のフィードバックを受けられます。すべてご自宅から可能です。
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    閉じる
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardBody>
      <CardFooter>
        <span className="text-2xl text-slate-500"> ¥3,000/１コマ</span>
      </CardFooter>
    </Card>
  );
}
