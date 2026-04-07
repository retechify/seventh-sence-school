"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, SectionDoodles } from "@/components/floating-doodles"
import { Button } from "@/components/ui/button"
import { Camera, Play, Palette, BookOpen, Users } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ImageLightbox } from "@/components/image-lightbox"
import Link from "next/link"

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
  mint: { bg: "oklch(0.9 loyal 0.1 160)", hue: 160 },
  lavender: { bg: "oklch(0.9 0.08 300)", hue: 300 },
  "soft-yellow": { bg: "oklch(0.95 0.12 95)", hue: 95 },
  "baby-blue": { bg: "oklch(0.9 0.08 230)", hue: 230 },
}

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  
  const allImages = galleryItems.map(item => item.image)
  
  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background grain texture */}
      <div className="fixed inset-0 grain-texture z-0 opacity-40 pointer-events-none" />
      
      {/* Floating doodles */}
      <FloatingDoodles count={25} />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-peach/30 via-cream/80 to-lavender/30 -z-10" />
            
            <SectionDoodles className="opacity-40" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-[100px] -z-10" />

            {/* Extra doodles */}
            <div className="absolute top-24 left-10 w-20 h-20 opacity-40 animate-float hidden md:block">
              <StickerIcon type="sparkle" className="w-full h-full drop-shadow-sm" />
            </div>
            <div className="absolute top-32 right-16 w-16 h-16 opacity-30 animate-float-slow hidden md:block">
              <StickerIcon type="rainbow" className="w-full h-full drop-shadow-sm" />
            </div>
            <div className="absolute bottom-20 left-1/4 w-14 h-14 opacity-50 animate-sparkle hidden md:block">
               <StickerIcon type="star" className="w-full h-full shadow-sm" />
            </div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-20 animate-pulse hidden md:block">
               <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-4xl mx-auto space-y-6">
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-5 py-2.5 mb-2 shadow-sm border border-white/50"
                >
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold tracking-widest text-primary uppercase">Moments Of Joy</span>
                </motion.div>
                
                <h1 className="font-semibold text-6xl lg:text-8xl text-primary text-balance leading-tight tracking-tight">
                  Our Happy <span className="font-serif italic text-peach-700 drop-shadow-sm">World</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                  Step inside and witness the magic of childhood. Real growth, real friendships, and endless discovery.
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
            <div className="absolute inset-0 bg-gradient-to-b from-white via-lavender/5 to-white -z-10" />
            <SectionDoodles className="opacity-20" />
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
              
              {/* Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-12 auto-rows-[250px]">
                <AnimatePresence mode="popLayout">
                   {filteredItems.map((item, index) => {
                     // Define complex bento spans based on index patterns
                     const spans = [
                       "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2", // 0: Large square
                       "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1", // 1: Small
                       "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-2", // 2: Tall
                       "col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-1", // 3: Small (wide on mobile)
                       "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1", // 4: Wide
                       "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1", // 5: Small
                       "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1", // 6: Small
                       "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2", // 7: Large
                       "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-2", // 8: Tall
                       "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1", // 9: Small
                       "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1", // 10: Small
                       "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1", // 11: Small
                     ][index % 12] || "col-span-1 lg:col-span-1 lg:row-span-1"
                     
                     // Random rotation for the "fun" feel
                     const rotation = (index % 3 - 1) * 2; // -2, 0, or 2 degrees

                     return (
                       <motion.div
                         layout
                         initial={{ opacity: 0, scale: 0.8, rotate: rotation * 2 }}
                         animate={{ opacity: 1, scale: 1, rotate: rotation }}
                         exit={{ opacity: 0, scale: 0.8, rotate: rotation * 2 }}
                         whileHover={{ 
                           scale: 1.02, 
                           rotate: 0,
                           zIndex: 20,
                           transition: { duration: 0.4, ease: "easeOut" }
                         }}
                         transition={{ duration: 0.5, delay: index * 0.05 }}
                         key={item.id}
                         className={`relative group cursor-pointer ${spans}`}
                         onClick={() => setSelectedIdx(galleryItems.findIndex(i => i.id === item.id))}
                       >
                         {/* Sticker overlay - more organic placement */}
                         <motion.div 
                           className="absolute -top-6 -right-6 w-16 h-16 z-30 pointer-events-none drop-shadow-2xl"
                           animate={{ 
                             y: [0, -10, 0],
                             rotate: [rotation, rotation + 10, rotation]
                           }}
                           transition={{ 
                             duration: 4, 
                             repeat: Infinity,
                             delay: index * 0.3
                           }}
                         >
                           <StickerIcon type={item.sticker} className="w-full h-full transform hover:scale-125 transition-transform" />
                         </motion.div>
                         
                          <div 
                            className="relative h-full w-full rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border-[6px] sm:border-[10px] border-white shadow-2xl transition-all duration-700 bg-white"
                          >
                            {/* Color hue background for the "frame" feel */}
                            <div 
                              className="absolute inset-0 opacity-20"
                              style={{
                                background: `linear-gradient(135deg, oklch(0.95 0.08 ${colorMap[item.color]?.hue || 100}), oklch(0.98 0.03 ${colorMap[item.color]?.hue || 100}))`
                              }}
                            />

                            {/* Image */}
                            <div className="absolute inset-1.5 sm:inset-2 overflow-hidden rounded-[2rem] sm:rounded-[2.8rem]">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115" 
                              />
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                            </div>
                            
                            {/* Title overlay always visible but enhanced on hover */}
                            <div className="absolute bottom-4 left-6 right-6 sm:bottom-6 sm:left-8 sm:right-8 z-10 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                               <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 sm:px-4 sm:py-1.5 border border-white/30 mb-2 sm:mb-3">
                                  <item.icon className="w-3 h-3 sm:w-4 sm:w-4 text-white" />
                                  <span className="text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">{item.category}</span>
                               </div>
                               <h3 className="font-bold text-lg sm:text-2xl text-white tracking-tight drop-shadow-md leading-tight">{item.title}</h3>
                            </div>

                            {/* View detail indicator */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                               <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/40">
                                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                               </div>
                            </div>
                          </div>
                       </motion.div>
                     )
                   })}
                </AnimatePresence>
                
                {filteredItems.length === 0 && (
                   <div className="col-span-full py-20 text-center">
                      <p className="text-2xl text-muted-foreground font-semibold">No memories found for this category yet.</p>
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
          <section className="py-32 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-lavender/5 to-cream -z-10" />
            <SectionDoodles className="opacity-30" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-gradient-to-br from-lavender/30 via-cream to-mint/20 rounded-[3rem] p-12 md:p-20 shadow-2xl max-w-5xl mx-auto text-center relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-soft-yellow/30 rounded-full blur-3xl mix-blend-multiply" />
                
                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                  <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 border border-lavender/30">
                    <StickerIcon type="sparkle" className="w-4 h-4" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">Join Us</span>
                  </div>
                  
                  <h2 className="font-semibold text-4xl md:text-5xl text-primary text-balance">
                    Capture the Magic in Person
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                    Every photograph captures a moment of discovery. See it for yourself and let your child be part of the magic.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/enquire">
                      <Button className="btn-gradient-yellow text-primary rounded-full px-10 py-8 text-xl font-bold shadow-xl hover:scale-105 transition-all">
                        Book a Free School Visit
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
        
        <ImageLightbox 
          images={allImages}
          currentIdx={selectedIdx}
          onClose={() => setSelectedIdx(null)}
        />
      </div>
    </div>
  )
}
