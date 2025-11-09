import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pool Care Resources | Bist's Aquivida Pool Care",
  description: "Expert pool care guides, troubleshooting tips, and professional advice from 15 years of experience. Learn how to maintain your pool like a pro.",
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
