import Navagation from "../_components/navagation";
import Footer from "../_components/footer";

export default function AboutUs() {
  return (
    <>
      <Navagation />
      <div className="p-6 sm:p-10 bg-[rgb(202,217,226)] min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[rgb(78,101,122)] mb-6">
            私たちについて
          </h1>
          <p className="text-base sm:text-xl mb-4 leading-relaxed">
            私たちのミッションは、日本の英語学習者が実際の会話スキルを磨き、自然に英語を話せる自信をつけるお手伝いをすることです。英語は単なる語彙や文法の暗記ではなく、リラックスして練習し、試行錯誤を通して成長するものだと考えています。そのため、安心して学べる環境を提供し、学びをもっと身近で楽しいものにしたいと願っています。
          </p>
          <p className="text-base sm:text-xl mb-4 leading-relaxed">
            当スクールでは、旅行や仕事、日常生活で使える実用的な英語力を重視しています。さまざまな学習スタイルに対応した教材やレッスン、インタラクティブなアクティビティを用意し、英語が日常生活の一部になるサポートをしています。初心者から上級者まで、一人ひとりのレベルに合わせた学習体験を提供し、確かな進歩を感じながら学習を楽しんでいただけるよう心がけています。
          </p>
          <p className="text-base sm:text-xl leading-relaxed">
            学ぶことで広がる新しい可能性と自信を、ぜひ一緒に見つけていきましょう。
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
