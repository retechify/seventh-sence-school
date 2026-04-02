"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, HandDrawnDivider } from "@/components/floating-doodles"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Target, Award } from "lucide-react"

const values = [
  {
    icon: Eye,
    stickerType: "sun" as const,
    title: "Her Vision",
    description: "To create a world where every child feels valued, understood, and empowered to reach their fullest potential through love-based education.",
    color: "peach",
    hue: 50,
  },
  {
    icon: Target,
    stickerType: "rainbow" as const,
    title: "Her Mission",
    description: "To provide a nurturing, stimulating environment that fosters creativity, curiosity, and confidence in every child who walks through our doors.",
    color: "mint",
    hue: 160,
  },
  {
    icon: Award,
    stickerType: "star" as const,
    title: "Her Impact",
    description: "Over 500 children have discovered their unique spark at Seventh Sense, growing into confident, creative, and compassionate individuals.",
    color: "lavender",
    hue: 300,
  },
]

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background grain texture */}
      <div className="fixed inset-0 grain-texture z-0" />
      
      {/* Floating doodles */}
      <FloatingDoodles count={25} />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero / Founder Section (Asymmetric) */}
          <section className="relative py-20 lg:py-32 overflow-hidden bg-cream">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/30 via-cream to-peach/20" />
            
            <div className="container mx-auto px-4 relative">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                
                {/* Content Side */}
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-5 py-2.5 mb-8 shadow-sm border border-lavender/30">
                    <StickerIcon type="heart" className="w-5 h-5" />
                    <span className="text-sm font-semibold tracking-wide text-primary uppercase">Our Story</span>
                  </div>
                  
                  <h1 className="font-serif text-5xl lg:text-7xl text-primary mb-8 text-balance leading-tight">
                    Meet the Heart Behind Seventh Sense
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty mb-8">
                    A journey of love, dedication, and an unwavering belief in the magic of childhood.
                  </p>
                </div>

                {/* Image Side - Asymmetric Floating */}
                <div className="relative lg:h-[600px] flex justify-center items-center">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-soft-yellow/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/60"
                  >
                    <img 
                      src="/gallery/about.png" 
                      alt="About Seventh Sense School of Arts" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute top-10 right-0 w-16 h-16 animate-float-slow z-20">
                    <StickerIcon type="sparkle" className="w-full h-full drop-shadow-xl" />
                  </div>
                  <div className="absolute bottom-10 left-0 w-20 h-20 animate-float z-20">
                    <StickerIcon type="sun" className="w-full h-full drop-shadow-xl" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Wavy bottom */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
              <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
                <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="oklch(1 0 0)" />
              </svg>
            </div>
          </section>
          
          {/* Scroll-Driven Timeline Story Layout */}
          <section className="py-32 bg-white relative">
             <div className="container mx-auto px-4 max-w-4xl relative">
                {/* Central connecting line */}
                <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 w-1 bg-gradient-to-b from-lavender/30 via-peach/30 to-mint/30 rounded-full -translate-x-1/2" />

                <div className="space-y-24">
                   {/* Point 1 */}
                   <div className="relative flex flex-col md:flex-row items-center justify-between group">
                      <div className="absolute left-[24px] md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_0_8px_oklch(0.97_0.03_300)]" />
                      <div className="md:w-[45%] pl-16 md:pl-0 text-left md:text-right">
                         <h3 className="font-serif text-3xl text-primary mb-4">The Spark</h3>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            Seventh Sense School of Arts was born from a simple yet powerful belief: every child deserves to feel special, understood, and celebrated for exactly who they are.
                         </p>
                      </div>
                      <div className="hidden md:block md:w-[45%] relative">
                         <div className="w-24 h-24 bg-peach/20 rounded-[2rem] ml-8 flex items-center justify-center blob-shape">
                            <StickerIcon type="heart" className="w-12 h-12" />
                         </div>
                      </div>
                   </div>

                   {/* Point 2 */}
                   <div className="relative flex flex-col md:flex-row items-center justify-between group">
                      <div className="absolute left-[24px] md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_0_8px_oklch(0.97_0.05_50)] z-10" />
                      <div className="hidden md:flex md:w-[45%] justify-end relative">
                         <div className="w-24 h-24 bg-mint/20 rounded-[2rem] mr-8 flex items-center justify-center blob-shape" style={{ animationDelay: '1s' }}>
                            <StickerIcon type="cloud" className="w-12 h-12" />
                         </div>
                      </div>
                      <div className="md:w-[45%] pl-16 md:pl-0 text-left">
                         <h3 className="font-serif text-3xl text-primary mb-4">The Growth</h3>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            What started as a dream in a small classroom grew into a thriving community. Our founder saw a critical gap in traditional schooling—a need for learning to be truly joyful.
                         </p>
                      </div>
                   </div>

                   {/* Point 3 */}
                   <div className="relative flex flex-col md:flex-row items-center justify-between group">
                      <div className="absolute left-[24px] md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_0_8px_oklch(0.97_0.08_160)]" />
                      <div className="md:w-[45%] pl-16 md:pl-0 text-left md:text-right">
                         <h3 className="font-serif text-3xl text-primary mb-4">Our Reality</h3>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                            Today, Seventh Sense stands as a testament to what&apos;s possible when education is rooted in love, guided by research, and delivered with genuine care for each child&apos;s well-being.
                         </p>
                      </div>
                      <div className="hidden md:block md:w-[45%] relative">
                         <div className="w-24 h-24 bg-soft-yellow/20 rounded-[2rem] ml-8 flex items-center justify-center blob-shape" style={{ animationDelay: '2s' }}>
                            <StickerIcon type="star" className="w-12 h-12" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
          
          {/* Overlapping Values Section Layout */}
          <section className="py-24 bg-cream relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-80" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-mint/10 rounded-full blur-[120px] mix-blend-multiply" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 text-balance">Our Guiding Lights</h2>
                 <HandDrawnDivider className="py-4" />
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:-space-x-8 px-4">
                {values.map((value, index) => (
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    key={value.title} 
                    className="relative group w-full max-w-sm lg:w-1/3"
                    style={{ zIndex: 10 - index }}
                  >
                    <div className="absolute -top-6 -right-6 w-14 h-14 z-20">
                      <StickerIcon type={value.stickerType} className="w-full h-full drop-shadow-lg" />
                    </div>
                    
                    <div 
                      className="relative rounded-[2.5rem] p-10 h-full shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border-[6px] border-white"
                      style={{
                        background: `linear-gradient(135deg, oklch(0.92 0.1 ${value.hue}), oklch(0.96 0.04 ${value.hue}))`
                      }}
                    >
                      <div className="w-20 h-20 rounded-2xl bg-white/90 flex items-center justify-center mb-8 shadow-sm">
                        <value.icon className="w-10 h-10 text-primary" />
                      </div>
                      
                      <h3 className="font-serif text-3xl text-primary mb-4">{value.title}</h3>
                      <p className="text-foreground/80 leading-relaxed text-lg">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Wavy bottom lining up to CTA */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
              <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
                <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="oklch(1 0 0)" />
              </svg>
            </div>
          </section>
          
          {/* Universal CTA Section */}
          <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-gradient-to-br from-lavender/30 via-cream to-mint/20 rounded-[3rem] p-12 md:p-20 shadow-2xl max-w-5xl mx-auto text-center relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-soft-yellow/30 rounded-full blur-3xl mix-blend-multiply" />
                
                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                  <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance">
                    Ready to Tour Our Little Wonderland?
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                    Join our family and give your child the gift of a magical early learning experience. 
                    We completely understand if you have questions!
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
