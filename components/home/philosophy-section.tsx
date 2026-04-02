"use client"

import { motion } from "framer-motion"
import { StickerIcon } from "@/components/floating-doodles"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const philosophies = [
  {
    title: "Child-Centered Learning",
    description: "Every child is unique. Our curriculum adapts to their pace, interests, and natural inclinations, ensuring they lead their own learning journey.",
    color: "bg-peach/40",
    borderRadius: "rounded-[2.5rem]",
    icon: "heart",
    marginTop: "mt-0"
  },
  {
    title: "Hands-On Experiences",
    description: "We believe children learn best by doing. Textbooks are replaced with tangible materials, nature walks, and interactive experiments.",
    color: "bg-baby-blue/40",
    borderRadius: "rounded-[2.5rem]",
    icon: "sun",
    marginTop: "md:mt-12"
  },
  {
    title: "Creativity & Confidence",
    description: "Mistakes are celebrated as stepping stones. Our environment fosters bold self-expression through arts, drama, and open-ended play.",
    color: "bg-mint/40",
    borderRadius: "rounded-[2.5rem]",
    icon: "star",
    marginTop: "mt-0"
  },
  {
    title: "Mindful Integration",
    description: "Balancing timeless developmental practices with modern tools, thoughtfully integrated to enhance rather than replace sensory learning.",
    color: "bg-lavender/40",
    borderRadius: "rounded-[2.5rem]",
    icon: "rainbow",
    marginTop: "md:mt-12"
  }
]

export function PhilosophySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Abstract background shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-soft-yellow/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-peach/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Header left */}
          <div className="lg:w-1/3 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-soft-yellow/40 rounded-full px-4 py-2 mb-6">
                <StickerIcon type="star" className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-800 uppercase tracking-widest">Our Roots</span>
              </div>
              <h2 className="font-semibold text-3xl md:text-4xl text-primary mb-6 leading-tight text-balance">
                Our Core <br className="hidden lg:block"/> Philosophy
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We believe that education must extend far beyond the classroom walls. Our philosophy is rooted in building an environment where joyful learning becomes second nature.
              </p>
              
              {/* Fun playful doodle under text */}
              <div className="w-24 h-24 mx-auto lg:mx-0 opacity-80 animate-float mb-8 hidden lg:block">
                <StickerIcon type="cloud" className="w-full h-full" />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/enquire">
                  <Button className="btn-gradient-yellow text-foreground rounded-full px-8 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]">
                    Book a Free School Visit
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Grid right */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6 relative">
              
              {/* Central connecting blob decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/40 blur-2xl rounded-full -z-10" />

              {philosophies.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`bg-white p-8 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden ${item.borderRadius} ${item.marginTop}`}
                >
                  <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${item.color} opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out`} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-white/50 ${item.color}`}>
                      <StickerIcon type={item.icon as any} className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg md:text-xl text-primary mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
