"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form data:", data)
    // In a real app, you would send this to your API
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question? Need a quote? Want to schedule service? We&apos;re here to help. Reach out through any of the methods below, and we&apos;ll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="p-6 text-center">
              <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a
                href="tel:209-730-7313"
                className="text-primary hover:text-primary-dark font-semibold"
              >
                209-730-7313
              </a>
              <p className="text-sm text-gray-600 mt-2">Mon-Sat: 7AM-7PM</p>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <a
                href="mailto:jeff@bistsaquividapoolcare.com"
                className="text-primary hover:text-primary-dark font-semibold break-all"
              >
                jeff@bistsaquividapoolcare.com
              </a>
              <p className="text-sm text-gray-600 mt-2">We respond within 24 hours</p>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Service Areas</h3>
              <p className="text-sm text-gray-600">
                Rocklin, Roseville, Lincoln, Citrus Heights, Orangevale, Antelope, Granite Bay, Placer County, Sacramento County
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">
                Same-day quotes available. Emergency service available for urgent issues.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below, and we&apos;ll get back to you as soon as possible. For urgent matters, please call us directly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="John Doe"
                      className={errors.name ? "border-red-500" : ""}
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@example.com"
                        className={errors.email ? "border-red-500" : ""}
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="(209) 730-7313"
                        className={errors.phone ? "border-red-500" : ""}
                        aria-required="true"
                        aria-invalid={errors.phone ? "true" : "false"}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="What can we help you with?"
                      className={errors.subject ? "border-red-500" : ""}
                      aria-required="true"
                      aria-invalid={errors.subject ? "true" : "false"}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500" role="alert">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us about your pool, your needs, or any questions you have..."
                      rows={6}
                      className={errors.message ? "border-red-500" : ""}
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 bg-blue-100/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Reach Out?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Free Consultations</h3>
                <p className="text-gray-600">
                  Not sure what your pool needs? We offer free consultations to assess your situation and provide honest, expert advice—no obligation.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Emergency Service</h3>
                <p className="text-gray-600">
                  Pool emergency? We understand that some problems can&apos;t wait. We offer emergency service for urgent issues that need immediate attention.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Personalized Service</h3>
                <p className="text-gray-600">
                  Every pool is unique. We take the time to understand your specific needs, preferences, and budget to create a service plan that works for you.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">No Pressure, Just Help</h3>
                <p className="text-gray-600">
                  Have questions? Need advice? We&apos;re here to help, whether you&apos;re ready to book service or just exploring your options. No hard sell, just honest expertise.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
