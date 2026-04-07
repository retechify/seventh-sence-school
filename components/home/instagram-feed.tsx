"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Instagram, Sparkles } from "lucide-react"

export function InstagramFeed() {
  useEffect(() => {
    // Behold.so Widget Script loader
    const script = document.createElement("script")
    script.src = "https://behold.so/widget.js"
    script.type = "module"
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Clean up script if necessary
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-background to-peach/10 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-lavender/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-soft-yellow/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-peach/40 rounded-full px-4 py-2 mb-6"
          >
            <Instagram className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-900 uppercase tracking-widest">Live from Instagram</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-semibold text-3xl md:text-4xl text-primary mb-6 leading-tight"
          >
            See Our Daily <span className="text-brand-pink font-semibold">Celebrations</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Follow our journey as we capture the magic of early learning, one smile at a time.
          </motion.p>
        </div>

        {/* Behold.so Widget Placeholder */}
        {/* ACTION NEEDED: Replace 'YOUR-BEHOLD-WIDGET-ID' with your actual Behold.so Widget ID */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative min-h-[400px] rounded-[3rem] overflow-hidden bg-white/50 backdrop-blur-sm border-2 border-white shadow-2xl p-6 md:p-10"
        >
          {/* If the user hasn't provided an ID, we show a professional placeholder state */}
          <figure data-behold-id="YOUR-BEHOLD-WIDGET-ID" className="w-full h-full">
             <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-peach/30 flex items-center justify-center animate-pulse">
                   <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-2">
                   <p className="text-primary font-semibold text-xl">Connecting Live Feed...</p>
                   <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      Join us at <strong>@seventhsense_cbe</strong> to see more of our daily activities and joyful moments!
                   </p>
                </div>
                <a 
                   href="https://www.instagram.com/seventhsense_cbe/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-8 py-3 font-medium hover:scale-105 transition-all shadow-lg"
                >
                   Follow on Instagram
                </a>
             </div>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}
