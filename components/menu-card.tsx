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
    <Card className="overflow-hidden border shadow-md hover:shadow-lg transition-all">
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-coffee-dark">{name}</h3>
          {/* Updated price styling to match Seasonal Specials */}
          <span className="text-xl font-bold whitespace-nowrap" style={{color: '#D4A574'}}>{price}</span>
        </div>
        <p className="text-coffee-medium text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
