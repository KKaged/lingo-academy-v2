import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Lingo Academy",
  description:
    "Lingo Academyで横浜で英語を勉強しょう！ 経験豊富なネイティブ講師によるパーソナライズされたレッスンは、就職面接、海外旅行、会話力を向上させたいなど、あなたの目標達成をサポートします。 今すぐ無料体験レッスンであなたの英語の旅を始めましょう。",
  keywords:
    "英会話スクール, 横浜, Lingo Academy, 英語を学ぶ, 初心者, 上級者, 実践的な会話練習, 英語力向上, 英会話, 横浜英会話, 初心英語,安い英会話, 無料レッスン, 無料体験レッスン ",
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
