import { Button } from "@/components/ui/button"
import { ShoppingCart, MenuIcon } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#6B3410]">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ebyhZ6YaMrYs8rNIpsvZCFTX7mnVoG.png"
          alt="CoffeeKicks Café interior"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="mb-12 animate-fade-in">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ReTlitDJBfNwnhL3jmhQz4t6whtuMo.png"
            alt="CoffeeKicks Café Logo"
            width={400}
            height={200}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        <h1 className="mb-8 max-w-4xl animate-fade-in heading-hero text-white text-balance [animation-delay:200ms] drop-shadow-2xl">
          Fuel your day with flavor and kick
        </h1>

        <p className="mb-10 max-w-2xl animate-fade-in text-body-large text-white/90 [animation-delay:300ms] drop-shadow-lg font-light">
          Experience premium coffee, signature drinks, and delicious comfort food at CoffeeKicks Café
        </p>

        <div className="flex flex-col gap-4 animate-fade-in sm:flex-row [animation-delay:400ms]">
          <Button
            size="lg"
            className="group bg-white text-coffee-dark hover:bg-cream-50 font-display font-semibold text-lg px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl"
          >
            <ShoppingCart className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
            Order Online
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#8B4513] text-lg px-10 py-7 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <MenuIcon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            See Menu
          </Button>
        </div>
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </section>
  )
}
