"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/resources", label: "Resources" },
    { href: "/book", label: "Book Now" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/"
              className="flex items-center gap-2 group" 
              aria-label="Bist's Aquivida Pool Care - Home"
            >
              <div className="relative">
                <Waves className="h-8 w-8 text-primary group-hover:text-primary-dark transition-colors" />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold text-primary leading-tight">
                  Bist&apos;s Aquivida
                </span>
                <span className="text-xs font-medium text-gray-600 leading-tight">
                  Pool Care
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => {
                document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
              }}
              aria-label="Get a free quote"
            >
              Get a Free Quote
            </Button>
            <a href="/book">
              <Button 
                variant="outline" 
                size="sm"
                aria-label="Book a service call"
              >
                Book a Service Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent onClose={() => setMobileMenuOpen(false)} className="bg-white h-full opacity-100">
          <div className="flex flex-col gap-6 p-6 bg-white h-full opacity-100">
            {/* Mobile CTAs at top */}
            <div className="flex flex-col gap-3 border-b pb-6">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
                }}
                aria-label="Get a free quote"
              >
                Get a Free Quote
              </Button>
              <a href="/book" className="w-full">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Book a service call"
                >
                  Book a Service Call
                </Button>
              </a>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
