"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { RainbowLogo } from "./rainbow-logo"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-cream/90 backdrop-blur-md border-b border-lavender/30 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity" aria-label="Seventh Sense School of Arts - Home">
            <RainbowLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link href="/enquire">
              <Button className="btn-gradient-yellow text-foreground rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent">
                Book a Free School Visit
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl bg-lavender/30 hover:bg-lavender/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-lavender/30">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-xl hover:bg-lavender/20"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/enquire"
                className="font-medium text-amber-700 bg-soft-yellow/40 hover:bg-soft-yellow/60 transition-colors py-2 px-4 rounded-xl text-center mt-2 border border-soft-yellow"
                onClick={() => setIsOpen(false)}
              >
                Book a Free School Visit
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
