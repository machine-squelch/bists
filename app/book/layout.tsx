import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Service Call | Bist's Aquivida Pool Care",
  description: "Book your pool service call online. Pick a time that works for you and we'll send a confirmation email right away.",
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
