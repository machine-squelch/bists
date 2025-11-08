"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { QuoteForm } from "@/components/QuoteForm"
import {
  Droplets,
  Wrench,
  Calendar,
  Sparkles,
  Settings,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Droplets,
      title: "Weekly Cleaning & Maintenance",
      description: "Regular maintenance to keep your pool pristine. Our certified technicians visit weekly to ensure your pool stays clean, balanced, and ready for swimming. We handle skimming, vacuuming, brushing, and all the details so you don't have to.",
      features: [
        "Weekly pool cleaning and skimming",
        "Chemical balancing and testing",
        "Equipment inspection",
        "Filter cleaning and maintenance",
      ],
    },
    {
      icon: Sparkles,
      title: "Chemical Balancing",
      description: "Expert chlorine and salt water balancing to keep your pool safe and comfortable. We test and adjust pH, alkalinity, calcium hardness, and sanitizer levels to ensure perfect water chemistry.",
      features: [
        "pH and alkalinity adjustment",
        "Chlorine and salt level management",
        "Calcium hardness balancing",
        "Regular water testing",
      ],
    },
    {
      icon: Wrench,
      title: "Equipment Repair",
      description: "Fast, reliable repair service for pumps, filters, heaters, and all pool equipment. Our technicians are certified to work on all major brands and can diagnose and fix issues quickly.",
      features: [
        "Pump and motor repair",
        "Filter system maintenance",
        "Heater service and repair",
        "All equipment troubleshooting",
      ],
    },
    {
      icon: Calendar,
      title: "Pool Opening & Closing",
      description: "Seasonal service to protect your investment. We handle the complete opening process in spring and proper winterization in fall to extend your pool's life and prevent costly damage.",
      features: [
        "Spring pool opening service",
        "Winter pool closing service",
        "Cover installation and removal",
        "Equipment winterization",
      ],
    },
    {
      icon: Droplets,
      title: "Green-to-Clean Recovery",
      description: "Transform your pool from green and cloudy to sparkling clean. Our intensive recovery service includes shock treatment, algae removal, filter cleaning, and complete water restoration.",
      features: [
        "Algae removal and treatment",
        "Shock treatment and sanitization",
        "Filter deep cleaning",
        "Complete water restoration",
      ],
    },
    {
      icon: Settings,
      title: "New Equipment Installation",
      description: "Professional installation of new pool equipment including pumps, filters, heaters, automation systems, and more. We ensure proper installation and integration with your existing setup.",
      features: [
        "Pump and filter installation",
        "Heater installation",
        "Automation system setup",
        "Equipment upgrades and replacements",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            Our Expert &apos;AquiVida&apos; Pool Services
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Comprehensive pool care services designed to keep your pool pristine
            and your life stress-free. All services backed by Bist&apos;s
            On-Time Guarantee.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2" aria-label={`Features for ${service.title}`}>
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-primary mt-1" aria-hidden="true">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Dual-Conversion CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
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
                <Link href="/book" aria-label="Book a service call">
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
