"use client"

import { motion } from "framer-motion"
import { StickerIcon } from "@/components/floating-doodles"

const features = [
  {
    id: 1,
    title: "Confidence Building",
    description: "Empowering children to embrace their unique voices.",
    icon: "sun",
    color: "bg-soft-yellow/40",
    borderColor: "border-soft-yellow",
    textColor: "text-amber-700",
    delay: 0.1,
    offset: "lg:mt-0"
  },
  {
    id: 2,
    title: "Future Readiness",
    description: "Equipping young minds with critical problem-solving skills.",
    icon: "rainbow",
    color: "bg-peach/30",
    borderColor: "border-peach",
    textColor: "text-orange-700",
    delay: 0.2,
    offset: "lg:mt-12"
  },
  {
    id: 3,
    title: "Emotional Growth",
    description: "Fostering empathy, kindness, and strong social bonds.",
    icon: "sparkle",
    color: "bg-baby-blue/30",
    borderColor: "border-baby-blue",
    textColor: "text-blue-700",
    delay: 0.3,
    offset: "lg:mt-0"
  },
  {
    id: 4,
    title: "Essential Life Skills",
    description: "Building true independence and inner resilience every day.",
    icon: "cloud",
    color: "bg-mint/30",
    borderColor: "border-mint",
    textColor: "text-emerald-700",
    delay: 0.4,
    offset: "lg:mt-12"
  }
];

export function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-64 h-64 bg-lavender/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-soft-yellow/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-peach/30 rounded-full px-4 py-2 text-sm font-medium text-orange-800 mb-6"
          >
            <StickerIcon type="star" className="w-4 h-4" />
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-semibold text-3xl md:text-4xl text-primary mb-6"
          >
            A Foundation for <span className="text-secondary font-semibold font-normal">Lifelong Joy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Experience a unique approach where play and discovery shape the leaders of tomorrow. We provide a safe, nurturing environment where every child&apos;s natural curiosity is guided into meaningful life skills.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: feature.delay, duration: 0.6, type: "spring" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${feature.borderColor} ${feature.offset} group`}
            >
              <div className={`absolute inset-0 rounded-3xl opacity-50 transition-opacity group-hover:opacity-100 ${feature.color} -z-10`} />
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-md border border-gray-100`}>
                <StickerIcon type={feature.icon as "sun" | "rainbow" | "sparkle" | "cloud"} className={`w-8 h-8 ${feature.textColor}`} />
              </div>
              
              <h3 className="font-semibold text-xl md:text-2xl text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
