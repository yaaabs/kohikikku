import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const specials = [
  {
    name: "Java Chip Frappe",
    description: "Blended coffee with chocolate chips and whipped cream",
    price: "₱200",
    badge: "Bestseller",
    image: "/java-chip-frappe-with-whipped-cream.jpg",
  },
  {
    name: "Matcha Frappe",
    description: "Premium Japanese matcha blended with milk and ice",
    price: "₱200",
    badge: "New",
    image: "/matcha-green-tea-frappe.jpg",
  },
  {
    name: "Strawberry Cream Frappe",
    description: "Fresh strawberry blended with cream and topped with whipped cream",
    price: "₱200",
    badge: "Seasonal",
    image: "/strawberry-cream-frappe-pink-drink.jpg",
  },
  {
    name: "Biscoff Frappe",
    description: "Cookie butter blended with coffee and caramel drizzle",
    price: "₱200",
    badge: "Limited",
    image: "/biscoff-cookie-butter-frappe.jpg",
  },
]

export function SpecialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-dark py-32 px-6 md:px-12 lg:px-20">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/coffee-bean-pattern.jpg')] bg-repeat" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-coffee-accent animate-pulse" />
            <h2 className="font-serif text-5xl font-bold text-white text-balance md:text-6xl lg:text-7xl">
              Seasonal Specials
            </h2>
            <Sparkles className="h-8 w-8 text-coffee-accent animate-pulse" />
          </div>
          <p className="mx-auto max-w-2xl text-xl text-cream-100/90 leading-relaxed">
            Limited-time favorites and seasonal creations you don't want to miss
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {specials.map((special) => (
            <Card
              key={special.name}
              className="group relative overflow-hidden border-0 bg-white/95 backdrop-blur shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10 rounded-full bg-coffee-accent px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                {special.badge}
              </div>

              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={special.image || "/placeholder.svg"}
                  alt={special.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-serif text-2xl font-bold text-coffee-dark leading-tight">{special.name}</h3>
                  <span className="text-xl font-bold text-coffee-accent whitespace-nowrap">{special.price}</span>
                </div>
                <p className="text-base text-coffee-medium leading-relaxed">{special.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
