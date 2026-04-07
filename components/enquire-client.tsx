"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickerIcon, SectionDoodles, FloatingDoodles } from "@/components/floating-doodles"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useForm, ValidationError } from '@formspree/react';

export default function EnquireClient() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    location: "",
    source: "",
    message: "",
  })

  const [state, handleSubmit] = useForm('mwvwarew');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name || e.target.id]: e.target.value })
  }

  const sources = [
    "Instagram",
    "Google",
    "Friend / Family",
    "Walk-in",
    "Other"
  ]

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background grain texture */}
      <div className="fixed inset-0 grain-texture z-0 opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 flex items-center justify-center py-12 md:py-20 lg:py-24 relative overflow-hidden px-4 bg-transparent">
          {/* Background gradients / SectionDoodles for richer UX */}
          <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-white/80 to-soft-yellow/20 -z-10" />
          <SectionDoodles className="opacity-30" />
          
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mint/5 rounded-full blur-[100px] -z-20 mix-blend-multiply opacity-70 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-soft-yellow/10 rounded-full blur-[100px] -z-20 mix-blend-multiply opacity-70 -translate-x-1/3 translate-y-1/3" />
          
          <div className="absolute top-24 left-10 w-16 h-16 opacity-30 animate-float hidden lg:block">
            <StickerIcon type="cloud" className="w-full h-full" />
          </div>
          <div className="absolute bottom-24 right-10 w-14 h-14 opacity-20 animate-float-slow hidden lg:block">
            <StickerIcon type="rainbow" className="w-full h-full" />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto">
               
               <AnimatePresence mode="wait">
                  {state.succeeded ? (
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-lavender/20 text-center relative overflow-hidden"
                     >
                        {/* Decorative sparkles for celebration */}
                        <div className="absolute top-10 left-10 w-10 h-10 animate-sparkle opacity-60">
                           <StickerIcon type="sparkle" className="w-full h-full" />
                        </div>
                        <div className="absolute bottom-10 right-10 w-12 h-12 animate-sparkle opacity-40" style={{ animationDelay: '1s' }}>
                           <StickerIcon type="star" className="w-full h-full" />
                        </div>

                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-100/50">
                           <CheckCircle2 className="w-12 h-12 text-green-500" />
                        </div>
                        <h2 className="font-semibold text-4xl md:text-5xl text-primary mb-6">Yay! We&apos;ve Got It!</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
                           Thank you for reaching out, {formData.parentName.split(' ')[0]}! Our team will get back to you within 24 hours to schedule your magical school visit.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                           <Link href="/">
                              <Button className="btn-gradient-yellow text-primary rounded-full px-10 py-6 text-lg font-bold shadow-lg hover:scale-105 transition-all w-full sm:w-auto">
                                 Back to Home
                              </Button>
                           </Link>
                           <Button 
                              variant="outline" 
                              onClick={() => window.location.reload()}
                              className="rounded-full px-10 py-6 text-lg font-bold border-2 border-primary/20 hover:bg-lavender/10 transition-all w-full sm:w-auto"
                           >
                              Send Another
                           </Button>
                        </div>
                     </motion.div>
                  ) : (
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-[3rem] shadow-2xl border border-lavender/20 relative overflow-hidden"
                     >
                        {/* Header portion of card */}
                        <div className="bg-gradient-to-br from-soft-yellow/30 to-cream p-10 md:p-14 border-b border-soft-yellow/20 relative">
                           <div className="absolute -top-4 right-8 w-16 h-16 animate-sparkle opacity-80">
                              <StickerIcon type="sparkle" className="w-full h-full drop-shadow-sm" />
                           </div>
                           <h1 className="font-semibold text-4xl md:text-5xl text-primary mb-4 leading-tight">
                              Book a Free Visit
                           </h1>
                           <p className="text-lg text-muted-foreground max-w-lg">
                              Provide a few details about your child, and we&apos;ll prepare a warm welcome for your visit.
                           </p>
                        </div>

                        {/* Form portion */}
                        <div className="p-10 md:p-14">
                           <form onSubmit={handleSubmit} className="space-y-10">
                              
                              {/* Step 1: Parent & Child */}
                              <div className="space-y-6">
                                 <h3 className="font-semibold text-primary/60 uppercase tracking-widest text-sm flex items-center gap-4">
                                    <span className="w-8 h-px bg-primary/20"></span>
                                    1. Who is coming?
                                 </h3>
                                 
                                 <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                       <Label htmlFor="parentName" className="text-foreground/80 font-semibold ml-1">Parent&apos;s Name</Label>
                                       <Input
                                          id="parentName"
                                          name="parentName"
                                          value={formData.parentName}
                                          onChange={handleChange}
                                          placeholder="e.g. Sarah J."
                                          className="rounded-2xl border-2 border-lavender/30 focus:border-peach focus:ring-peach/20 bg-cream/30 py-7 px-5 text-lg transition-all"
                                          required
                                       />
                                       <ValidationError prefix="Parent Name" field="parentName" errors={state.errors} className="text-red-500 text-sm ml-2" />
                                    </div>
                                    
                                    <div className="grid grid-cols-3 gap-4">
                                       <div className="space-y-3 col-span-2">
                                          <Label htmlFor="childName" className="text-foreground/80 font-semibold ml-1">Child&apos;s Name</Label>
                                          <Input
                                             id="childName"
                                             name="childName"
                                             value={formData.childName}
                                             onChange={handleChange}
                                             placeholder="e.g. Leo"
                                             className="rounded-2xl border-2 border-lavender/30 focus:border-peach focus:ring-peach/20 bg-cream/30 py-7 px-5 text-lg transition-all"
                                             required
                                          />
                                       </div>
                                       <div className="space-y-3 col-span-1">
                                          <Label htmlFor="childAge" className="text-foreground/80 font-semibold ml-1">Age</Label>
                                          <Input
                                             id="childAge"
                                             name="childAge"
                                             type="number"
                                             min="1"
                                             max="10"
                                             value={formData.childAge}
                                             onChange={handleChange}
                                             placeholder="Age"
                                             className="rounded-2xl border-2 border-lavender/30 focus:border-peach focus:ring-peach/20 bg-cream/30 py-7 px-5 text-lg transition-all"
                                             required
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* Step 2: Contact Details */}
                              <div className="space-y-6 pt-2">
                                 <h3 className="font-semibold text-primary/60 uppercase tracking-widest text-sm flex items-center gap-4">
                                    <span className="w-8 h-px bg-primary/20"></span>
                                    2. How can we reach you?
                                 </h3>
                                 
                                 <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                       <Label htmlFor="phone" className="text-foreground/80 font-semibold ml-1">Phone Number</Label>
                                       <Input
                                          id="phone"
                                          name="phone"
                                          type="tel"
                                          value={formData.phone}
                                          onChange={handleChange}
                                          placeholder="+91 00000 00000"
                                          className="rounded-2xl border-2 border-lavender/30 focus:border-mint focus:ring-mint/20 bg-cream/30 py-7 px-5 text-lg transition-all"
                                          required
                                       />
                                       <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm ml-2" />
                                    </div>
                                    <div className="space-y-3">
                                       <Label htmlFor="email" className="text-foreground/80 font-semibold ml-1">Email Address</Label>
                                       <Input
                                          id="email"
                                          name="email"
                                          type="email"
                                          value={formData.email}
                                          onChange={handleChange}
                                          placeholder="hello@example.com"
                                          className="rounded-2xl border-2 border-lavender/30 focus:border-mint focus:ring-mint/20 bg-cream/30 py-7 px-5 text-lg transition-all"
                                       />
                                    </div>
                                 </div>
                              </div>

                              {/* Step 3: Source */}
                              <div className="space-y-6 pt-2">
                                 <h3 className="font-semibold text-primary/60 uppercase tracking-widest text-sm flex items-center gap-4">
                                    <span className="w-8 h-px bg-primary/20"></span>
                                    3. Discovery
                                 </h3>
                                 
                                 <div className="space-y-3">
                                    <Label className="text-foreground/80 font-semibold ml-1">How did you hear about us?</Label>
                                    <div className="flex flex-wrap gap-3">
                                       {sources.map((src) => (
                                          <button
                                             key={src}
                                             type="button"
                                             onClick={() => setFormData({ ...formData, source: src })}
                                             className={`px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300 ${
                                                formData.source === src 
                                                   ? "bg-primary text-white border-primary shadow-md" 
                                                   : "bg-cream/40 border-lavender/20 text-foreground/70 hover:border-primary/30"
                                             }`}
                                          >
                                             {src}
                                          </button>
                                       ))}
                                    </div>
                                 </div>
                              </div>

                              {/* Step 4: Specifics */}
                              <div className="space-y-6 pt-2">
                                 <h3 className="font-semibold text-primary/60 uppercase tracking-widest text-sm flex items-center gap-4">
                                    <span className="w-8 h-px bg-primary/20"></span>
                                    4. Anything else? 
                                 </h3>
                                 
                                 <div className="space-y-3">
                                    <Label htmlFor="message" className="text-foreground/80 font-semibold ml-1">Message (Optional)</Label>
                                    <Textarea
                                       id="message"
                                       name="message"
                                       value={formData.message}
                                       onChange={handleChange}
                                       placeholder="Any specific questions or concerns?"
                                       className="rounded-2xl border-2 border-lavender/30 focus:border-lavender focus:ring-lavender/20 bg-cream/30 py-5 px-5 text-lg transition-all min-h-[140px] resize-none"
                                    />
                                 </div>
                              </div>

                              <div className="pt-8 flex flex-col sm:flex-row items-center gap-6 justify-between border-t border-lavender/20">
                                 <p className="text-sm text-center sm:text-left text-muted-foreground flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    Your information is safe. No spam.
                                 </p>
                                 <Button 
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full sm:w-auto btn-gradient-yellow text-primary rounded-full px-12 py-8 text-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 group disabled:opacity-50"
                                 >
                                    {state.submitting ? "Sending..." : "Submit Request"}
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                 </Button>
                              </div>
                           </form>
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>

            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
