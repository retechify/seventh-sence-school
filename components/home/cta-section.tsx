"use client"

import { Button } from "@/components/ui/button"
import { StickerIcon, SectionDoodles } from "@/components/floating-doodles"
import { MessageCircle, Send, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm, ValidationError } from '@formspree/react';

export function CtaSection() {
  const [state, handleSubmit] = useForm('mwvwarew');

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white" id="book-visit">
      {/* Background shapes & texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-yellow/10 rounded-full blur-3xl" />

      {/* Section-specific doodles (white version for dark bg) */}
      <SectionDoodles className="opacity-20 invert grayscale brightness-200" />

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

                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <a 
                    href="https://wa.me/918610170313?text=Hi%2C%20I%E2%80%99m%20interested%20in%20admission%20for%20my%20child.%20Can%20you%20share%20details%3F" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full btn-gradient-yellow text-foreground rounded-full px-8 py-8 text-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                       <MessageCircle className="w-6 h-6" />
                       Chat on WhatsApp
                    </Button>
                  </a>
                  <a href="/enquire" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full bg-white/10 border-white/40 hover:bg-white/20 text-white rounded-full px-8 py-8 text-xl font-medium shadow-sm hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      Book a Free Visit
                    </Button>
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-soft-yellow font-semibold tracking-wide animate-pulse">
                   <div className="w-2 h-2 rounded-full bg-soft-yellow" />
                   Quick responses. We’re happy to help!
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
                className="bg-white rounded-[2rem] p-8 shadow-xl min-h-[400px] flex flex-col justify-center"
              >
                <AnimatePresence mode="wait">
                  {state.succeeded ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Inquiry Sent!</h3>
                      <p className="text-gray-600 mb-8">
                        Thank you for reaching out. Our team will get back to you shortly.
                      </p>
                      <Button 
                        onClick={() => window.location.reload()}
                        className="bg-primary hover:bg-primary/90 text-white rounded-xl px-10 py-6 font-bold transition-all"
                      >
                        Send Another
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div key="form">
                      <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Quick Inquiry</h3>
                      
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-1">
                          <label htmlFor="name" className="sr-only">Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            placeholder="Your Name" 
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                            required
                          />
                          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs ml-1" />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="phone" className="sr-only">Phone Number</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            placeholder="Phone Number" 
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                            required
                          />
                          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs ml-1" />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="email" className="sr-only">Email Address</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            placeholder="Email Address (Optional)" 
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-800 placeholder:text-gray-400"
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs ml-1" />
                        </div>
                        
                        <Button 
                          type="submit" 
                          disabled={state.submitting}
                          className="w-full btn-gradient-yellow text-foreground rounded-xl py-6 text-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                        >
                          {state.submitting ? "Sending..." : "Send Inquiry"}
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <p className="text-center text-sm text-gray-500 font-medium mt-3">
                          Your information is safe. No spam.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
