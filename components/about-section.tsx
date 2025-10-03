import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">
              Our Story
            </h2>
            <div className="mb-6">
              <p className="text-2xl font-semibold text-primary italic">Coffee for Your Sole</p>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                CoffeeKicks Café is where exceptional coffee meets sneaker culture. We're not just a café—we're a
                lifestyle destination that celebrates the perfect blend of premium coffee and fresh kicks.
              </p>
              <p>
                Located in the heart of Ziti Center Mall, Caloocan, we've created a unique space where you can enjoy
                expertly crafted beverages while browsing our curated selection of sneakers and streetwear.
              </p>
              <p>
                Our mission is simple: fuel your day with flavor and kick. Whether you're here for our signature drinks,
                delicious food, or the latest drops, we're dedicated to providing an experience that energizes both your
                body and your style.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl lg:h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U9JuaazoUJJJKt7eWOZuPhbgRS6f1z.png"
              alt="CoffeeKicks Cafe interior with sneaker displays"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
