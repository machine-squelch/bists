import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bist's Aquivida Pool Care | The Most Reliable, On-Time Pool Service",
  description: "Bist's Aquivida Pool Care offers expert, all-in-one pool cleaning, repair, and maintenance. Serving Rocklin, Roseville, Lincoln, Citrus Heights, Orangevale, Antelope, Granite Bay, Placer County, and Sacramento County. Get your free quote or book your service online today. Always on time. Always reliable.",
  keywords: ["pool service", "pool cleaning", "pool repair", "pool maintenance", "Aquivida", "Bist", "Rocklin", "Roseville", "Lincoln", "Citrus Heights", "Orangevale", "Antelope", "Granite Bay", "Placer County", "Sacramento County"],
  openGraph: {
    title: "Bist's Aquivida Pool Care | The Most Reliable, On-Time Pool Service",
    description: "Bist's Aquivida Pool Care offers expert, all-in-one pool cleaning, repair, and maintenance. Serving Rocklin, Roseville, Lincoln, Citrus Heights, Orangevale, Antelope, Granite Bay, Placer County, and Sacramento County.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
