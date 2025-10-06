"use client"

import { useState, useMemo } from "react"
import { MenuCard } from "@/components/menu-card"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Complete menu data organized by category
const allMenuItems = [
  { name: "Cereal Latte", description: "Milky latte with crunchy cereal topping", price: "₱170", image: "/cereal-latte.jpg", category: "Coffee", temp: "Iced/Hot" },
  // Coffee
  { name: "Espresso", description: "Bold and intense coffee shot", price: "₱40", image: "/espresso.jpg", category: "Coffee", temp: "Hot" },
  { name: "Americano", description: "Rich espresso with hot water", price: "₱120", image: "/americano.jpg", category: "Coffee", temp: "Iced/Hot" },
  { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "₱150", image: "/cappuccino.jpg", category: "Coffee", temp: "Iced/Hot" },
  { name: "Latte", description: "Smooth espresso with steamed milk", price: "₱150", image: "/latte.jpg", category: "Coffee", temp: "Iced/Hot" },
  { name: "Vanilla Latte", description: "Latte with vanilla syrup", price: "₱160", image: "/vanilla-latte.jpg", category: "Coffee", temp: "Iced/Hot" },
  { name: "Hazelnut Latte", description: "Latte with hazelnut flavor", price: "₱160", image: "/hazelnut-latte.jpg", category: "Coffee", temp: "Iced/Hot" },
  { name: "Dark Chocolate Latte", description: "Rich dark chocolate coffee", price: "₱160", image: "/dark-choco-latte.jpg", category: "Coffee", temp: "Iced/Hot" },
  { name: "White Chocolate Latte", description: "Sweet white chocolate coffee", price: "₱160", image: "/white-choco-latte.jpg", category: "Coffee", temp: "Iced/Hot" },
  { name: "Strawberry Latte", description: "Fruity strawberry coffee blend", price: "₱160", image: "/strawberry-latte.jpg", category: "Coffee", temp: "Iced/Hot" },
  { name: "Caramel Macchiato", description: "Espresso marked with caramel", price: "₱160", image: "/caramel-macchiato.jpg", category: "Coffee", temp: "Iced/Hot" },
  { name: "Biscoff Latte", description: "Cookie butter flavored latte", price: "₱180", image: "/biscoff-latte.jpg", category: "Coffee", temp: "Iced/Hot" },
  
  // Non-Coffee
  { name: "Chocolate", description: "Rich hot chocolate drink", price: "₱150", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced/Hot" },
  { name: "Strawberry Milk", description: "Sweet strawberry milk", price: "₱150", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced/Hot" },
  { name: "Hazelnut Milk", description: "Creamy hazelnut milk", price: "₱150", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced/Hot" },
  { name: "Caramel Milk", description: "Sweet caramel milk", price: "₱150", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced/Hot" },
  { name: "Dark Chocolate Milk", description: "Rich dark chocolate milk", price: "₱150", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced/Hot" },
  { name: "White Chocolate Milk", description: "Creamy white chocolate milk", price: "₱150", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced/Hot" },
  { name: "Strawberry Soda", description: "Fizzy strawberry refresher", price: "₱150", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced" },
  { name: "Blueberry Pop", description: "Blueberry soda pop", price: "₱160", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced" },
  { name: "Strawberry Pop", description: "Strawberry soda pop", price: "₱160", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced" },
  { name: "Green Apple Pop", description: "Tangy apple soda pop", price: "₱160", image: "/honey-oat-milk-latte.jpg", category: "Non-Coffee", temp: "Iced" },
  
  // Frappe
  { name: "Java Chip Frappe", description: "Blended coffee with chocolate chips and whipped cream", price: "₱200", image: "/java-chip-frappe-with-whipped-cream.jpg", category: "Frappe", temp: "Iced" },
  { name: "Dark Chocolate Frappe", description: "Rich dark chocolate frappe", price: "₱200", image: "/dark-choco-frappe.jpg", category: "Frappe", temp: "Iced" },
  { name: "Salted Caramel Frappe", description: "Sweet and salty caramel blend", price: "₱200", image: "/Salted Caramel Frappe.jpg", category: "Frappe", temp: "Iced" },
  { name: "Matcha Frappe", description: "Premium Japanese matcha blended with milk and ice", price: "₱200", image: "/matcha-green-tea-frappe.jpg", category: "Frappe", temp: "Iced" },
  { name: "Strawberry Cream Frappe", description: "Fresh strawberry blended with cream and topped with whipped cream", price: "₱200", image: "/strawberry-cream-frappe-pink-drink.jpg", category: "Frappe", temp: "Iced" },
  { name: "Biscoff Frappe", description: "Cookie butter blended with coffee and caramel drizzle", price: "₱200", image: "/biscoff-cookie-butter-frappe.jpg", category: "Frappe", temp: "Iced" },
  
  // Rice Bowls
  { name: "Chicken Barbeque with Egg", description: "Grilled BBQ chicken with egg on rice", price: "₱200", image: "/chicken-barbeque-rice-bowl-with-egg.jpg", category: "Rice Bowls" },
  { name: "Spicy Pork Adobo with Egg", description: "Traditional Filipino adobo with a spicy kick", price: "₱200", image: "/spicy-pork-adobo-rice-bowl.jpg", category: "Rice Bowls" },
  { name: "Sisig with Egg", description: "Traditional Filipino sisig with egg", price: "₱200", image: "/sisig-with-egg.jpg", category: "Rice Bowls" },
  { name: "Spicy Corned Beef with Egg", description: "Spicy corned beef rice bowl", price: "₱200", image: "/spicy-corned-beef.jpg", category: "Rice Bowls" },
  { name: "Spam with Egg", description: "Classic spam and egg rice bowl", price: "₱180", image: "/spam-with-egg.jpg", category: "Rice Bowls" },
  
  // Pastas & Sandwiches
  { name: "Italian Spaghetti", description: "Classic Italian tomato pasta", price: "₱180", image: "/italian-spaghetti.jpg", category: "Pastas" },
  { name: "Carbonara", description: "Creamy Italian pasta with bacon and parmesan", price: "₱180", image: "/carbonara-pasta-dish.jpg", category: "Pastas" },
  { name: "Chicken Sandwich", description: "Grilled chicken sandwich", price: "₱150", image: "/chicken-sandwich.jpg", category: "Pastas" },
  { name: "Clubhouse Sandwich", description: "Triple-decker with chicken, bacon, and fresh veggies", price: "₱230", image: "/clubhouse-sandwich.jpg", category: "Pastas" },
  { name: "Tuna Sandwich", description: "Fresh tuna sandwich", price: "₱150", image: "/tuna-sandwich.jpg", category: "Pastas" },
  
  // Extras
  { name: "Extra Rice", description: "Additional serving of rice", price: "₱30", image: "/extra-rice.jpg", category: "Extras" },
  { name: "Extra Egg", description: "Add-on egg", price: "₱20", image: "/extra-egg.jpg", category: "Extras" },
]

const categories = ["All", "Coffee", "Non-Coffee", "Frappe", "Rice Bowls", "Pastas", "Extras"]

export function MenuSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    return allMenuItems.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.temp && item.temp.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <section id="menu" className="py-20 px-6 md:px-12 lg:px-20" style={{backgroundColor: '#FBF8F1'}}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 heading-section text-coffee-dark text-balance">
            Featured Menu
          </h2>
          <p className="mx-auto max-w-2xl text-body-large text-coffee-medium leading-relaxed">
            Handcrafted beverages and comfort food made with premium ingredients
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-coffee-medium" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-12 h-14 bg-white border-2 border-coffee-light/30 focus:border-coffee-accent transition-colors text-base rounded-xl shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-coffee-medium hover:text-coffee-dark transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              style={selectedCategory === category ? { backgroundColor: '#D4A574', color: 'white', borderColor: '#D4A574' } : {}}
              className={`cursor-pointer px-6 py-3 text-base font-medium transition-all duration-300 rounded-full ${
                selectedCategory === category
                  ? "shadow-md scale-105 border-transparent"
                  : "bg-white border-2 border-coffee-light/40 text-coffee-dark hover:border-coffee-accent/50 hover:bg-coffee-accent/5"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Results Count */}
        {(searchQuery || selectedCategory !== "All") && (
          <div className="mb-6 text-center">
            <p className="text-coffee-medium text-sm">
              Showing <span className="font-bold text-coffee-accent">{filteredItems.length}</span> item
              {filteredItems.length !== 1 ? "s" : ""}
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
        )}

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in-50 duration-500">
            {filteredItems.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-in fade-in-50 duration-300">
            <div className="mx-auto w-24 h-24 mb-6 rounded-full bg-coffee-light/20 flex items-center justify-center">
              <Search className="w-12 h-12 text-coffee-medium" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-coffee-dark mb-2">
              No items found
            </h3>
            <p className="text-coffee-medium mb-6">
              Try adjusting your search or filter to find what you're looking for
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
              className="px-6 py-3 bg-coffee-accent text-white rounded-full font-medium hover:bg-coffee-accent/90 transition-colors shadow-md"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
