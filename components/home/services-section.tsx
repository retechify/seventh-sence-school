"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Puzzle, MessageCircle } from "lucide-react"
import { StickerIcon, ServiceIllustration } from "@/components/floating-doodles"
import { motion } from "framer-motion"

const services = [
  {
    icon: BookOpen,
    illustration: "book" as const,
    stickerType: "sun" as const,
    title: "Early Learning Programs",
    description: "Age-appropriate curriculum designed to spark curiosity and build foundational skills through engaging activities.",
    color: "peach",
    gradient: "from-[#FFF1E0] to-[#FFF9E0]",
    hue: 50,
  },
  {
    icon: Puzzle,
    illustration: "puzzle" as const,
    stickerType: "star" as const,
    title: "Activity-Based Learning",
    description: "Hands-on experiences that encourage exploration, problem-solving, and creative thinking in a fun environment.",
    color: "mint",
    gradient: "from-[#E0F9F0] to-[#E0F0F9]",
    hue: 160,
  },
  {
    icon: MessageCircle,
    illustration: "chat" as const,
    stickerType: "rainbow" as const,
    title: "Communication Development",
    description: "Building strong language and social skills through storytelling, group activities, and expressive arts.",
    color: "lavender",
    gradient: "from-[#F0F0FF] to-[#FAF0FF]",
    hue: 300,
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Wavy top */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="oklch(0.97 0.015 85)"
          />
        </svg>
      </div>
      
      {/* Background doodles */}
      <div className="absolute top-32 left-8 w-10 h-10 opacity-30 animate-float-slow">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-16 w-8 h-8 opacity-40 animate-sparkle">
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4 pt-12">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-lavender/30 rounded-full px-4 py-2 mb-6">
            <StickerIcon type="sparkle" className="w-5 h-5" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Discover Our Magic</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
            Nurturing Every Dimension
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            We provide a holistic approach to early childhood education, focusing on each child&apos;s 
            unique needs and helping them grow in every dimension.
          </p>
        </motion.div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group h-full"
            >
              {/* Card Container */}
              <div 
                className="relative h-full rounded-[4rem] p-10 pt-24 shadow-xl border border-white/50 transition-all duration-500 overflow-visible flex flex-col items-center text-center group-hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                style={{
                  background: `linear-gradient(135deg, oklch(0.92 0.08 ${service.hue}), oklch(0.96 0.04 ${service.hue}))`
                }}
              >
                {/* Corner Decorative Doodle (Matches image) */}
                <div className="absolute top-8 right-8 w-12 h-12 opacity-50">
                  <StickerIcon type={service.stickerType} className="w-full h-full rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                </div>

                {/* Main Illustration (Top Center, partially overlapping) */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 z-20 animate-bounce-gentle drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <ServiceIllustration type={service.illustration} className="w-full h-full" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full w-full">
                  <h3 
                    className="text-3xl md:text-3xl text-primary mb-6 group-hover:scale-105 transition-transform duration-500"
                    style={{ fontFamily: 'var(--font-pacifico), cursive' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-10 flex-grow text-lg px-2">
                    {service.description}
                  </p>
                  
                  <Link href="/services" className="w-full">
                    <Button variant="outline" className="w-full rounded-2xl border border-primary/20 bg-white hover:bg-primary/5 hover:border-primary/40 text-muted-foreground hover:text-primary transition-all duration-300 py-6 text-lg font-semibold shadow-sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <Link href="/services">
            <Button className="btn-gradient-purple text-white rounded-full px-12 py-8 text-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
              Explore All Programs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
