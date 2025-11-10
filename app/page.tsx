"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrustBadges } from "@/components/TrustBadges"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselItem } from "@/components/ui/carousel"
import { QuoteForm } from "@/components/QuoteForm"
import { VantaWaves } from "@/components/VantaWaves"
import Image from "next/image"
import {
  Droplets,
  Wrench,
  Calendar,
  Sparkles,
  Hammer,
  Settings,
  Star,
  CalendarCheck,
  Truck,
  Check,
} from "lucide-react"

export default function Home() {
  const services = [
    {
      icon: Droplets,
      title: "Weekly Cleaning & Maint.",
      description: "Regular maintenance to keep your pool pristine",
    },
    {
      icon: Sparkles,
      title: "Chemical Balancing",
      description: "Chlorine/Salt water balancing expertise",
    },
    {
      icon: Wrench,
      title: "Equipment Repair",
      description: "Pumps, Filters, Heaters - we fix it all",
    },
    {
      icon: Calendar,
      title: "Pool Opening & Closing",
      description: "Seasonal service to protect your investment",
    },
    {
      icon: Droplets,
      title: "Green-to-Clean Recovery",
      description: "Transform your pool from green to sparkling",
    },
    {
      icon: Settings,
      title: "New Equipment Installation",
      description: "Professional installation of new pool equipment",
    },
  ]

  const testimonials = [
    {
      rating: 5,
      text: "We've finally found a reliable service! Bist's Aquivida is always on time, and our pool has never looked better. The team is professional, friendly, and truly cares about our pool.",
      name: "Sarah",
      location: "Local Customer",
    },
    {
      rating: 5,
      text: "After years of dealing with unreliable pool services, Bist's Aquivida has been a game-changer. They show up when they say they will, and the quality of work is outstanding.",
      name: "Michael",
      location: "Local Customer",
    },
    {
      rating: 5,
      text: "Bist personally called me back after I filled out the quote form. That personal touch means everything. Our pool is now the envy of the neighborhood!",
      name: "Jennifer",
      location: "Local Customer",
    },
  ]

  return (
    <main id="main-content" className="min-h-screen">
      {/* Section 1: Hero */}
      <section
        id="home"
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        <VantaWaves />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Most Reliable, On-Time Pool Service. All-in-One.
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto">
            Bist&apos;s Aquivida Pool Care is your trusted, local expert for
            cleaning, repairs, and maintenance. We show up on time. We do it all.
            Stop worrying about your pool and start enjoying it.
          </p>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-white/90">
            Serving: Rocklin, Roseville, Lincoln, Citrus Heights, Orangevale, Antelope, Granite Bay, Placer County, Sacramento County
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => {
                document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
              }}
              aria-label="Get a free quote for pool services"
            >
              Get a Free Quote
            </Button>
            <Link href="/book">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20"
                aria-label="Book a service call"
              >
                Book a Service Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges - Below Fold */}
      <TrustBadges />

      {/* Service Areas Banner */}
      <section className="py-8 bg-gray-800 text-white" aria-labelledby="service-areas-heading">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm md:text-base font-medium mb-2" id="service-areas-heading">
              Proudly Serving:
            </p>
            <p className="text-base md:text-lg font-semibold">
              Rocklin • Roseville • Lincoln • Citrus Heights • Orangevale • Antelope • Granite Bay • Placer County • Sacramento County
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Services Overview */}
      <section id="services" className="py-20 bg-gray-200 border-t-2 border-b-2 border-gray-300 section-divider" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Complete &apos;Aquivida&apos; Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                  role="article"
                  aria-label={service.title}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4" aria-hidden="true">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Social Proof (Testimonials) */}
      <section className="py-20 bg-white border-b-2 border-gray-200 section-divider" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Hear From Your Neighbors
          </h2>
          {/* Desktop: 2-row grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="px-6 py-8" role="article" aria-label={`Testimonial from ${testimonial.name}`}>
                <CardHeader className="px-0">
                  <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} star rating`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-secondary text-secondary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Mobile Stacked */}
          <div className="md:hidden space-y-6 max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="px-6 py-8" role="article" aria-label={`Testimonial from ${testimonial.name}`}>
                <CardHeader className="px-0">
                  <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} star rating`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-secondary text-secondary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Visual Proof */}
      <section className="py-20 bg-gray-300 border-t-2 border-b-2 border-gray-400 section-divider" aria-labelledby="visual-proof-heading">
        <div className="container mx-auto px-4">
          <h2 id="visual-proof-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
            From Green to &apos;Aquivida&apos; Clean
          </h2>
          <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div className="relative w-full aspect-[16/10] bg-gray-200">
              <Image
                src="/rad-pool.png"
                alt="Beautiful pool transformation - crystal clear water"
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.5: Gallery */}
      <section className="py-20 bg-white border-b-2 border-gray-200 section-divider" aria-labelledby="gallery-heading">
        <div className="container mx-auto px-4">
          <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Work in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image
                src="/gallery-1.png"
                alt="Pool service work"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image
                src="/rad-pool.png"
                alt="Pool cleaning in action"
                fill
                className="object-cover"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <img
                src="/gallery-3.gif"
                alt="Pool service work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <img
                src="/gallery-4.gif"
                alt="Pool service work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <img
                src="/gallery-5.gif"
                alt="Pool service work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <img
                src="/gallery-6.gif"
                alt="Pool service work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-20 bg-gray-200 border-t-2 border-b-2 border-gray-300 section-divider" aria-labelledby="how-it-works-heading">
        <div className="container mx-auto px-4">
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Simple Path to a Perfect Pool
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center" role="article" aria-label="Step 1: Book or Get a Quote">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <CalendarCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Book or Get a Quote
              </h3>
              <p className="text-gray-600">
                Fill our 60-second form or book a time directly on our
                calendar.
              </p>
            </div>
            <div className="text-center" role="article" aria-label="Step 2: Bist's Tech Arrives On Time">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Bist&apos;s Tech Arrives On Time
              </h3>
              <p className="text-gray-600">
                A certified, friendly technician arrives on your scheduled day.
                No more guessing.
              </p>
            </div>
            <div className="text-center" role="article" aria-label="Step 3: You Enjoy the Aquivida">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center" aria-hidden="true">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                You Enjoy the &apos;Aquivida&apos;
              </h3>
              <p className="text-gray-600">
                We handle everything. All you have to do is swim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Dual-Conversion Final CTA */}
      <section id="book" className="py-20 bg-white border-t-2 border-gray-200 section-divider" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ready to Start Your &apos;Aquivida&apos;?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column: Book Now */}
            <Card className="p-8" role="region" aria-labelledby="book-now-title">
              <CardHeader>
                <CardTitle id="book-now-title" className="text-2xl mb-4">Need Service Now?</CardTitle>
                <CardDescription className="text-base">
                  Book a confirmed service call or consultation. Pick a time on
                  our calendar, and we&apos;ll be there. Simple.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/book" aria-label="Book a service call on our calendar">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full"
                  >
                    Find a Time Slot
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Right Column: Get Quote */}
            <Card className="p-8" role="region" aria-labelledby="get-quote-title">
              <CardHeader>
                <CardTitle id="get-quote-title" className="text-2xl mb-4">Have Questions?</CardTitle>
                <CardDescription className="text-base">
                  Not sure what you need? Fill out our simple form, and our
                  owner, Bist, may personally call you back with a free,
                  no-hassle quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QuoteForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
