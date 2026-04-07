"use client"

import { motion } from "framer-motion"
import { StickerIcon, SectionDoodles } from "@/components/floating-doodles"

export function FounderSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background gradients for a playful look */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-lavender/10 to-peach/10 -z-10" />
      
      {/* Section-specific doodles */}
      <SectionDoodles className="opacity-30" />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative">
          
          {/* Leftside Image (Off-center, organically masked) */}
          <div className="w-full md:w-5/12 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-lavender/40 rounded-[3rem] rotate-6 scale-105 -z-10" />
              <div className="absolute inset-0 bg-peach/30 rounded-[3rem] -rotate-3 scale-105 -z-10" />
              
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border-8 border-white shadow-xl bg-gray-100 flex items-center justify-center z-10">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <img 
                  src="/gallery/about.png" 
                  alt="Founder" 
                  className="object-cover w-full h-full relative z-10 fallback-bg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiLz48L3N2Zz4='; // placeholder grey rect
                  }}
                />
              </div>

              {/* Years Experience Badge superimposed */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -bottom-6 -right-6 md:-right-10 bg-white rounded-full p-2 shadow-2xl z-20"
              >
                <div className="bg-gradient-to-br from-soft-yellow to-peach rounded-full w-32 h-32 flex flex-col items-center justify-center p-2 text-center border-4 border-dotted border-white/50 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 grain-texture mix-blend-overlay"></div>
                  <span className="text-3xl font-semibold text-amber-800">18+</span>
                  <span className="text-xs font-medium uppercase text-amber-700 tracking-wider">Years of<br/>Experience</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Text (Overlapping layered depth) */}
          <div className="w-full md:w-7/12 relative z-20 md:-ml-8 mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-8 lg:p-12 rounded-[2.5rem] shadow-lg border border-white/60 relative"
            >
              {/* Fun doodle sticking out */}
              <div className="absolute -top-8 -right-8 w-16 h-16 opacity-80 animate-bounce-gentle">
                <StickerIcon type="sparkle" className="w-full h-full text-peach" />
              </div>

              <div className="inline-flex items-center gap-2 mb-6 text-sm font-medium uppercase tracking-widest text-primary bg-lavender/30 px-3 py-1.5 rounded-full">
                Meet The Founder
              </div>

              <h2 className="font-semibold text-3xl md:text-4xl text-primary mb-6 text-balance leading-tight">
                &ldquo;Every child is a story waiting to be told.&rdquo;
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed font-medium">
                <p>
                  With over 18 years of experience in academic leadership and early childhood development, my journey has been driven by a singular passion: creating a safe, nurturing environment where children truly flourish.
                </p>
                <p>
                  Holding a Ph.D. in History and English, I've seen firsthand that true education goes far beyond textbooks. At Seventh Sense, our vision is built on holistic child development—focusing deeply on the emotional, social, and creative well-being of your child, so they step into the future with unwavering confidence.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-mint/30 rounded-full flex items-center justify-center">
                  <StickerIcon type="heart" className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-2xl">Dr. P. Vijayalakshmi</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Founder & Academic Director</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
