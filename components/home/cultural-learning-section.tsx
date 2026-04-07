"use client"

import { motion } from "framer-motion"
import { StickerIcon, SectionDoodles } from "@/components/floating-doodles"

export function CulturalLearningSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-lavender/10 via-cream/50 to-mint/10 -z-10" />
      
      {/* Section-specific doodles */}
      <SectionDoodles className="opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-brand-pink/10 border border-brand-pink/20 rounded-full px-5 py-2 mb-6">
                <StickerIcon type="sparkle" className="w-5 h-5 text-brand-pink" />
                <span className="text-sm font-bold text-brand-pink uppercase tracking-widest italic">Coming Soon</span>
              </div>
              
              <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight tracking-tight">
                Indo–Japanese <br />
                <span className="text-brand-pink">Cultural Learning</span>
              </h2>
              
              <p className="text-xl font-medium text-primary/80 mb-8 border-l-4 border-peach pl-6 py-2 italic font-serif">
                "Bringing global exposure through Japanese culture, discipline, and creativity."
              </p>
              
              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Introducing a unique learning experience inspired by Japanese educational values. This program focuses on discipline, creativity, cultural awareness, and global readiness—helping children grow with a broader perspective.
                </p>
                <p>
                  We aim to blend the warmth of Indian values with the world-renowned discipline and aesthetic of Japan, preparing our little learners for a truly global future.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-lavender/30">
                  <div className="w-3 h-3 rounded-full bg-peach animate-pulse" />
                  <span className="font-semibold text-primary/70">Cultural Discipline</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-lavender/30">
                  <div className="w-3 h-3 rounded-full bg-mint animate-pulse" />
                  <span className="font-semibold text-primary/70">Creative Arts</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-peach/20 rounded-[3rem] rotate-6 scale-105 -z-10" />
              <div className="absolute inset-0 bg-lavender/20 rounded-[3rem] -rotate-3 scale-105 -z-10" />
              
              <div className="relative rounded-[3rem] overflow-hidden aspect-video lg:aspect-square border-8 border-white shadow-2xl bg-gray-100 flex items-center justify-center">
                <img 
                  src="/gallery/cultural_learning.png" 
                  alt="Indo-Japanese Cultural Learning" 
                  className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1528605248644-14dd04cb220d?auto=format&fit=crop&q=80&w=1000';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                
                {/* Floating elements inside image */}
                <div className="absolute bottom-10 left-10 text-white z-20">
                    <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Global Readiness</p>
                    <p className="text-3xl font-serif italic">Future Ready</p>
                </div>
              </div>
              
              {/* Corner badge */}
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full shadow-2xl p-2 z-30"
              >
                <div className="bg-gradient-to-br from-brand-pink to-peach rounded-full w-full h-full flex items-center justify-center text-center p-3">
                   <p className="text-white text-xs font-bold leading-tight uppercase tracking-tight">
                    Premium <br/> Feature
                   </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
