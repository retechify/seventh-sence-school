"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StickerIcon, SectionDoodles } from "@/components/floating-doodles"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-lavender/20 to-peach/30" />
      
      {/* Section-specific doodles */}
      <SectionDoodles />
      
      {/* Extra floating elements */}
      <div className="absolute top-20 left-[10%] w-12 h-12 opacity-60 animate-float">
        <StickerIcon type="sun" className="w-full h-full" />
      </div>
      <div className="absolute top-32 right-[15%] w-14 h-14 opacity-50 animate-float-slow">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-[5%] w-8 h-8 opacity-50 animate-sparkle">
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 right-[8%] w-10 h-10 opacity-40 animate-float">
        <StickerIcon type="balloon" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-[20%] w-6 h-6 opacity-50 animate-sparkle">
        <StickerIcon type="star" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Rainbow above heading */}
            <div className="flex justify-center lg:justify-start">
              <motion.div 
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-24 h-12 animate-float"
              >
                <StickerIcon type="rainbow" className="w-full h-full" />
              </motion.div>
            </div>
            
            {/* Decorative sparkle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-soft-yellow/50 rounded-full px-4 py-2 text-sm font-medium text-foreground/80"
            >
              <StickerIcon type="sparkle" className="w-5 h-5" />
              <span className="tracking-wide">Welcome to a magical journey</span>
            </motion.div>
            
            {/* Main heading */}
            <h1 className="font-serif text-5xl md:text-6xl text-primary leading-tight text-balance tracking-tight drop-shadow-sm">
              Learning isn&apos;t a lesson. It&apos;s a celebration.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 text-pretty font-normal">
              At Seventh Sense, we believe joyful experiences build the foundation for lifelong growth. 
              Our playful, child-centric approach nurtures creativity, confidence, and character in a vibrant setting.
            </p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/enquire">
                <Button className="btn-gradient-yellow text-foreground rounded-full px-10 py-7 text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] hover:-translate-y-1">
                  Book a Free School Visit
                </Button>
              </Link>
              <a href="https://wa.me/918610170313" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-medium border-2 border-primary/20 bg-white/50 hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/30 shadow-sm transition-all hover:scale-[1.02]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-6 justify-center lg:justify-start pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: -10 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1), type: "spring" }}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white font-semibold text-sm"
                      style={{
                        background: `linear-gradient(135deg, oklch(0.8 0.15 ${[50, 160, 300, 95][i-1]}), oklch(0.7 0.18 ${[50, 160, 300, 95][i-1]}))`
                      }}
                    >
                      {["S", "D", "P", "A"][i-1]}
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">500+ Happy Families</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content - Hero image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating doodles around image */}
            <div className="absolute -top-6 -left-6 w-12 h-12 animate-float z-20">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            <div className="absolute -top-4 right-10 w-10 h-10 animate-float-slow z-20">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            <div className="absolute top-1/3 -left-8 w-8 h-8 animate-sparkle z-20">
              <StickerIcon type="sparkle" className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 -left-4 w-14 h-14 animate-float z-20">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute -bottom-4 right-12 w-10 h-10 animate-float-slow z-20">
              <StickerIcon type="moon" className="w-full h-full" />
            </div>
            
            {/* Blob background */}
            <div className="absolute inset-0 blob-shape bg-gradient-to-br from-mint/50 via-baby-blue/30 to-lavender/50 scale-110" />
            
            {/* Main image container */}
            <div className="relative blob-shape overflow-hidden bg-white/50 p-4">
              <div className="blob-shape overflow-hidden aspect-square flex items-center justify-center relative">
                <img 
                  src="/gallery/hero_main.png" 
                  alt="Children learning at Seventh Sense" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient for depth & premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/5 pointer-events-none rounded-[inherit]" />
                
                {/* Floating child figures - keeping these for playful touch */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-peach to-soft-yellow flex items-center justify-center shadow-xl border-4 border-white"
                  >
                    <StickerIcon type="heart" className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-primary/30" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wavy bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="oklch(0.97 0.015 85)"
          />
        </svg>
      </div>
    </section>
  )
}
