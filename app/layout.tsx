import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bist's AquiVida Pool Care | Reliable, On-Time, All-in-One",
  description: "Professional pool care services. Reliable, on-time, all-in-one solutions for your AquiVida lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
