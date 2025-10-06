import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Fraunces } from "next/font/google"
import { Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// Modern, highly readable body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Elegant display font for headings with coffee shop vibes
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
})

// Bold condensed font for logos and impact text
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CoffeeKicks Café - Fuel Your Day with Flavor and Kick",
  description: "Premium coffee shop serving signature drinks, rice bowls, and fresh pastries",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${fraunces.variable} ${bebasNeue.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
