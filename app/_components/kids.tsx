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
    <Card isBlurred className="w-full h-2/3">
      <CardHeader className="w-full h-full">
        <Image alt="card background" src={kid} className="w-full rounded-xl " />
      </CardHeader>
      <CardBody className="p-5">
        <h1 className="text-2xl text-center p-2 font-bold">
          {" "}
          English for Kids
        </h1>
        <p className="text-center font-medium">
          Our English for Kids program is specially designed to make learning
          English fun and engaging for young learners. Through games, songs,
          stories, and interactive activities, children will develop their
          language skills in a nurturing and supportive environment. Our
          experienced instructors are experts in early childhood education and
          understand how to motivate and inspire children to learn. The
          curriculum is designed to improve vocabulary, pronunciation, grammar,
          and conversational skills, laying a solid foundation for future
          learning.
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
                  <h1>English for Kids Online</h1>
                </ModalHeader>
                <ModalBody>
                  <p className="text-justify">
                    Our online classes for kids offer the same engaging and
                    interactive experience as our in-person sessions. Using a
                    kid-friendly virtual platform, children can participate in
                    fun activities, games, and lessons that make learning
                    English enjoyable. Parents can easily monitor progress and
                    participate in their child&apos;s learning journey from
                    home.
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
        <span className="text-2xl text-slate-500">¥3,000 per hour</span>
      </CardFooter>
    </Card>
  );
}
