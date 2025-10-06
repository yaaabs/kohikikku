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
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center py-32 px-8 md:px-16 lg:px-24" style={{background: 'rgba(139, 69, 19, 0.85)'}}>
      {/* Coffee background with opacity */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/coffee-bean-pattern.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B4423]/80 via-[#8B4513]/70 to-[#4A3B2A]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-8xl w-full">
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Sparkles className="h-6 w-6 animate-pulse" style={{color: '#D4A574'}} />
            <h2 className="font-serif text-5xl font-bold text-white text-balance md:text-6xl">
              Seasonal Specials
            </h2>
            <Sparkles className="h-6 w-6 animate-pulse" style={{color: '#D4A574'}} />
          </div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed" style={{color: '#EFE1CF'}}>
            Limited-time favorites and seasonal creations you don't want to miss
          </p>
        </div>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-none">
          {specials.map((special) => (
            <Card
              key={special.name}
              className="group relative overflow-hidden border-0 bg-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl rounded-3xl h-auto"
            >
              {/* Badge with correct styling */}
              <div className="absolute top-6 right-6 z-10 rounded-full px-4 py-2 text-sm font-bold shadow-lg" style={{backgroundColor: '#D4A574', color: 'white'}}>
                {special.badge}
              </div>

              <div className="relative h-80 overflow-hidden">
                <Image
                  src={special.image || "/placeholder.svg"}
                  alt={special.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-8">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl font-bold text-[#4A3B2A] leading-tight">{special.name}</h3>
                  <span className="text-xl font-bold whitespace-nowrap" style={{color: '#D4A574'}}>{special.price}</span>
                </div>
                <p className="text-base text-[#6B4423] leading-relaxed">{special.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
