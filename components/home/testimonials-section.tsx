"use client"

import { StickerIcon } from "@/components/floating-doodles"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const reviews = [
  {
    name: "Lakshmi Narayanan",
    role: "Mother of Aditya, 4 years",
    review: "Aditya looks forward to school every single day. The teachers truly care, and we've seen him blossom into a happy, confident boy.",
    rating: 5,
    avatar: "L",
    color: "peach",
  },
  {
    name: "Rajesh Kumar",
    role: "Father of Kavya, 3 years",
    review: "Kavya has developed so much confidence and her communication skills have improved tremendously. She is excited to learn every day.",
    rating: 5,
    avatar: "R",
    color: "mint",
  },
  {
    name: "Divya Murugesan",
    role: "Mother of Arjun, 5 years",
    review: "We’ve seen such a positive change in our child. He is more confident, expressive, and excited to learn. We couldn't be happier!",
    rating: 5,
    avatar: "D",
    color: "lavender",
  },
  {
    name: "Priya Senthil",
    role: "Mother of Ananya, 4 years",
    review: "The playful environment makes learning an absolute joy. Ananya is becoming so independent and expressive!",
    rating: 5,
    avatar: "P",
    color: "soft-yellow",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-mint/10 via-cream to-lavender/20 overflow-hidden" id="testimonials">
      {/* Background doodles */}
      <div className="absolute top-10 right-20 w-12 h-12 opacity-30 animate-float-slow">
        <StickerIcon type="heart" className="w-full h-full text-peach" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-peach/40 rounded-full px-4 py-2 mb-6"
          >
            <StickerIcon type="star" className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-900 uppercase tracking-widest">Happy Families</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-semibold text-3xl md:text-4xl text-primary mb-6 leading-tight text-balance"
          >
            Loved by Parents, Adored by Children
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed text-pretty"
          >
            Don't just take our word for it. Hear from the parents who have seen their children flourish in our care.
          </motion.p>
        </div>
        
        {/* Horizontal scroll container (Marquee-like but built for overlapping cards) */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center -space-y-6 md:space-y-0 md:-space-x-12 px-4 md:px-12 py-10">
          {reviews.map((review, index) => {
            // Alternating staggered transform for a playful overlapping effect
            const rotation = index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]";
            const zIndex = 10 + index;
            
            return (
              <motion.div 
                key={review.name}
                initial={{ opacity: 0, x: -50, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: index % 2 === 0 ? -3 : 3 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                whileHover={{ scale: 1.05, zIndex: 50, rotate: 0 }}
                className={`relative group w-full md:w-[350px] flex-shrink-0 origin-center ${rotation}`}
                style={{ zIndex }}
              >
                <div 
                  className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 relative h-[320px] flex flex-col justify-between"
                >
                  {/* Decorative Pin/Sticker */}
                  <div className="absolute -top-4 left-6 w-10 h-10 opacity-80">
                    <StickerIcon type={["sun", "rainbow", "cloud", "sparkle"][index % 4] as any} className="w-full h-full drop-shadow-md" />
                  </div>

                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6 justify-end">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed italic text-[1.05rem] font-medium mb-6">
                      &ldquo;{review.review}&rdquo;
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-medium text-lg text-white shadow-sm shrink-0"
                      style={{
                        background: `linear-gradient(135deg, oklch(0.8 0.15 ${[50, 160, 300, 80][index]}), oklch(0.7 0.18 ${[50, 160, 300, 80][index]}))`
                      }}
                    >
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
