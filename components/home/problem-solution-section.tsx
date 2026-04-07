"use client"

import { StickerIcon, SectionDoodles } from "@/components/floating-doodles"
import { motion } from "framer-motion"

export function ProblemSolutionSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-transparent">
      {/* Background gradient - soft and playful */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/80 via-lavender/5 to-peach/10 -z-10" />
      
      {/* Section-specific doodles */}
      <SectionDoodles className="opacity-40" />
      
      {/* Manual extra doodles for impact */}
      <div className="absolute top-10 right-[15%] w-10 h-10 opacity-30 animate-float">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-[10%] w-12 h-12 opacity-40 animate-float-slow">
        <StickerIcon type="star" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-peach/20 border border-peach/30 rounded-full px-5 py-2 mb-6">
              <StickerIcon type="heart" className="w-5 h-5 text-peach-dark" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">The Foundation Matters</span>
            </div>
            <h2 className="font-semibold text-4xl md:text-5xl text-primary mb-6 text-balance leading-tight">
              Is Your Child Getting the Right Start?
            </h2>
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Many early learning environments focus only on academics. But a child’s early years are about much more — confidence, communication, creativity, and emotional growth.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                At Seventh Sense, we nurture the whole child, helping them grow into confident and capable individuals.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Problem Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-cream/50 rounded-[2.5rem] p-8 md:p-10 border border-black/5 relative group"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
              <StickerIcon type="cloud" className="w-8 h-8 opacity-70 grayscale" />
            </div>
            <h3 className="font-semibold text-2xl text-primary mb-4">The Traditional Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span className="text-muted-foreground">Rote memorization over genuine understanding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span className="text-muted-foreground">Rigid schedules that stifle natural curiosity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span className="text-muted-foreground">Less focus on emotional intelligence and social skills</span>
              </li>
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-mint/20 to-baby-blue/20 rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-white relative group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="absolute -top-6 -right-6 w-16 h-16 animate-sparkle">
              <StickerIcon type="sun" className="w-full h-full drop-shadow-md" />
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8">
              <StickerIcon type="star" className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-2xl text-primary mb-4">The Seventh Sense Way</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="font-medium text-primary/80">Play-driven discovery that builds lasting retention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="font-medium text-primary/80">Sensory exploration tailored to your child's pace</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="font-medium text-primary/80">Holistic focus on empathy, confidence, and character</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Wavy bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 120" className="relative block w-[calc(100%+1.3px)] h-[80px]" preserveAspectRatio="none">
          <path 
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" 
            fill="oklch(0.98 0.01 90)" 
          />
        </svg>
      </div>
    </section>
  )
}
