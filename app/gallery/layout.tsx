import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Bist's Aquivida Pool Care",
  description: "See the amazing transformations we've achieved. From green pools to crystal-clear oases, view our portfolio of pool cleaning, repair, and maintenance work.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
