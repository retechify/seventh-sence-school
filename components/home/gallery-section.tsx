"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StickerIcon } from "@/components/floating-doodles"
import { Camera, BookOpen, Play, Palette, Users, Sparkle } from "lucide-react"
import { motion } from "framer-motion"

const homeGalleryItems = [
  { id: 1, category: "learning", color: "peach", icon: BookOpen, title: "Fun Learning", sticker: "star" as const, hue: 50, size: "large", image: "/gallery/gallery-section/image-1.jpg" },
  { id: 2, category: "play", color: "mint", icon: Play, title: "Outdoor Play", sticker: "sun" as const, hue: 160, size: "small", image: "/gallery/gallery-section/image-2.jpg" },
  { id: 3, category: "art", color: "lavender", icon: Palette, title: "Creative Arts", sticker: "rainbow" as const, hue: 300, size: "small", image: "/gallery/gallery-section/image-3.jpg" },
  { id: 4, category: "group", color: "soft-yellow", icon: Users, title: "Circle Time", sticker: "heart" as const, hue: 95, size: "tall", image: "/gallery/gallery-section/image-4.jpg" },
  { id: 5, category: "learning", color: "baby-blue", icon: BookOpen, title: "Story Telling", sticker: "cloud" as const, hue: 230, size: "small", image: "/gallery/gallery-section/image-5.jpg" },
  { id: 6, category: "play", color: "peach", icon: Play, title: "Music & Dance", sticker: "balloon" as const, hue: 50, size: "small", image: "/gallery/gallery-section/image-6.jpg" },
]

export function GallerySection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-20 left-10 w-12 h-12 opacity-30 animate-float">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-10 w-14 h-14 opacity-30 animate-float-slow">
        <StickerIcon type="rainbow" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-lavender/40 rounded-full px-4 py-2 mb-4">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Gallery</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Capture the Magic of Every Moment
            </h2>
            <p className="text-muted-foreground text-lg">
              Take a peek into the wonderful world of learning, play, and discovery 
              at Seventh sense school of arts.
            </p>
          </div>
          
          <Link href="/gallery">
            <Button variant="outline" className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-primary/30 hover:bg-lavender/30 transition-all">
              View All Photos
            </Button>
          </Link>
        </div>

        {/* Bento-style Gallery Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]"
        >
          {homeGalleryItems.map((item, index) => {
            const gridClasses = {
              large: "col-span-2 row-span-2",
              tall: "col-span-1 row-span-2",
              small: "col-span-1 row-span-1",
            }[item.size]

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative rounded-[2rem] overflow-hidden shadow-lg transition-all duration-300 ${gridClasses}`}
                style={{
                  background: `linear-gradient(135deg, oklch(0.94 0.08 ${item.hue}), oklch(0.97 0.04 ${item.hue}))`
                }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30" />
                </div>

                {/* Sticker overlay */}
                <div className="absolute -top-1 -right-1 w-12 h-12 z-10 p-2 transform rotate-12 group-hover:rotate-0 transition-transform">
                  <StickerIcon type={item.sticker} className="w-full h-full drop-shadow-md" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 shadow-sm">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl mb-1">{item.title}</h3>
                  <span className="text-xs font-medium uppercase tracking-wider opacity-80">{item.category}</span>
                </div>

                {/* Decorative sparkles */}
                <div className="absolute bottom-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-40 transition-opacity">
                  <Sparkle className="w-full h-full text-white" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
