"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Clock, ShieldCheck, Star, Heart, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Bist: Your Pool Care Expert
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of hands-on experience transforming pools from green nightmares into sparkling oases, Bist brings a level of expertise and personal commitment that&apos;s rare in today&apos;s service industry.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Story Behind Bist&apos;s Aquivida</h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                It all started with a simple frustration: why is it so hard to find a pool service that actually shows up when they say they will? After years of watching neighbors struggle with unreliable contractors, missed appointments, and pools that looked more like swamps than swimming pools, Bist decided to change the game.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What began as a side hustle—helping friends and neighbors get their pools back to pristine condition—quickly grew into something bigger. Word spread fast when people realized that Bist didn&apos;t just clean pools; he transformed them. A green, murky mess on Monday became a crystal-clear paradise by Friday. Equipment that other companies said needed expensive replacement? Bist fixed it for a fraction of the cost.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                But here&apos;s what really sets Bist apart: <strong>he treats every pool like it&apos;s his own.</strong> No shortcuts. No excuses. No &quot;we&apos;ll get to it next week.&quot; When Bist says he&apos;ll be there at 9 AM, he&apos;s pulling into your driveway at 8:55 AM. That&apos;s not just professionalism—that&apos;s personal integrity.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                <p className="text-lg font-semibold text-primary mb-2">The &quot;Aquivida&quot; Promise</p>
                <p className="text-gray-700">
                  &quot;Aquivida&quot; means &quot;the good life&quot;—and that&apos;s exactly what we deliver. Your pool should be a source of joy, not stress. When you work with Bist&apos;s Aquivida Pool Care, you&apos;re not just getting a service provider. You&apos;re getting a partner who understands that your pool is the centerpiece of your backyard paradise.
                </p>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Why Experience Matters</h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                After 15 years in the pool care industry, Bist has seen it all. From algae blooms that would make a biologist blush to equipment failures that would stump most technicians. But here&apos;s the thing: experience isn&apos;t just about knowing what to do. It&apos;s about knowing what <em>not</em> to do. It&apos;s about recognizing that every pool is unique, every situation is different, and cookie-cutter solutions don&apos;t work.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bist has worked with every type of pool system imaginable—saltwater, chlorine, mineral systems, you name it. He&apos;s serviced pools in every season, from the scorching heat of summer to the freezing temperatures of winter. He&apos;s seen pools that haven&apos;t been serviced in years and brought them back to life. He&apos;s prevented thousands of dollars in damage by catching problems early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Reliability First</h3>
              <p className="text-gray-600">
                Your time is valuable. We respect that by showing up exactly when we say we will. No excuses, no delays—just dependable service you can count on.
              </p>
            </Card>
            <Card className="p-6">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed, bonded, and insured. We protect you, your property, and our team. Peace of mind is part of the service.
              </p>
            </Card>
            <Card className="p-6">
              <Star className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">5-Star Service</h3>
              <p className="text-gray-600">
                We don&apos;t just meet expectations—we exceed them. Every job, every time. That&apos;s why our customers become our biggest advocates.
              </p>
            </Card>
            <Card className="p-6">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Local & Personal</h3>
              <p className="text-gray-600">
                We&apos;re your neighbors. We care about your pool because we care about our community. This isn&apos;t just business—it&apos;s personal.
              </p>
            </Card>
            <Card className="p-6">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">15 Years Experience</h3>
              <p className="text-gray-600">
                Decades of hands-on experience means we&apos;ve seen it all and know how to handle it. Your pool is in expert hands.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">All-in-One Service</h3>
              <p className="text-gray-600">
                Cleaning, repairs, maintenance, equipment installation—we do it all. One call, one company, zero hassle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proudly Serving Your Community
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re not just another pool service—we&apos;re your neighbors. Based right here in the greater Sacramento area, we understand the unique challenges of maintaining pools in our climate.
            </p>
            <div className="bg-primary/5 rounded-lg p-8">
              <p className="text-lg font-semibold text-primary mb-4">Our Service Areas:</p>
              <p className="text-base text-gray-700 leading-relaxed">
                Rocklin • Roseville • Lincoln • Citrus Heights • Orangevale • Antelope • Granite Bay • Placer County • Sacramento County
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the &apos;Aquivida&apos; Difference?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Join hundreds of satisfied customers who have discovered what it&apos;s like to work with a pool service that actually cares.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8"
                onClick={() => {
                  document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get Your Free Quote
              </Button>
              <Link href="/book">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20"
                >
                  Book a Service Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
