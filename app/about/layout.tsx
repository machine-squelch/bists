import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Bist's Aquivida Pool Care",
  description: "Meet Bist, your pool care expert with 15+ years of experience. Learn about our commitment to reliability, quality service, and transforming pools throughout the Sacramento area.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
