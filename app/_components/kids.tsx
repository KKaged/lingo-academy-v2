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
import kid from "@/public/young-learners.webp";
import Image from "next/image";

export default function Kids() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Card
      isBlurred
      className="w-full h-full lg:size-fit lg:col-start-2 lg:row-start-2 lg:col-end-3 lg:row-end-3"
    >
      <CardHeader className="w-full h-full">
        <Image alt="card background" src={kid} className="w-full rounded-xl " />
      </CardHeader>
      <CardBody className="p-5 flex items-center">
        <h1 className="text-2xl text-center p-2 font-bold">キッズ向け英語</h1>
        <p className="text-center font-medium">
          当社のキッズ向け英語プログラムは、若い学習者にとって楽しく魅力的な英語学習を特別に設計されています。ゲーム、歌、物語、インタラクティブなアクティビティを通じて、子供たちは愛情深くサポート的な環境で言語スキルを伸ばします。当社の経験豊富な講師は、幼児教育の専門家であり、子供たちを動機づけ、学習にインスピレーションを与える方法を理解しています。カリキュラムは、語彙、発音、文法、会話スキルを向上させ、将来の学習のためのしっかりとした基盤を築くように設計されています。
        </p>
        <Button
          color="primary"
          variant="ghost"
          onPress={onOpen}
          className="m-2 mt-5 lg:w-1/2"
        >
          オンライン学習オプション
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  <h1>オンラインキッズ英語</h1>
                </ModalHeader>
                <ModalBody>
                  <p className="text-justify">
                    当社のキッズ向け英語プログラムは、若い学習者にとって楽しく魅力的な英語学習を特別に設計されています。ゲーム、歌、物語、インタラクティブなアクティビティを通じて、子供たちは愛情深くサポート的な環境で言語スキルを伸ばします。カリキュラムは、語彙、発音、文法、会話スキルを向上させ、将来の学習のためのしっかりとした基盤を築くように設計されています。
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
        <span className="text-2xl text-slate-500">¥3,000/１コマ</span>
      </CardFooter>
    </Card>
  );
}
