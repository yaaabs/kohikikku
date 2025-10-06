"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const signatureDrinks = [
  {
    name: "Honey Oat",
    description: "Creamy oat milk with natural honey sweetness",
    price: "₱180",
    temp: "Iced/Hot",
    badge: "Barista's Pick",
    image: "/honey-oat-milk-latte.jpg",
  },
  {
    name: "Sea Salt Latte",
    description: "Perfect balance of sweet and salty with smooth espresso",
    price: "₱180",
    temp: "Iced/Hot",
    badge: "Best Seller",
    image: "/sea-salt-latte-coffee.jpg",
  },
  {
    name: "CK Signature",
    description: "Our house special blend with rich caramel notes",
    price: "₱180",
    temp: "Iced/Hot",
    badge: "Signature",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ItcgC6RTxICwCL2LPW1g64Zl3oNxHs.png",
  },
  {
    name: "Cereal Latte",
    description: "Nostalgic cereal milk flavor meets premium espresso",
    price: "₱180",
    temp: "Iced/Hot",
    badge: "Fan Favorite",
    image: "/cereal-latte.jpg",
  },
  {
    name: "Tres Leches",
    description: "Creamy three-milk latte with a sweet finish",
    price: "₱200",
    temp: "Iced/Hot",
    badge: "Premium",
    image: "/tres-leches-latte-coffee-drink.jpg",
  },
]

export function SpecialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === signatureDrinks.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev === 0 ? signatureDrinks.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev === signatureDrinks.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section id="signature-drinks" className="relative overflow-hidden min-h-screen flex flex-col justify-center py-32 px-8 md:px-16 lg:px-24" style={{background: 'rgba(139, 69, 19, 0.85)'}}>
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
              Signature Drinks
            </h2>
            <Sparkles className="h-6 w-6 animate-pulse" style={{color: '#D4A574'}} />
          </div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed" style={{color: '#EFE1CF'}}>
            Our most unique and premium handcrafted beverages
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 mb-8">
          {signatureDrinks.map((drink, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl rounded-3xl h-auto cursor-pointer"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6 z-10 rounded-full px-4 py-2 text-sm font-bold shadow-lg" style={{backgroundColor: '#D4A574', color: 'white'}}>
                {drink.badge}
              </div>

              <div className="relative h-72 overflow-hidden">
                <Image
                  src={drink.image || "/placeholder.svg"}
                  alt={drink.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold text-[#4A3B2A] leading-tight">{drink.name}</h3>
                  <span className="text-lg font-bold whitespace-nowrap" style={{color: '#D4A574'}}>{drink.price}</span>
                </div>
                <Badge variant="outline" className="mb-2 border-[#D4A574] text-[#D4A574] text-xs">
                  {drink.temp}
                </Badge>
                <p className="text-sm text-[#6B4423] leading-relaxed">{drink.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden relative">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {signatureDrinks.map((drink, index) => (
                <div key={index} className="min-w-full px-4">
                  <Card className="overflow-hidden border-0 bg-white shadow-2xl rounded-3xl mx-auto max-w-md">
                    {/* Badge */}
                    <div className="absolute top-6 right-6 z-10 rounded-full px-4 py-2 text-sm font-bold shadow-lg" style={{backgroundColor: '#D4A574', color: 'white'}}>
                      {drink.badge}
                    </div>

                    <div className="relative h-96 overflow-hidden">
                      <Image
                        src={drink.image || "/placeholder.svg"}
                        alt={drink.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-8">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <h3 className="font-serif text-3xl font-bold text-[#4A3B2A] leading-tight">{drink.name}</h3>
                        <span className="text-2xl font-bold whitespace-nowrap" style={{color: '#D4A574'}}>{drink.price}</span>
                      </div>
                      <Badge variant="outline" className="mb-3 border-[#D4A574] text-[#D4A574]">
                        {drink.temp}
                      </Badge>
                      <p className="text-base text-[#6B4423] leading-relaxed">{drink.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
            aria-label="Previous drink"
          >
            <ChevronLeft className="h-6 w-6 text-[#4A3B2A]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
            aria-label="Next drink"
          >
            <ChevronRight className="h-6 w-6 text-[#4A3B2A]" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {signatureDrinks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-[#D4A574]" : "w-3 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to drink ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
