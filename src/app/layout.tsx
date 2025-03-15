import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "구민욱 포트폴리오",
  description: "구민욱 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <link rel="icon" href="/portfolio/취업사진.JPG" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
