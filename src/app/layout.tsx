import type { Metadata } from "next";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import type { RootLayoutProps } from "@/types";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${albertSans.className} ${montserratAlternates.variable} flex h-full flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
