import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#53311C' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 items-start">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start md:-mt-24">
            <Image
              src="/ck-logo-with-text-no-bg.png"
              alt="CoffeeKicks Café Logo"
              width={500}
              height={200}
              className="filter brightness-0 invert transition-transform duration-300 hover:scale-105"
              style={{ width: '100%', height: 'auto', maxWidth: '240px' }}
              priority
            />
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-display font-semibold text-lg text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#menu"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="#specials"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Specials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-display font-semibold text-lg text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-white/80">(02) 8123-4567</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-white/80">hello@coffeekickscafe.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-display font-semibold text-lg text-white">Follow Us</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://www.facebook.com/p/CoffeeKicks-Cafe-61560849508015/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all hover:bg-white/20 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/coffeekickscafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all hover:bg-white/20 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} CoffeeKicks Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
