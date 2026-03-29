"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, HandDrawnDivider } from "@/components/floating-doodles"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Play, Palette, BookOpen, Users } from "lucide-react"
import { useState } from "react"

// Gallery items with placeholder colors representing different activities
const galleryItems = [
  { id: 1, category: "learning", color: "peach", icon: BookOpen, title: "Reading Time", sticker: "star" as const },
  { id: 2, category: "play", color: "mint", icon: Play, title: "Outdoor Play", sticker: "sun" as const },
  { id: 3, category: "art", color: "lavender", icon: Palette, title: "Art Class", sticker: "rainbow" as const },
  { id: 4, category: "group", color: "soft-yellow", icon: Users, title: "Group Activity", sticker: "heart" as const },
  { id: 5, category: "learning", color: "baby-blue", icon: BookOpen, title: "Story Time", sticker: "cloud" as const },
  { id: 6, category: "art", color: "peach", icon: Palette, title: "Crafts", sticker: "sparkle" as const },
  { id: 7, category: "play", color: "mint", icon: Play, title: "Games", sticker: "balloon" as const },
  { id: 8, category: "group", color: "lavender", icon: Users, title: "Circle Time", sticker: "star" as const },
  { id: 9, category: "art", color: "soft-yellow", icon: Palette, title: "Painting", sticker: "rainbow" as const },
  { id: 10, category: "learning", color: "baby-blue", icon: BookOpen, title: "Numbers", sticker: "sparkle" as const },
  { id: 11, category: "play", color: "peach", icon: Play, title: "Music & Dance", sticker: "heart" as const },
  { id: 12, category: "group", color: "mint", icon: Users, title: "Show & Tell", sticker: "sun" as const },
]

const categories = [
  { id: "all", label: "All Photos" },
  { id: "learning", label: "Learning" },
  { id: "play", label: "Play Time" },
  { id: "art", label: "Creative Arts" },
  { id: "group", label: "Group Activities" },
]

const colorMap: Record<string, { bg: string; hue: number }> = {
  peach: { bg: "oklch(0.92 0.08 50)", hue: 50 },
  mint: { bg: "oklch(0.9 0.1 160)", hue: 160 },
  lavender: { bg: "oklch(0.9 0.08 300)", hue: 300 },
  "soft-yellow": { bg: "oklch(0.95 0.12 95)", hue: 95 },
  "baby-blue": { bg: "oklch(0.9 0.08 230)", hue: 230 },
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background grain texture */}
      <div className="fixed inset-0 grain-texture z-0" />
      
      {/* Floating doodles */}
      <FloatingDoodles count={25} />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-peach/30 via-cream to-lavender/20" />
            
            {/* Extra doodles */}
            <div className="absolute top-16 left-10 w-12 h-12 opacity-50 animate-float">
              <StickerIcon type="sun" className="w-full h-full" />
            </div>
            <div className="absolute top-24 right-16 w-14 h-14 opacity-40 animate-float-slow">
              <StickerIcon type="rainbow" className="w-full h-full" />
            </div>
            <div className="absolute top-1/2 left-8 w-8 h-8 opacity-40 animate-sparkle">
              <StickerIcon type="sparkle" className="w-full h-full" />
            </div>
            <div className="absolute bottom-32 right-10 w-10 h-10 opacity-50 animate-float">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 opacity-30 animate-float-slow">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-mint/40 rounded-full px-4 py-2 mb-6">
                  <Camera className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Memories</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 text-balance">
                  Gallery
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Every Smile Tells a Story. Explore precious moments of learning, play, and discovery 
                  at Seventh sense school of arts.
                </p>
              </div>
            </div>
            
            {/* Wavy bottom */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
                <path
                  d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
                  fill="oklch(0.97 0.015 85)"
                />
              </svg>
            </div>
          </section>
          
          {/* Gallery Section */}
          <section className="py-20 bg-cream relative overflow-hidden">
            {/* Background doodles */}
            <div className="absolute top-20 left-8 w-10 h-10 opacity-30 animate-float">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            <div className="absolute top-40 right-16 w-8 h-8 opacity-40 animate-sparkle">
              <StickerIcon type="sparkle" className="w-full h-full" />
            </div>
            <div className="absolute bottom-32 left-12 w-12 h-12 opacity-30 animate-float-slow">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 right-10 w-6 h-6 opacity-50 animate-float">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            <div className="absolute top-1/3 left-6 w-8 h-8 opacity-40 animate-sparkle">
              <StickerIcon type="moon" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      activeCategory === category.id
                        ? "btn-gradient-purple text-white shadow-lg"
                        : "bg-white text-foreground/70 hover:bg-lavender/30 shadow-md"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              
              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {filteredItems.map((item, index) => {
                  const color = colorMap[item.color]
                  const isLarge = index % 5 === 0
                  
                  return (
                    <div
                      key={item.id}
                      className="break-inside-avoid group relative"
                    >
                      {/* Sticker overlay */}
                      <div className="absolute -top-3 -right-2 w-8 h-8 z-10 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        <StickerIcon type={item.sticker} className="w-full h-full drop-shadow-md" />
                      </div>
                      
                      <div 
                        className={`relative rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                          isLarge ? 'aspect-[3/4]' : 'aspect-square'
                        }`}
                        style={{ background: `linear-gradient(135deg, ${color.bg}, oklch(0.95 0.05 ${color.hue}))` }}
                      >
                        {/* Content placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-white/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                              <item.icon className="w-8 h-8 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-foreground/70">{item.title}</span>
                          </div>
                        </div>
                        
                        {/* Overlay on hover with heart */}
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                          <div className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <StickerIcon type="heart" className="w-full h-full" />
                          </div>
                        </div>
                        
                        {/* Small stars decoration */}
                        <div className="absolute top-3 left-3 w-5 h-5 opacity-50">
                          <StickerIcon type="sparkle" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          
          {/* Highlight Banner */}
          <section className="py-20 bg-gradient-to-br from-soft-yellow/40 via-cream to-mint/30 relative overflow-hidden">
            {/* Doodles */}
            <div className="absolute top-10 left-10 w-14 h-14 opacity-30 animate-float-slow">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute top-16 right-16 w-10 h-10 opacity-50 animate-sparkle">
              <StickerIcon type="sparkle" className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 right-10 w-12 h-12 opacity-40 animate-float">
              <StickerIcon type="rainbow" className="w-full h-full" />
            </div>
            <div className="absolute bottom-16 left-16 w-8 h-8 opacity-50 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            <div className="absolute top-1/2 left-8 w-6 h-6 opacity-40 animate-float-slow">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-2">
                  <StickerIcon type="sparkle" className="w-5 h-5" />
                  <span className="text-sm font-medium text-primary">Capture the Magic</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-primary text-balance">
                  A Picture-Perfect Journey in Learning & Fun
                </h2>
                
                <HandDrawnDivider />
                
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Every photograph captures a moment of discovery, joy, and growth. 
                  These are the memories that last a lifetime.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/enquire">
                    <Button className="btn-gradient-yellow text-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                      Schedule a Visit
                    </Button>
                  </Link>
                  <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-primary/30 hover:bg-lavender/30 transition-all">
                    View All Photos
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
