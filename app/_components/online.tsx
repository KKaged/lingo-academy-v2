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
        <h1 className="text-2xl text-center p-2 font-bold"> Online Learning</h1>
        <p className="text-center font-medium">
          Our Online Learning platform brings the classroom to you, no matter
          where you are in the world. We offer a range of courses to suit all
          levels and needs, from beginners to advanced learners, business
          professionals to young children. Our virtual classrooms are equipped
          with cutting-edge technology that facilitates interactive learning.
          Engage with live lessons, participate in group activities, and receive
          real-time feedback from our expert instructors. Learn English on your
          own terms, with flexible schedules that fit your lifestyle.
        </p>
      </CardBody>
      <CardFooter>
        <span className="text-2xl text-slate-500">¥3,000 per hour</span>
      </CardFooter>
    </Card>
  );
}
