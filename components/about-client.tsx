"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, HandDrawnDivider, SectionDoodles } from "@/components/floating-doodles"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Target, Award, Quote } from "lucide-react"

const values = [
  {
    icon: Eye,
    stickerType: "sun" as const,
    title: "Vision",
    description: "To create a world where every child feels confident, valued, and inspired to reach their fullest potential through joyful learning.",
    color: "peach",
    hue: 50,
  },
  {
    icon: Target,
    stickerType: "rainbow" as const,
    title: "Mission",
    description: "To provide a safe, nurturing, and stimulating environment that fosters creativity, curiosity, and confidence in every child.",
    color: "mint",
    hue: 160,
  },
  {
    icon: Award,
    stickerType: "star" as const,
    title: "Impact",
    description: "Over the years, we have helped hundreds of children discover their unique strengths — growing into confident, creative, and compassionate individuals.",
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
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden bg-transparent">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/30 via-cream/80 to-peach/20 -z-10" />
            
            {/* Section-specific doodles */}
            <SectionDoodles className="opacity-40" />
            
            {/* Top doodles */}
            <div className="absolute top-24 left-10 w-16 h-16 animate-float-slow opacity-60 z-20">
              <StickerIcon type="cloud" className="w-full h-full drop-shadow-sm" />
            </div>
            <div className="absolute top-1/4 right-20 w-12 h-12 animate-sparkle opacity-80 z-20">
              <StickerIcon type="sparkle" className="w-full h-full drop-shadow-sm" />
            </div>
            <div className="absolute bottom-20 right-1/4 w-10 h-10 animate-float opacity-50 z-20">
              <StickerIcon type="star" className="w-full h-full drop-shadow-sm" />
            </div>
            
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-5 py-2.5 mb-8 shadow-sm border border-lavender/30">
                  <StickerIcon type="heart" className="w-5 h-5" />
                  <span className="text-sm font-semibold tracking-wide text-primary uppercase">Our Story</span>
                </div>
                
                <h1 className="font-semibold text-5xl lg:text-7xl text-primary mb-8 text-balance leading-tight">
                  Meet the Heart Behind Seventh Sense
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty space-y-4">
                  <span className="block">A journey built on love, care, and a deep belief that every child deserves a joyful and meaningful start to learning.</span>
                  <span className="block mt-4">At Seventh Sense School of Arts, we don’t just teach — we nurture confidence, creativity, and character in every child.</span>
                </p>
              </div>
            </div>
            
            {/* Wavy bottom */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-10 mt-10">
              <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
                <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="oklch(1 0 0)" />
              </svg>
            </div>
          </section>
          
          {/* Scroll-Driven Timeline Story Layout */}
          <section className="relative py-32 bg-white z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-cream/30 to-white -z-10" />
            <SectionDoodles className="opacity-20 translate-y-20" />
             <div className="container mx-auto px-4 max-w-4xl relative">
                {/* Central connecting line */}
                <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 w-1 bg-gradient-to-b from-lavender/30 via-peach/30 to-mint/30 rounded-full -translate-x-1/2" />

                <div className="space-y-24">
                   {/* Point 1 */}
                   <div className="relative flex flex-col md:flex-row items-center justify-between group">
                      <div className="absolute left-[24px] md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_0_8px_oklch(0.97_0.03_300)]" />
                      <div className="md:w-[45%] pl-16 md:pl-0 text-left md:text-right">
                         <h3 className="font-semibold text-3xl text-primary mb-4">The Spark</h3>
                         <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>Seventh Sense was born from a simple yet powerful belief — every child is unique and deserves to feel seen, understood, and celebrated.</p>
                            <p>We wanted to create a space where learning feels natural, joyful, and full of curiosity — not pressure.</p>
                         </div>
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
                         <h3 className="font-semibold text-3xl text-primary mb-4">The Growth</h3>
                         <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>What started as a small classroom has grown into a trusted learning environment for families who value holistic development.</p>
                            <p>With every child, we refined our approach — focusing not just on academics, but on confidence, communication, and creativity.</p>
                         </div>
                      </div>
                   </div>

                   {/* Point 3 */}
                   <div className="relative flex flex-col md:flex-row items-center justify-between group">
                      <div className="absolute left-[24px] md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_0_8px_oklch(0.97_0.08_160)]" />
                      <div className="md:w-[45%] pl-16 md:pl-0 text-left md:text-right">
                         <h3 className="font-semibold text-3xl text-primary mb-4">Our Reality</h3>
                         <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                            <p>Today, Seventh Sense stands as a nurturing space where children grow into confident, expressive, and independent individuals.</p>
                            <p>Our focus remains the same — to support every child with care, intention, and a deep understanding of early childhood development.</p>
                         </div>
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

          {/* Founder Section */}
          <section className="relative py-32 overflow-hidden bg-transparent border-y border-mint/20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-mint/5 via-white/80 to-peach/5 -z-10" />
            <SectionDoodles className="opacity-30" />
            <div className="container mx-auto px-4 relative">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                {/* Image Side - Asymmetric Floating */}
                <div className="relative lg:h-[600px] flex justify-center items-center order-2 lg:order-1">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-soft-yellow/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl border-[10px] border-white/80"
                  >
                    <img 
                      src="/gallery/about.png" 
                      alt="Dr. P. Vijayalakshmi - Founder & Academic Director" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 right-8 w-16 h-16 animate-float-slow z-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-lavender/20">
                    <Quote className="w-7 h-7 text-primary opacity-80" />
                  </div>
                  <div className="absolute bottom-10 left-0 w-20 h-20 animate-float z-20">
                    <StickerIcon type="sun" className="w-full h-full drop-shadow-xl" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="max-w-xl order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 shadow-sm border border-lavender/30">
                    <StickerIcon type="star" className="w-5 h-5" />
                    <span className="text-sm font-semibold tracking-wide text-primary uppercase">Leadership</span>
                  </div>
                  
                  <h2 className="font-semibold text-4xl lg:text-5xl text-primary mb-6 text-balance leading-tight">
                    Meet the Founder
                  </h2>

                  <p className="text-2xl font-serif italic text-primary/80 mb-10 border-l-4 border-peach pl-6 py-2">
                    "Every child is a story waiting to be told."
                  </p>

                  <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] border border-lavender/30 mb-8 shadow-sm">
                    <h3 className="font-bold text-xl text-primary mb-1">Dr. P. Vijayalakshmi</h3>
                    <p className="text-primary/70 font-medium mb-4">Founder & Academic Director</p>
                    <ul className="space-y-3 text-sm text-foreground/80 font-medium">
                      <li className="flex items-center gap-3">
                        <div className="bg-lavender/20 p-1.5 rounded-full">
                           <StickerIcon type="sparkle" className="w-4 h-4" />
                        </div>
                        Ph.D in History & English
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="bg-peach/20 p-1.5 rounded-full">
                           <StickerIcon type="heart" className="w-4 h-4" />
                        </div>
                        18+ Years in Education & Child Development
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-lg text-muted-foreground leading-relaxed text-pretty space-y-6">
                    <p>
                      With over 18 years of experience in academic leadership and early childhood development, Dr. Vijayalakshmi has dedicated her journey to creating a safe and nurturing environment where children truly flourish.
                    </p>
                    <p>
                      Her vision goes beyond textbooks. She believes that true education lies in developing the emotional, social, and creative well-being of a child — not just academic excellence.
                    </p>
                    <p>
                      At Seventh Sense, her approach focuses on helping children build confidence, express themselves freely, and grow into independent thinkers.
                    </p>
                    <p>
                      Every child here is guided with care, encouraged with patience, and empowered to step into the future with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Overlapping Values Section Layout */}
          <section className="py-32 relative overflow-hidden z-20 bg-transparent">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream via-white to-cream -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-peach/10 rounded-full blur-[120px] mix-blend-multiply -z-10" />
            <SectionDoodles className="opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="font-semibold text-4xl md:text-5xl text-primary mb-4 text-balance">Our Guiding Lights</h2>
                 <HandDrawnDivider className="py-4 max-w-md mx-auto" />
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
                      
                      <h3 className="font-semibold text-3xl text-primary mb-4">{value.title}</h3>
                      <p className="text-foreground/80 leading-relaxed text-lg">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Wavy bottom lining up to CTA */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20">
              <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
                <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="oklch(1 0 0)" />
              </svg>
            </div>
          </section>
          
          {/* Universal CTA Section */}
          <section className="pt-40 pb-20 bg-white relative overflow-hidden z-10">
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-gradient-to-br from-lavender/30 via-cream to-peach/20 rounded-[3rem] p-12 md:p-20 shadow-2xl max-w-5xl mx-auto text-center relative overflow-hidden border border-lavender/30">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-soft-yellow/30 rounded-full blur-3xl mix-blend-multiply" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-peach/30 rounded-full blur-3xl mix-blend-multiply" />
                
                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                  <h2 className="font-semibold text-4xl md:text-5xl text-primary text-balance leading-tight">
                    Ready to Experience the Difference?
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty space-y-4">
                    <span className="block">Give your child the best start in life with a learning environment built on care, creativity, and confidence.</span>
                    <span className="block">Book a Free School Visit today and see how your child can truly grow.</span>
                  </p>
                  <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/enquire">
                      <Button className="btn-gradient-yellow text-foreground rounded-full px-10 py-8 text-xl font-bold shadow-xl hover:scale-105 hover:-translate-y-1 transition-all">
                        Book a Free School Visit
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
