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
            もともとは英会話を教えるシンプルな趣味として始まりましたが、日本の英語学習者を支援する情熱へと進化しました。経験を通じて、日本で英語に触れ、効果的に学ぶことの難しさを感じ、その学習をより簡単で実用的かつ楽しいものにするための場所を作ろうと決意しました。
          </p>
          <p className="text-base sm:text-xl mb-4 leading-relaxed">
            私たちのミッションは、英語学習をより身近にし、実際の会話スキルに重点を置くことで、このギャップを埋めることです。旅行、仕事、または社交の場で、自然に流暢に英語を話す自信をつけるお手伝いをしたいと考えています。
          </p>
          <p className="text-base sm:text-xl mb-4 leading-relaxed">
            言語学習は単なる語彙の暗記や文法の練習ではなく、学習者が安心して練習し、失敗し、成長できる環境を作ることだと、私たちは時間をかけて理解しました。さまざまな学習スタイルに対応した教材、レッスン、インタラクティブなアクティビティを開発し、英語を日常生活の一部にすることを目指しています。
          </p>
          <p className="text-base sm:text-xl leading-relaxed">
            支援的で魅力的な学習体験を提供することで、より多くの人が自信を持って英語に取り組めるようにインスピレーションを与えたいと考えています。現在のレベルに関係なく、私たちの目標は、意味のある進歩を遂げるお手伝いをし、その過程を楽しんでいただけるようにすることです。
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
