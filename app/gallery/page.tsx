"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, HandDrawnDivider } from "@/components/floating-doodles"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Play, Palette, BookOpen, Users } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Gallery items with placeholder colors representing different activities
const galleryItems = [
  { id: 1, category: "learning", color: "peach", icon: BookOpen, title: "Reading Time", sticker: "star" as const, image: "/gallery/gallery-section/im1.png" },
  { id: 2, category: "play", color: "mint", icon: Play, title: "Outdoor Play", sticker: "sun" as const, image: "/gallery/gallery-section/im2.jpeg" },
  { id: 3, category: "art", color: "lavender", icon: Palette, title: "Art Class", sticker: "rainbow" as const, image: "/gallery/gallery-section/im3.png" },
  { id: 4, category: "group", color: "soft-yellow", icon: Users, title: "Group Activity", sticker: "heart" as const, image: "/gallery/gallery-section/im4.png" },
  { id: 5, category: "learning", color: "baby-blue", icon: BookOpen, title: "Story Time", sticker: "cloud" as const, image: "/gallery/gallery-section/im5.png" },
  { id: 6, category: "art", color: "peach", icon: Palette, title: "Crafts", sticker: "sparkle" as const, image: "/gallery/gallery-section/im6.jpg" },
  { id: 7, category: "play", color: "mint", icon: Play, title: "Games", sticker: "balloon" as const, image: "/gallery/gallery-section/im7.jpg" },
  { id: 8, category: "group", color: "lavender", icon: Users, title: "Group Play", sticker: "star" as const, image: "/gallery/gallery-section/im8.jpg" },
  { id: 9, category: "learning", color: "soft-yellow", icon: BookOpen, title: "Circle Time", sticker: "sun" as const, image: "/gallery/gallery-section/im9.jpg" },
  { id: 10, category: "play", color: "baby-blue", icon: Play, title: "Outdoor Fun", sticker: "rainbow" as const, image: "/gallery/gallery-section/im10.png" },
  { id: 11, category: "art", color: "mint", icon: Palette, title: "Painting", sticker: "heart" as const, image: "/gallery/gallery-section/im11.png" },
  { id: 12, category: "group", color: "peach", icon: Users, title: "Team Building", sticker: "cloud" as const, image: "/gallery/gallery-section/im12.png" },
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
      <div className="fixed inset-0 grain-texture z-0 opacity-50" />
      
      {/* Floating doodles */}
      <FloatingDoodles count={25} />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-peach/20 via-cream to-lavender/30" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] -z-10" />

            {/* Extra doodles */}
            <div className="absolute top-24 left-10 w-16 h-16 opacity-50 animate-float">
              <StickerIcon type="sun" className="w-full h-full drop-shadow-sm" />
            </div>
            <div className="absolute top-32 right-16 w-14 h-14 opacity-40 animate-float-slow">
              <StickerIcon type="rainbow" className="w-full h-full drop-shadow-sm" />
            </div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 opacity-60 animate-sparkle">
              <StickerIcon type="sparkle" className="w-full h-full drop-shadow-sm" />
            </div>
            
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-5 py-2.5 mb-8 shadow-sm border border-lavender/30">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold tracking-wide text-primary uppercase">Moments</span>
                </div>
                
                <h1 className="font-serif text-5xl lg:text-7xl text-primary mb-6 text-balance leading-tight">
                  Our Magical Gallery
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Every smile tells a story. Explore precious moments of learning, play, and discovery 
                  at Seventh Sense.
                </p>
              </div>
            </div>
            
            {/* Wavy bottom */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
               <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
                  <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="oklch(1 0 0)" />
               </svg>
            </div>
          </section>
          
          {/* Gallery Section */}
          <section className="py-24 bg-white relative overflow-hidden min-h-[60vh]">
            <div className="container mx-auto px-4">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-20">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-primary text-white shadow-xl scale-105"
                        : "bg-cream text-foreground/80 hover:bg-lavender/30 hover:scale-105"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              
              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8 pb-12">
                <AnimatePresence mode="popLayout">
                   {filteredItems.map((item, index) => {
                     const isLarge = index % 5 === 0
                     
                     return (
                       <motion.div
                         layout
                         initial={{ opacity: 0, scale: 0.9, y: 20 }}
                         animate={{ opacity: 1, scale: 1, y: 0 }}
                         exit={{ opacity: 0, scale: 0.9, y: 20 }}
                         transition={{ duration: 0.3, delay: index * 0.05 }}
                         key={item.id}
                         className="break-inside-avoid relative group"
                       >
                         {/* Sticker overlay */}
                         <div className="absolute -top-4 -right-4 w-12 h-12 z-20 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                           <StickerIcon type={item.sticker} className="w-full h-full drop-shadow-xl" />
                         </div>
                         
                         <div 
                           className={`relative rounded-[2rem] overflow-hidden border-[6px] border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                             isLarge ? 'aspect-[3/4]' : 'aspect-square'
                           }`}
                           style={{
                              background: `linear-gradient(135deg, oklch(0.95 0.08 ${colorMap[item.color].hue}), oklch(0.98 0.03 ${colorMap[item.color].hue}))`
                           }}
                         >
                           {/* Image */}
                           <div className="absolute inset-0">
                             <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                             {/* Gradient Overlay for Text */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                           </div>
                           
                           {/* Content bottom overlay */}
                           <div className="absolute bottom-0 left-0 right-0 p-6 text-left transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                              <h3 className="font-serif text-2xl text-white mb-2">{item.title}</h3>
                              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1">
                                 <item.icon className="w-4 h-4 text-white" />
                                 <span className="text-white text-sm font-medium capitalize">{item.category}</span>
                              </div>
                           </div>

                         </div>
                       </motion.div>
                     )
                   })}
                </AnimatePresence>
                
                {filteredItems.length === 0 && (
                   <div className="col-span-full py-20 text-center">
                      <p className="text-2xl text-muted-foreground font-serif">No memories found for this category yet.</p>
                   </div>
                )}
              </div>
            </div>
            
            {/* Wavy bottom */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
               <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
                  <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="oklch(0.97 0.015 85)" />
               </svg>
            </div>
          </section>
          
          {/* Universal CTA Section */}
          <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-gradient-to-br from-lavender/30 via-cream to-mint/20 rounded-[3rem] p-12 md:p-20 shadow-2xl max-w-5xl mx-auto text-center relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-soft-yellow/30 rounded-full blur-3xl mix-blend-multiply" />
                
                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                  <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 border border-lavender/30">
                    <StickerIcon type="sparkle" className="w-4 h-4" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">Join Us</span>
                  </div>
                  
                  <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">
                    Capture the Magic in Person
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                    Every photograph captures a moment of discovery. See it for yourself and let your child be part of the magic.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/enquire">
                      <Button className="btn-gradient-yellow text-foreground rounded-full px-10 py-8 text-xl font-bold shadow-xl hover:scale-105 transition-all">
                        Book a Visit
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="rounded-full px-10 py-8 text-xl font-bold shadow-sm hover:bg-white/50 border-2 border-primary/20 transition-all">
                        Talk to Us
                      </Button>
                    </Link>
                  </div>
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
