import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bist&apos;s Aquivida Pool Care</h3>
            <p className="text-gray-300 mb-4">
              The most reliable, on-time pool service. All-in-one pool care you can trust.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:209-730-7313"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Call us at 209-730-7313"
              >
                <Phone className="h-5 w-5" />
                <span>209-730-7313</span>
              </a>
              <a
                href="mailto:jeff@bistsaquividapoolcare.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Email us at jeff@bistsaquividapoolcare.com"
              >
                <Mail className="h-5 w-5" />
                <span>jeff@bistsaquividapoolcare.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="/book"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Book Now
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bist&apos;s Aquivida Pool Care. All rights reserved.</p>
          <p className="mt-2">Licensed & Insured | On-Time Guarantee</p>
        </div>
      </div>
    </footer>
  )
}
