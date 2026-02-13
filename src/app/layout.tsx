import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserratBlack = Montserrat({
  variable: "--font-montserrat-black",
  subsets: ["latin"],
  weight: "900",
});

const montserratRegular = Montserrat({
  variable: "--font-montserrat-regular",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arti Fiksi Media",
  description: "Platform media terkini untuk konten kreatif dan inspiratif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratBlack.variable} ${montserratRegular.variable} ${geistMono.variable} ${playfair.variable} font-montserrat-regular antialiased flex flex-col min-h-screen bg-white text-black`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
