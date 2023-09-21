import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import About from "./about";

type childrenType = { children: React.ReactNode };

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abed Fetrat - Portfolio",
  description: "Abed Fetrat's portfolio website",
};

export default function RootLayout({ children }: childrenType) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <About />
        {children}
      </body>
    </html>
  );
}
