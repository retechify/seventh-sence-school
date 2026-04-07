"use client"

import { motion } from "framer-motion"
import { StickerIcon, SectionDoodles } from "@/components/floating-doodles"
import { Shield, Sparkles, Heart, Users } from "lucide-react"

const trustItems = [
  {
    id: 1,
    title: "20+ Years",
    subtitle: "Experience in Early Education",
    icon: Sparkles,
    color: "bg-peach",
    textColor: "text-peach-700",
    gradient: "from-peach/20 to-transparent",
    delay: 0.1
  },
  {
    id: 2,
    title: "Safe & Caring",
    subtitle: "Environment",
    icon: Shield,
    color: "bg-mint",
    textColor: "text-mint-700",
    gradient: "from-mint/20 to-transparent",
    delay: 0.2
  },
  {
    id: 3,
    title: "100+ Happy Families",
    subtitle: "Trusted by Parents",
    icon: Users,
    color: "bg-lavender",
    textColor: "text-lavender-700",
    gradient: "from-lavender/20 to-transparent",
    delay: 0.3
  },
  {
    id: 4,
    title: "Holistic",
    subtitle: "Child Development",
    icon: Heart,
    color: "bg-soft-yellow",
    textColor: "text-amber-600",
    gradient: "from-soft-yellow/20 to-transparent",
    delay: 0.4
  }
]

export function TrustSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-transparent">
      {/* Background gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/50 via-lavender/10 to-peach/10 -z-10" />
      
      {/* Section-specific doodles */}
      <SectionDoodles className="opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-peach/30 rounded-full px-5 py-2 text-sm font-medium text-primary uppercase tracking-wider mb-6 border border-peach/50"
          >
            <StickerIcon type="heart" className="w-4 h-4" />
            Why Parents Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bold text-3xl md:text-4xl text-primary leading-tight text-balance tracking-tight"
          >
            A Place Built on Love and Trust
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: item.delay, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-white rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-primary/10 overflow-hidden group flex flex-col items-center text-center group-hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 rounded-[1.25rem] ${item.color} mb-6 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className="w-8 h-8 text-white drop-shadow-sm" />
              </div>
              
              <h3 className="font-semibold text-xl md:text-2xl text-primary mb-2 tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground font-medium">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
