"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Your &apos;Aquivida&apos; Service Call
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Pick a time that works for you. We&apos;ll send a confirmation
              email right away.
            </p>
          </div>

          {/* Calendly Placeholder */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 text-center">
                <p className="text-xl font-semibold text-gray-500">
                  [Calendly Embed Goes Here]
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  This is where the Calendly booking widget will be embedded
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
