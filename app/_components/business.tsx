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
    <Card isBlurred className="w-full h-2/3">
      <CardHeader className="text-3xl h-fit flex flex-col">
        <Image
          alt="card background"
          src={business}
          className="w-full rounded-xl "
        />
        
      </CardHeader>
      <CardBody className="p-5">
      <h1 className="text-2xl text-center p-2 font-bold"> English for Business</h1>
        <p className="text-center font-medium">
          Elevate your professional communication skills with our English for
          Business course. Tailored for business professionals, this course
          focuses on the specific language and communication skills needed in
          the corporate world. Learn how to conduct meetings, deliver
          presentations, negotiate deals, write professional emails, and more.
          Our instructors bring real-world business experience to the classroom,
          ensuring that you gain practical and relevant skills to advance your
          career.
        </p>
        <Button
          color="primary"
          variant="ghost"
          onPress={onOpen}
          className="m-2 mt-5"
        >
          Online Learning Options
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  <h1>English for Business Online</h1>
                </ModalHeader>
                <ModalBody>
                  <p className="text-justify">
                    Busy schedule? No problem. Our online Business English
                    lessons allow you to enhance your skills without
                    compromising your work commitments. Join live sessions,
                    access business-focused materials, and practice with
                    professionals from around the globe. Our flexible online
                    platform makes it easy to fit learning into your busy life.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardBody>
      <CardFooter>
        <span className="text-2xl text-slate-500">¥4,000 per hour</span>
      </CardFooter>
    </Card>
  );
}
