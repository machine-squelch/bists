import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pool Services | Bist's AquiVida Pool Care",
  description: "Comprehensive pool care services including weekly cleaning, equipment repair, pool opening/closing, and more. Expert service backed by our On-Time Guarantee.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
