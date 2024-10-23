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
    title: "English for Beginners",
    description:
      "Our English for Beginners course is designed for individuals who are just starting their journey in learning the English language. Whether you are a high school student, a working adult looking to improve your skills, or someone preparing for travel, this course will help you build a strong foundation in reading, writing, speaking, and listening. Choose this course to gain confidence in everyday conversations and to lay the groundwork for further language study.",
    image: beginner,
    price: "¥3,000 per hour",
  },
  {
    title: "English for Business",
    description:
      "Elevate your professional communication skills with our English for Business course. This course is tailored for professionals, entrepreneurs, and job seekers who need to navigate the corporate world in English. It focuses on specific language skills needed for meetings, presentations, negotiations, and networking. Choose this course to enhance your career prospects and communicate effectively in an international business environment.",
    image: business,
    price: "¥4,000 per hour",
  },
  {
    title: "English for Kids",
    description:
      "Our English for Kids program is specially designed to make learning English fun and engaging for young learners aged 5 to 12 years. Through games, songs, stories, and interactive activities, children will develop their language skills in a supportive environment. This course is ideal for parents looking to give their children a head start in English or those preparing for international education. Choose this program to foster a love for language learning at an early age.",
    image: kid,
    price: "¥3,000 per hour",
  },
  {
    title: "Online Learning",
    description:
      "Our Online Learning platform brings the classroom to you, no matter where you are in the world. This course is perfect for busy professionals, remote learners, and those who prefer flexibility in their education. Engage with live lessons, participate in group activities, and receive real-time feedback from our expert instructors. Choose this option for a convenient and effective learning experience that fits into your schedule.",
    image: onLearn,
    price: "¥3,000 per hour",
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
