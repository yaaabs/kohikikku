"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    name: "JB Balete",
    text: "Budget friendly food and drinks.. With a good view of the Caloocan City People's Park. Best iced coffee",
    rating: 5,
    source: "Facebook",
  },
  {
    name: "Erica Gene Caparas",
    text: "Super good ng ambiance! A place to go for me 💕",
    rating: 5,
    source: "Google",
  },
  {
    name: "Georgie Cudia",
    text: "sisig and clubhouse sandwich are must try!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Rey Martin Apostol",
    text: "Nice ambiance, good coffee and pricey cake—tiramisu didn't taste like tiramisu.",
    rating: 5,
    source: "Google",
  },
  {
    name: "pisceanrat",
    text: "A unique concept. Aesthetically pleasing since there are kicks on display which are also for sale. Liked the matcha frappe, 200, sweet floral taste. The Americano with caramel pump is good too.",
    rating: 4,
    source: "Google",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 30)
    }

    startScroll()

    scrollContainer.addEventListener("mouseenter", () => clearInterval(scrollInterval))
    scrollContainer.addEventListener("mouseleave", startScroll)

    return () => {
      clearInterval(scrollInterval)
      scrollContainer.removeEventListener("mouseenter", () => clearInterval(scrollInterval))
      scrollContainer.removeEventListener("mouseleave", startScroll)
    }
  }, [])

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Real reviews from our amazing customers
          </p>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-hidden pb-4" style={{ scrollBehavior: "smooth" }}>
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={`${testimonial.name}-${index}`}
              className="min-w-[350px] flex-shrink-0 border-border bg-card transition-all duration-300 hover:shadow-lg md:min-w-[400px]"
            >
              <CardContent className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "fill-accent text-accent" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{testimonial.source}</span>
                </div>
                <p className="mb-6 text-card-foreground leading-relaxed line-clamp-4">"{testimonial.text}"</p>
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
