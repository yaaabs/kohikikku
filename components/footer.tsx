import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">CoffeeKicks Café</h3>
            <p className="text-primary-foreground/80 leading-relaxed">Coffee for Your Sole</p>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">Fuel your day with flavor and kick.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#menu"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="#specials"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Specials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">(02) 8123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">hello@coffeekickscafe.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/p/CoffeeKicks-Cafe-61560849508015/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-foreground/10 p-3 transition-all hover:bg-primary-foreground/20 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/coffeekickscafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-foreground/10 p-3 transition-all hover:bg-primary-foreground/20 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} CoffeeKicks Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
