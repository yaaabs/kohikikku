import { Button } from "@/components/ui/button"
import { Clock, MapPin, Navigation } from "lucide-react"

export function LocationSection() {
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8!2d120.9909!3d14.6489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5e8c8c8c8c8%3A0x1234567890abcdef!2sCoffee%20Kicks%20Cafe!5e0!3m2!1sen!2sph!4v1234567890!5m2!1sen!2sph&q=Coffee+Kicks+Cafe+Ziti+Center+Mall+Caloocan"

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Coffee+Kicks+Cafe,+JXXR%2B353,+Ziti+Center+Mall,+Grace+Park+East,+Caloocan,+Metro+Manila,+Philippines"

  return (
    <section id="location" className="py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#FBF8F1' }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 heading-section text-coffee-dark text-balance">
            Visit Us
          </h2>
          <p className="mx-auto max-w-2xl text-body-large text-coffee-medium">
            We're here to serve you the perfect cup
          </p>
        </div>

        <div className="mb-8 text-center lg:text-left">
          <h3 className="mb-2 text-brand text-coffee-dark">Coffee Kicks Café</h3>
          <p className="flex items-center justify-center gap-2 text-body text-coffee-medium lg:justify-start">
            <MapPin className="h-5 w-5 text-coffee-accent" />
            JXXR+353, Ziti Center Mall, Grace Park East, Caloocan, Metro Manila
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr] lg:gap-12">
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 lg:h-[500px]">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
              title="CoffeeKicks Café Location"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            {/* Hours Card */}
            <div className="rounded-2xl p-6 shadow-lg ring-1 ring-black/5" style={{ backgroundColor: 'white' }}>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full p-2" style={{ backgroundColor: 'rgba(139, 69, 19, 0.1)' }}>
                  <Clock className="h-6 w-6 text-[#8B4513]" />
                </div>
                <h3 className="heading-card text-coffee-dark">Opening Hours</h3>
              </div>
              <div className="space-y-2 text-[#6d4c41]">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="group w-full bg-[#8B4513] text-white hover:bg-[#6B3410] text-lg py-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Navigation className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Get Directions
              </a>
            </Button>

            {/* Contact Info */}
            <div className="rounded-2xl p-6 shadow-lg ring-1 ring-black/5" style={{ backgroundColor: 'white' }}>
              <div className="space-y-3 text-sm text-[#6d4c41]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#3e2723]">Phone:</span>
                  <span>(02) 1234-5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#3e2723]">Email:</span>
                  <span>hello@coffeekicks.ph</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
