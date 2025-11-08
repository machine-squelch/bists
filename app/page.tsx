"use client"

import { Button } from "@/components/ui/button"
import { TrustBadges } from "@/components/TrustBadges"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselItem } from "@/components/ui/carousel"
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider"
import { QuoteForm } from "@/components/QuoteForm"
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
  CheckCircle,
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
      text: "We've finally found a reliable service! Bist's AquiVida is always on time, and our pool has never looked better. The team is professional, friendly, and truly cares about our pool.",
      name: "Sarah Johnson",
      location: "Miami, FL",
    },
    {
      rating: 5,
      text: "After years of dealing with unreliable pool services, Bist's AquiVida has been a game-changer. They show up when they say they will, and the quality of work is outstanding.",
      name: "Michael Rodriguez",
      location: "Fort Lauderdale, FL",
    },
    {
      rating: 5,
      text: "Bist personally called me back after I filled out the quote form. That personal touch means everything. Our pool is now the envy of the neighborhood!",
      name: "Jennifer Martinez",
      location: "West Palm Beach, FL",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Section 1: Hero */}
      <section
        id="home"
        className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-background"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Reliable, On-Time, All-in-One Pool Care
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Bist&apos;s AquiVida Pool Care is your trusted, local expert for
            cleaning, repairs, and maintenance. Stop worrying about your pool
            and start enjoying the &apos;AquiVida&apos;—the good life, right
            here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Get a Free Quote
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20">
              Book a Service Call
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges - Below Fold */}
      <TrustBadges />

      {/* Section 2: Services Overview */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Complete &apos;AquiVida&apos; Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Hear From Your Neighbors
          </h2>
          <Carousel className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="mx-4">
                  <CardHeader>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-secondary text-secondary"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      &quot;{testimonial.text}&quot;
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Section 4: Visual Proof */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            From Green to &apos;AquiVida&apos; Clean
          </h2>
          <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=1200&q=80&auto=format&fit=crop&crop=center"
              afterImage="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=1200&q=80&auto=format&fit=crop&crop=center"
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Simple Path to a Perfect Pool
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
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
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
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
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                You Enjoy the &apos;AquiVida&apos;
              </h3>
              <p className="text-gray-600">
                We handle everything. All you have to do is swim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Dual-Conversion Final CTA */}
      <section id="book" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ready to Start Your &apos;AquiVida&apos;?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column: Book Now */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Need Service Now?</CardTitle>
                <CardDescription className="text-base">
                  Book a confirmed service call or consultation. Pick a time on
                  our calendar, and we&apos;ll be there. Simple.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    // Link to booking page
                    window.location.href = "/book"
                  }}
                >
                  Find a Time Slot
                </Button>
              </CardContent>
            </Card>

            {/* Right Column: Get Quote */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Have Questions?</CardTitle>
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
