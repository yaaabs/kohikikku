import { MenuCard } from "@/components/menu-card"

const menuItems = [
  {
    name: "CK Signature",
    description: "Our house special blend with rich caramel notes",
    price: "₱180",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ItcgC6RTxICwCL2LPW1g64Zl3oNxHs.png",
  },
  {
    name: "Tres Leches Latte",
    description: "Creamy three-milk latte with a sweet finish",
    price: "₱200",
    image: "/tres-leches-latte-coffee-drink.jpg",
  },
  {
    name: "Sea Salt Latte",
    description: "Perfect balance of sweet and salty with smooth espresso",
    price: "₱180",
    image: "/sea-salt-latte-coffee.jpg",
  },
  {
    name: "Honey Oat Latte",
    description: "Creamy oat milk with natural honey sweetness",
    price: "₱180",
    image: "/honey-oat-milk-latte.jpg",
  },
  {
    name: "Chicken Barbeque Rice Bowl",
    description: "Grilled chicken with savory BBQ sauce over rice",
    price: "₱200",
    image: "/chicken-barbeque-rice-bowl-with-egg.jpg",
  },
  {
    name: "Spicy Pork Adobo Rice Bowl",
    description: "Traditional Filipino adobo with a spicy kick",
    price: "₱200",
    image: "/spicy-pork-adobo-rice-bowl.jpg",
  },
  {
    name: "Carbonara Pasta",
    description: "Creamy Italian pasta with bacon and parmesan",
    price: "₱180",
    image: "/carbonara-pasta-dish.jpg",
  },
  {
    name: "Clubhouse Sandwich",
    description: "Triple-decker with chicken, bacon, and fresh veggies",
    price: "₱230",
    image: "/clubhouse-sandwich.jpg",
  },
]

export function MenuSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20" style={{backgroundColor: '#FFF8F0'}}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 heading-section text-coffee-dark text-balance">
            Featured Menu
          </h2>
          <p className="mx-auto max-w-2xl text-body-large text-coffee-medium leading-relaxed">
            Handcrafted beverages and comfort food made with premium ingredients
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menuItems.map((item) => (
            <MenuCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
