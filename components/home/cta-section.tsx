"use client"

import { Button } from "@/components/ui/button"
import { StickerIcon } from "@/components/floating-doodles"
import { Phone, MessageCircle, Send } from "lucide-react"
import { motion } from "framer-motion"

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white" id="book-visit">
      {/* Background shapes & texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-yellow/10 rounded-full blur-3xl" />

      {/* Decorative doodles */}
      <div className="absolute top-12 left-10 w-16 h-16 opacity-20 animate-float">
        <StickerIcon type="cloud" className="w-full h-full text-white" />
      </div>
      <div className="absolute bottom-16 right-16 w-12 h-12 opacity-30 animate-bounce-gentle">
        <StickerIcon type="sparkle" className="w-full h-full text-soft-yellow" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6 text-sm font-medium tracking-widest text-soft-yellow uppercase">
                  Secure Their Future
                </div>
                
                <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-balance">
                  Give your child the best start in life
                </h2>
                
                <p className="text-lg text-white/90 leading-relaxed mb-8 font-medium">
                  Experience a preschool that prioritizes your child's happiness and growth. Whether you'd like to schedule a tour, have a quick chat, or message us on WhatsApp, we're here to help you make the right choice.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="https://wa.me/918610170313" target="_blank" rel="noreferrer">
                    <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-6 py-6 text-lg font-bold shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2">
                       <MessageCircle className="w-5 h-5" />
                       Chat on WhatsApp
                    </Button>
                  </a>
                  <a href="/enquire">
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white/30 hover:bg-white/10 text-white rounded-full px-6 py-6 text-lg font-medium shadow-sm hover:-translate-y-1 transition-all flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Book a Free School Visit
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Form */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-[2rem] p-8 shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Quick Inquiry</h3>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form submission handled!"); }}>
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Your Name" 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Phone Number" 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Email Address (Optional)" 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-gradient-yellow text-foreground rounded-xl py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                    Send Inquiry
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-center text-sm text-gray-500 font-medium mt-3">
                    Your information is 100% safe. No spam.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
