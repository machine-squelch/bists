import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Bist's Aquivida Pool Care",
  description: "Contact Bist's Aquivida Pool Care. Call us at 209-730-7313 or send us a message. We serve Rocklin, Roseville, Lincoln, Citrus Heights, Orangevale, Antelope, Granite Bay, Placer County, and Sacramento County.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
