"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Droplets, Wrench, Calendar, Sparkles, ShieldCheck } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      icon: Droplets,
      title: "Pool Maintenance 101: The Ultimate Guide",
      description: "Learn the fundamentals of keeping your pool clean, balanced, and ready for swimming. From chemical basics to equipment care, this comprehensive guide covers everything you need to know.",
      category: "Maintenance",
    },
    {
      icon: Sparkles,
      title: "Understanding Pool Chemistry: pH, Chlorine, and Alkalinity",
      description: "Master the science behind pool chemistry. Discover how to maintain perfect water balance, prevent algae growth, and keep your pool safe and comfortable for swimmers.",
      category: "Chemistry",
    },
    {
      icon: Wrench,
      title: "Common Pool Equipment Problems and Solutions",
      description: "Your pump won't start? Filter pressure too high? Learn to diagnose and understand common pool equipment issues before they become expensive problems.",
      category: "Equipment",
    },
    {
      icon: Calendar,
      title: "Seasonal Pool Care: Opening and Closing Your Pool",
      description: "Step-by-step guides for properly opening your pool in spring and closing it in fall. Protect your investment and extend your pool's lifespan with proper seasonal maintenance.",
      category: "Seasonal",
    },
    {
      icon: ShieldCheck,
      title: "Pool Safety: Essential Guidelines for Homeowners",
      description: "Safety first. Learn about pool barriers, chemical storage, electrical safety, and best practices to keep your family and guests safe around your pool.",
      category: "Safety",
    },
    {
      icon: BookOpen,
      title: "Troubleshooting Guide: When Your Pool Goes Green",
      description: "Algae taking over? Don't panic. This comprehensive guide walks you through identifying the problem, understanding why it happened, and the steps to restore your pool to crystal clarity.",
      category: "Troubleshooting",
    },
  ]

  const tips = [
    {
      title: "Test Your Water Weekly",
      content: "Regular testing helps you catch imbalances before they become major problems. Aim for pH between 7.2-7.6, chlorine between 1-3 ppm, and alkalinity between 80-120 ppm.",
    },
    {
      title: "Skim and Vacuum Regularly",
      content: "Debris in your pool doesn't just look bad—it affects water chemistry and can clog your filter. Skim daily and vacuum at least once a week during peak season.",
    },
    {
      title: "Don't Ignore Small Problems",
      content: "That small leak, unusual noise, or slight drop in pressure? Address it now. Small issues become expensive repairs if left unchecked. Early intervention saves money.",
    },
    {
      title: "Keep Your Filter Clean",
      content: "A dirty filter can't do its job. Clean or backwash your filter regularly based on pressure readings. Most filters need attention when pressure rises 8-10 psi above normal.",
    },
    {
      title: "Balance Chemicals Before Shocking",
      content: "Always balance pH and alkalinity before shocking your pool. Shocking with unbalanced water is less effective and can cause cloudy water or scaling issues.",
    },
    {
      title: "Protect Your Investment",
      content: "Your pool is a significant investment. Regular professional maintenance extends its life, prevents costly repairs, and ensures you get maximum enjoyment from your backyard oasis.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pool Care Resources & Expert Tips
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              After 15 years in the pool care industry, we&apos;ve learned a thing or two. Here&apos;s our collection of expert guides, troubleshooting tips, and insider knowledge to help you maintain your pool like a pro.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Comprehensive Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-semibold text-primary mb-2 block">
                          {resource.category}
                        </span>
                        <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {resource.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="py-20 bg-blue-100/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pro Tips from 15 Years of Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">How often should I have my pool serviced?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Most pools benefit from weekly maintenance during peak season (May-September) and bi-weekly or monthly service during off-season. However, every pool is different. Factors like usage, weather, trees nearby, and equipment age all play a role. We&apos;ll assess your specific situation and recommend a schedule that keeps your pool perfect without unnecessary visits.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Why is my pool turning green?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Green pools are almost always caused by algae growth, which happens when chlorine levels drop too low or the pool chemistry is unbalanced. Other factors include poor circulation, dirty filters, or insufficient sanitizer. The good news? We specialize in &quot;green-to-clean&quot; transformations and can usually restore your pool within a few days.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Do I really need professional service, or can I do it myself?</h3>
                <p className="text-gray-600 leading-relaxed">
                  You can absolutely maintain your pool yourself—if you have the time, knowledge, and commitment. However, professional service ensures consistency, catches problems early, and saves you from expensive mistakes. Many of our customers tried DIY first and came to us after realizing how much time and effort quality pool care actually requires. We make it easy so you can enjoy your pool instead of working on it.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">What&apos;s included in your weekly service?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our comprehensive weekly service includes: skimming and vacuuming, brushing walls and steps, cleaning skimmer baskets and pump baskets, testing and balancing all chemicals, inspecting equipment for issues, and adding necessary chemicals. We also provide you with a service report so you know exactly what we did and what your pool&apos;s chemistry levels are.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              We&apos;re here to help. Whether you need expert advice, want to schedule service, or have a pool emergency, we&apos;re just a call or click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20"
                >
                  Book Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
