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
import business from "@/public/business-learning.webp";
import Image from "next/image";

export default function Business() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card
      isBlurred
      className="w-full h-full  lg:size-full lg:col-start-1 lg:row-start-2"
    >
      <CardHeader className="text-3xl h-fit flex flex-col">
        <Image
          alt="card background"
          src={business}
          className="w-full rounded-xl "
        />
      </CardHeader>
      <CardBody className="p-5 flex items-center">
        <h1 className="text-2xl text-center p-2 font-bold">ビジネス英語</h1>
        <p className="text-center font-medium">
          弊社のビジネス英語コースで、プロフェッショナルなコミュニケーションスキルを向上させましょう。ビジネスプロフェッショナルのために設計されたこのコースは、企業の世界で必要な特定の言語とコミュニケーションスキルに焦点を当てています。会議の進行、プレゼンテーションの実施、取引の交渉、プロフェッショナルなメールの作成など、さまざまなスキルを学びます。当社の講師は、実務経験を教室に持ち込み、キャリアアップに必要な実践的で関連性の高いスキルを習得できるようサポートします。
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
                  <h1>オンラインビジネス英語</h1>
                </ModalHeader>
                <ModalBody>
                  <p className="text-justify">
                    忙しいスケジュールでも大丈夫！当社のオンラインビジネス英語レッスンは、仕事に支障を与えることなくスキルを向上させることができます。ライブセッションに参加し、ビジネスに特化した教材にアクセスし、世界中のプロフェッショナルと練習しましょう。柔軟なオンラインプラットフォームにより、忙しい生活に学習をフィットさせることが簡単になります。
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
        <span className="text-2xl text-slate-500">時給4,000円</span>
      </CardFooter>
    </Card>
  );
}
