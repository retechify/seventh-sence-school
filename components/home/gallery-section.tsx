"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StickerIcon } from "@/components/floating-doodles"
import { Camera, BookOpen, Play, Palette, Users, Sparkle } from "lucide-react"

const homeGalleryItems = [
  { id: 1, category: "learning", color: "peach", icon: BookOpen, title: "Fun Learning", sticker: "star" as const, hue: 50, size: "large" },
  { id: 2, category: "play", color: "mint", icon: Play, title: "Outdoor Play", sticker: "sun" as const, hue: 160, size: "small" },
  { id: 3, category: "art", color: "lavender", icon: Palette, title: "Creative Arts", sticker: "rainbow" as const, hue: 300, size: "small" },
  { id: 4, category: "group", color: "soft-yellow", icon: Users, title: "Circle Time", sticker: "heart" as const, hue: 95, size: "tall" },
  { id: 5, category: "learning", color: "baby-blue", icon: BookOpen, title: "Story Telling", sticker: "cloud" as const, hue: 230, size: "small" },
  { id: 6, category: "play", color: "peach", icon: Play, title: "Music & Dance", sticker: "balloon" as const, hue: 50, size: "small" },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {homeGalleryItems.map((item, index) => {
            const gridClasses = {
              large: "col-span-2 row-span-2",
              tall: "col-span-1 row-span-2",
              small: "col-span-1 row-span-1",
            }[item.size]

            return (
              <div
                key={item.id}
                className={`group relative rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${gridClasses}`}
                style={{
                  background: `linear-gradient(135deg, oklch(0.94 0.08 ${item.hue}), oklch(0.97 0.04 ${item.hue}))`
                }}
              >
                {/* Sticker overlay */}
                <div className="absolute -top-1 -right-1 w-12 h-12 z-10 p-2 transform rotate-12 group-hover:rotate-0 transition-transform">
                  <StickerIcon type={item.sticker} className="w-full h-full drop-shadow-md" />
                </div>

                {/* Content placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-1">{item.title}</h3>
                  <span className="text-sm font-medium text-muted-foreground capitalize">{item.category}</span>
                </div>

                {/* Decorative sparkles */}
                <div className="absolute bottom-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-40 transition-opacity">
                  <Sparkle className="w-full h-full text-primary" />
                </div>
                
                {/* Hover overlay with heart */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100">
                    <StickerIcon type="heart" className="w-full h-full" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
