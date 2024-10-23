import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Lingo Academy",
  description:
    "横浜の英会話スクール「Lingo Academy」で、楽しく効果的に英語を学びませんか？初心者から上級者まで対応した魅力的な英語レッスンとサポートが充実したコミュニティで、あなたの目標に合わせたパーソナライズされたクラスを提供します。フレキシブルなスケジュールで、実践的な会話練習や文化交流を体験し、英語力を向上させましょう。フレンドリーな環境で英語を学ぶ楽しさを見つけましょう—今すぐお申し込みください！",
  keywords:
    "英会話スクール, 横浜, Lingo Academy, 英語を学ぶ, 初心者, 上級者, 実践的な会話練習, 英語力向上",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
