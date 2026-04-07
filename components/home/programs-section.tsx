"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StickerIcon, ServiceIllustration, SectionDoodles } from "@/components/floating-doodles"
import { motion } from "framer-motion"

const programs = [
  {
    title: "Phonics-Based Language Learning",
    description: "Helping children build strong reading and communication skills from an early age.",
    ageGroup: "3-5 Years",
    illustration: "book" as const,
    stickerType: "rainbow" as const,
    hue: 300, // lavender
    color: "lavender",
  },
  {
    title: "Montessori Sensory Development",
    description: "Encouraging hands-on exploration that strengthens focus, independence, and problem-solving skills.",
    ageGroup: "2-4 Years",
    illustration: "puzzle" as const,
    stickerType: "sun" as const,
    hue: 50, // peach/yellow
    color: "peach",
  },
  {
    title: "Activity-Based Exploration",
    description: "Learning through play, creativity, and real-world experiences that make education enjoyable.",
    ageGroup: "3-6 Years",
    illustration: "chat" as const,
    stickerType: "cloud" as const,
    hue: 160, // mint
    color: "mint",
  },
  {
    title: "Life Skills & Confidence Training",
    description: "Building independence, emotional strength, and self-confidence for everyday life.",
    ageGroup: "4-7 Years",
    illustration: "star" as const,
    stickerType: "star" as const,
    hue: 200, // baby blue
    color: "baby-blue",
  },
]

export function ProgramsSection() {
  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden" id="programs">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/40 via-mint/5 to-baby-blue/10 -z-10" />
      
      {/* Section-specific doodles */}
      <SectionDoodles className="opacity-30" />
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-mint/30 rounded-full px-4 py-2 mb-6">
            <StickerIcon type="cloud" className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-800 uppercase tracking-widest">Our Programs</span>
          </div>
          
          <h2 className="font-bold text-4xl md:text-5xl text-primary mb-6 leading-tight tracking-tight">
            A Foundation for <span className="text-brand-pink">Lifelong Joy</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
            Explore our specialized educational pathways designed to provide a rich, scientifically-backed learning environment for every stage of early childhood.
          </p>
        </motion.div>
        
        {/* Programs grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group h-full"
            >
              {/* Card Container */}
              <div 
                className="relative h-full rounded-[2.5rem] p-8 pt-12 shadow-md border border-white/50 transition-all duration-300 flex flex-col hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] bg-white group-hover:shadow-xl"
                style={{
                  borderTopColor: `oklch(0.92 0.08 ${program.hue})`,
                  borderTopWidth: "8px"
                }}
              >
                {/* Age Group Tag */}
                <div 
                  className="absolute -top-4 right-6 px-4 py-1.5 rounded-full text-xs font-medium text-white shadow-sm"
                  style={{ backgroundColor: `oklch(0.7 0.15 ${program.hue})` }}
                >
                  {program.ageGroup}
                </div>

                {/* Corner Decorative Doodle */}
                <div className="absolute top-6 right-6 w-10 h-10 opacity-30">
                  <StickerIcon type={program.stickerType} className="w-full h-full rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full w-full">
                  <h3 
                    className="font-semibold text-xl md:text-2xl text-primary mb-4"
                  >
                    {program.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {program.description}
                  </p>
                  
                  <Link href="/programs" className="mt-auto">
                    <Button variant="ghost" className="w-full justify-start px-0 text-primary hover:text-primary/80 hover:bg-transparent font-medium">
                      Learn More &rarr;
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Post-Programs CTA Block */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-20 text-center space-y-8"
        >
           <p className="text-xl text-primary/80 font-medium italic">
              "Ready to see our programs in action?"
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/enquire">
                 <Button className="btn-gradient-yellow text-foreground rounded-full px-10 py-8 text-xl font-bold shadow-xl hover:scale-105 transition-all">
                    Book a Free School Visit
                 </Button>
              </Link>
              <a href="https://wa.me/918610170313" target="_blank" rel="noreferrer">
                 <Button variant="outline" className="rounded-full px-10 py-8 text-xl font-bold shadow-sm hover:bg-white/50 border-2 border-primary/20 transition-all">
                    Chat on WhatsApp
                 </Button>
              </a>
           </div>
        </motion.div>
      </div>

      {/* Wavy bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 120" className="relative block w-[calc(100%+1.3px)] h-[80px]" preserveAspectRatio="none">
          <path 
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" 
            fill="oklch(0.97 0.015 85)" 
          />
        </svg>
      </div>
    </section>
  )
}
