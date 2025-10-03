"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface MenuCardProps {
  name: string
  description: string
  price: string
  image: string
}

export function MenuCard({ name, description, price, image }: MenuCardProps) {
  return (
    <Card className="group overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-3 flex items-start justify-between gap-2">
          <h3 className="font-serif text-2xl font-bold text-coffee-dark leading-tight">{name}</h3>
          <span className="text-xl font-bold text-coffee-accent whitespace-nowrap">{price}</span>
        </div>
        <p className="text-base text-coffee-medium leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
