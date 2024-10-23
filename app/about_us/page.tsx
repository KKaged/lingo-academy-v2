import Navagation from "../_components/navagation";
import Footer from "../_components/footer";

export default function AboutUs() {
  return (
    <>
      <Navagation />
      <div className="p-6 sm:p-10 bg-[rgb(202,217,226)] min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[rgb(78,101,122)] mb-6">
            About Us
          </h1>
          <p className="text-base sm:text-xl mb-4 leading-relaxed">
            What began as a simple hobby to teach conversational English has
            evolved into a passion for empowering English learners in Japan.
            Through my experiences, I realized how challenging it can be to
            encounter and effectively learn English here, which motivated me to
            create a space where learning is easier, practical, and enjoyable.
          </p>
          <p className="text-base sm:text-xl mb-4 leading-relaxed">
            Our mission is to bridge this gap by making English learning more
            accessible, focusing on real-world conversational skills. We aim to
            help you build the confidence to speak English naturally and
            fluently in everyday situations, whether it’s for travel, work, or
            social settings.
          </p>
          <p className="text-base sm:text-xl mb-4 leading-relaxed">
            Over time, we’ve come to understand that language learning is not
            just about memorizing vocabulary or practicing grammar—it’s about
            creating an environment where learners feel comfortable to practice,
            make mistakes, and grow. We’ve developed a range of resources,
            lessons, and interactive activities that cater to various learning
            styles, all aimed at making English a part of your daily life.
          </p>
          <p className="text-base sm:text-xl leading-relaxed">
            By providing a supportive and engaging learning experience, we hope
            to inspire more people to embrace English with confidence and ease.
            No matter your current level, our goal is to help you achieve
            meaningful progress and enjoy the process along the way.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
