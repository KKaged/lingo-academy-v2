import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";



export const metadata: Metadata = {
  title: "Lingo-Academy",
  description: "A nexus of learning english",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
        {children}
        </NextUIProvider>
        </body>
    </html>
  );
}
