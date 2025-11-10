"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GalleryPage() {
  const galleryImages = [
    { src: "/gallery-1.png", alt: "Beautiful pool transformation" },
    { src: "/gallery-2.gif", alt: "Pool cleaning in action" },
    { src: "/gallery-3.gif", alt: "Professional pool maintenance" },
    { src: "/gallery-4.gif", alt: "Pool equipment service" },
    { src: "/gallery-5.gif", alt: "Pool restoration work" },
    { src: "/gallery-6.gif", alt: "Crystal clear pool results" },
    { src: "/after.png", alt: "After pool transformation" },
    { src: "/before.png", alt: "Before pool condition" },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Work Speaks for Itself
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Every pool tells a story. From green disasters to sparkling oases, from broken equipment to perfectly functioning systems—we&apos;ve seen it all and transformed it all. Take a look at the results that have made us the most trusted pool service in the Sacramento area.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized={image.src.endsWith('.gif')}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 bg-blue-100/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Transformation Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/before.png"
                    alt="Pool before service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                    <p className="text-xl font-bold">Before</p>
                    <p className="text-sm">Green, murky, and unusable</p>
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src="/after.png"
                    alt="Pool after service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-white p-4">
                    <p className="text-xl font-bold">After</p>
                    <p className="text-sm">Crystal clear and ready to enjoy</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real Results, Real Customers
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don&apos;t just take our word for it. Our customers have seen the transformation firsthand, and their pools are living proof of what expert care can achieve.
            </p>
            <div className="bg-muted rounded-lg p-8 mb-8">
              <p className="text-lg italic text-gray-700 mb-4">
                &quot;I couldn&apos;t believe my eyes. What was a green, slimy mess on Monday was a beautiful, crystal-clear pool by Friday. Bist didn&apos;t just clean my pool—he saved it.&quot;
              </p>
              <p className="font-semibold text-primary">— Sarah, Rocklin</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Pool?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Your pool could be the next success story. Let&apos;s make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8"
                >
                  Book Your Service
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20"
                >
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
