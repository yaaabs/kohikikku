'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Navigation items with their corresponding section IDs
  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Story', href: '#about', id: 'about' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Signature Drinks', href: '#signature-drinks', id: 'signature-drinks' },
    { label: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { label: 'Visit Us', href: '#location', id: 'location' },
  ]

  // Handle scroll detection for navbar color change
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsScrolled(window.scrollY > heroBottom - 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerOffset = 80 // Account for fixed navbar height
      const elementPosition = targetElement.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    setIsOpen(false) // Close mobile menu after navigation
  }

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToSection(href)
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-amber-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm',
        className
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className={cn(
                'flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md p-2 transition-all duration-300 transform',
                'hover:scale-105 hover:shadow-lg active:scale-95',
                isScrolled 
                  ? 'focus:ring-amber-300 hover:bg-amber-700/20 hover:shadow-amber-900/20' 
                  : 'focus:ring-amber-500 hover:bg-amber-100/50 hover:shadow-amber-900/10'
              )}
              aria-label="CoffeeKicks Café - Go to home"
            >
              <Image
                src="/ck-logo-circle.png"
                alt="CoffeeKicks Café Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:rotate-12"
                priority
              />
              <span className={cn(
                'font-brand text-xl md:text-2xl font-bold transition-all duration-300',
                isScrolled ? 'text-amber-50 hover:text-white' : 'text-amber-900 hover:text-amber-800'
              )}>
                CoffeeKicks
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-300',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 transform',
                    'min-h-[44px] min-w-[44px] flex items-center justify-center',
                    'hover:scale-105 hover:shadow-md',
                    isScrolled 
                      ? 'text-amber-50 hover:bg-amber-700 hover:text-white focus:ring-amber-300 hover:shadow-amber-900/20' 
                      : 'text-amber-900 navbar-light-hover hover:text-white focus:ring-amber-500 hover:shadow-amber-900/10',
                    activeSection === item.id && (
                      isScrolled 
                        ? 'bg-amber-700 text-white shadow-lg shadow-amber-900/30' 
                        : 'text-white shadow-lg shadow-amber-900/20'
                    )
                  )}
                  style={
                    activeSection === item.id && !isScrolled 
                      ? { backgroundColor: '#BB4D00' }
                      : {}
                  }
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'inline-flex items-center justify-center p-2 rounded-md transition-all duration-300',
                'focus:outline-none focus:ring-2 focus:ring-inset transform',
                'min-h-[44px] min-w-[44px]',
                'hover:scale-110 hover:shadow-md active:scale-95',
                isScrolled 
                  ? 'text-amber-50 hover:bg-amber-700 hover:text-white focus:ring-amber-300 hover:shadow-amber-900/20' 
                  : 'text-amber-900 hover:bg-amber-100 hover:text-amber-800 focus:ring-amber-500 hover:shadow-amber-900/10'
              )}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="block h-6 w-6 transition-transform duration-200 rotate-90" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 transition-transform duration-200" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          isScrolled 
            ? 'bg-amber-900/95 backdrop-blur-md' 
            : 'bg-white/95 backdrop-blur-sm'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              onKeyDown={(e) => handleKeyDown(e, item.href)}
              className={cn(
                'block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-300',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 transform',
                'min-h-[44px] flex items-center',
                'hover:translate-x-2 hover:shadow-lg',
                isScrolled 
                  ? 'text-amber-50 hover:bg-amber-700 hover:text-white focus:ring-amber-300 hover:shadow-amber-900/30' 
                  : 'text-amber-900 navbar-light-hover hover:text-white focus:ring-amber-500 hover:shadow-amber-900/20',
                activeSection === item.id && (
                  isScrolled 
                    ? 'bg-amber-700 text-white shadow-lg shadow-amber-900/30 translate-x-2' 
                    : 'text-white shadow-lg shadow-amber-900/20 translate-x-2'
                )
              )}
              style={
                activeSection === item.id && !isScrolled 
                  ? { backgroundColor: '#BB4D00' }
                  : {}
              }
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}