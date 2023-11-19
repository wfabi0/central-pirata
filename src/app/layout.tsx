import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import Providers from "./providers";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const monsterFriend = {
  fore: "monsterFore",
  back: "monsterBack",
};

export const metadata: Metadata = {
  title: "Central Pirata",
  description: "Encontre seus jogos favoritos em promoção!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebas.className} text-white flex flex-col min-h-screen`}
      >
        <Providers>
          <div className="flex-1">
            <Navbar />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
