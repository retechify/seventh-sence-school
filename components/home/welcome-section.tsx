"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StickerIcon, HandDrawnDivider } from "@/components/floating-doodles"
import { motion } from "framer-motion"

const stats = [
  { number: "500+", label: "Happy Children", hue: 50 },
  { number: "15+", label: "Years Experience", hue: 160 },
  { number: "50+", label: "Expert Teachers", hue: 300 },
  { number: "100%", label: "Parent Satisfaction", hue: 95 },
]

export function WelcomeSection() {
  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-12 left-12 w-10 h-10 opacity-40 animate-float">
        <StickerIcon type="heart" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-20 w-8 h-8 opacity-50 animate-sparkle">
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
      <div className="absolute bottom-16 left-20 w-12 h-12 opacity-30 animate-float-slow">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      <div className="absolute bottom-24 right-16 w-6 h-6 opacity-40 animate-float">
        <StickerIcon type="star" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Sticker icons around image */}
            <div className="absolute -top-4 -left-4 w-10 h-10 z-10 animate-float">
              <StickerIcon type="sun" className="w-full h-full drop-shadow-md" />
            </div>
            <div className="absolute -top-2 right-10 w-8 h-8 z-10 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full drop-shadow-md" />
            </div>
            
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                rotate: [-1, 1, -1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative rounded-[3rem] overflow-hidden bg-white p-4 shadow-2xl"
            >
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3] relative flex items-center justify-center">
                <img 
                  src="/gallery/about.png" 
                  alt="About Seventh Sense" 
                  className="w-full h-full object-cover"
                />
                

              </div>
            </motion.div>
            
            {/* Shadow decoration */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[3rem] bg-peach/30" style={{ transform: 'rotate(2deg)' }} />
          </motion.div>
          
          {/* Content side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <StickerIcon type="heart" className="w-5 h-5" />
              <span className="text-sm font-medium text-primary">About Our World</span>
            </div>
            
            <h2 className="font-semibold text-3xl md:text-4xl text-primary leading-tight">
              A Warm Welcome to Seventh Sense
            </h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                At Seventh Sense School of Arts, we create a magical world where children can explore, learn, and grow 
                in a warm, nurturing environment. Our passionate team of educators is dedicated to 
                bringing out the best in every child through innovative, play-based learning approaches.
              </p>

              
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                We believe that early childhood is a time of wonder and discovery. That&apos;s why we design 
                experiences that spark curiosity and build confidence.
              </p>
            </div>
            
            <HandDrawnDivider className="py-4 opacity-50" />
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.96 0.05 ${stat.hue}), oklch(0.98 0.02 ${stat.hue}))`
                  }}
                >
                  <div className="font-semibold text-3xl text-primary mb-1">{stat.number}</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <Link href="/about" className="inline-block mt-4">
                  <Button className="btn-gradient-peach text-foreground rounded-full px-10 py-7 text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                Learn Our Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
