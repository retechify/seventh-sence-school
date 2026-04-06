"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickerIcon } from "@/components/floating-doodles"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
       setIsSubmitted(false)
       setFormData({
         parentName: "",
         childName: "",
         childAge: "",
         phone: "",
         email: "",
         location: "",
         message: "",
       })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Softer background without the heavy doodles to create a focused 'checkout' style experience */}
      <div className="fixed inset-0 grain-texture z-0 opacity-40" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 flex items-center justify-center py-12 md:py-20 lg:py-24 relative overflow-hidden">
          {/* Very subtle background blobs */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mint/10 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-70 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-soft-yellow/20 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-70 -translate-x-1/3 translate-y-1/3" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
               
               {isSubmitted ? (
                  <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-lavender/20 text-center relative overflow-hidden animate-in fade-in-0 zoom-in-95 duration-500">
                     <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                     </div>
                     <h2 className="font-semibold text-4xl md:text-5xl text-primary mb-6">You&apos;re All Set!</h2>
                     <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
                        Thank you for taking the first step. Our team will reach out to you within 24 hours to schedule your lovely visit.
                     </p>
                     <Link href="/">
                        <Button className="btn-gradient-purple text-white rounded-full px-10 py-6 text-lg font-bold shadow-lg hover:scale-105 transition-all">
                           Return to Home
                        </Button>
                     </Link>
                  </div>
               ) : (
                  <div className="bg-white rounded-[3rem] shadow-2xl border border-lavender/20 relative overflow-hidden">
                     {/* Header portion of card */}
                     <div className="bg-gradient-to-br from-soft-yellow/30 to-cream p-10 md:p-14 border-b border-soft-yellow/20 relative">
                        <div className="absolute -top-4 right-8 w-16 h-16 animate-sparkle opacity-80">
                           <StickerIcon type="sparkle" className="w-full h-full drop-shadow-sm" />
                        </div>
                        <h1 className="font-semibold text-4xl md:text-5xl text-primary mb-4 leading-tight">
                           Book a Free School Visit
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg">
                           Give us a few details about your little one, and we'll get back to you with a warm welcome and all the information you need.
                        </p>
                     </div>

                     {/* Form portion */}
                     <div className="p-10 md:p-14">
                        <form onSubmit={handleSubmit} className="space-y-8">
                           
                           {/* Step 1: Parent & Child */}
                           <div className="space-y-6">
                              <h3 className="font-semibold text-primary/60 uppercase tracking-widest text-sm flex items-center gap-4">
                                 <span className="w-8 h-px bg-primary/20"></span>
                                 1. Who is coming?
                              </h3>
                              
                              <div className="grid md:grid-cols-2 gap-6">
                                 <div className="space-y-2 relative group">
                                    <Label htmlFor="parentName" className="text-foreground/80 font-medium ml-1">Parent&apos;s Name</Label>
                                    <Input
                                       id="parentName"
                                       name="parentName"
                                       value={formData.parentName}
                                       onChange={handleChange}
                                       placeholder="e.g. Sarah Connor"
                                       className="rounded-2xl border-2 border-lavender/30 focus:border-peach focus:ring-peach/20 bg-cream/30 py-6 px-5 text-lg transition-all"
                                       required
                                    />
                                 </div>
                                 
                                 <div className="grid grid-cols-3 gap-6">
                                    <div className="space-y-2 col-span-2 relative group">
                                       <Label htmlFor="childName" className="text-foreground/80 font-medium ml-1">Child&apos;s Name</Label>
                                       <Input
                                          id="childName"
                                          name="childName"
                                          value={formData.childName}
                                          onChange={handleChange}
                                          placeholder="e.g. John"
                                          className="rounded-2xl border-2 border-lavender/30 focus:border-peach focus:ring-peach/20 bg-cream/30 py-6 px-5 text-lg transition-all"
                                          required
                                       />
                                    </div>
                                    <div className="space-y-2 col-span-1 relative group">
                                       <Label htmlFor="childAge" className="text-foreground/80 font-medium ml-1">Age</Label>
                                       <Input
                                          id="childAge"
                                          name="childAge"
                                          value={formData.childAge}
                                          onChange={handleChange}
                                          placeholder="Years"
                                          className="rounded-2xl border-2 border-lavender/30 focus:border-peach focus:ring-peach/20 bg-cream/30 py-6 px-5 text-lg transition-all"
                                          required
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Step 2: Contact Details */}
                           <div className="space-y-6 pt-4">
                              <h3 className="font-semibold text-primary/60 uppercase tracking-widest text-sm flex items-center gap-4">
                                 <span className="w-8 h-px bg-primary/20"></span>
                                 2. How can we reach you?
                              </h3>
                              
                              <div className="grid md:grid-cols-2 gap-6">
                                 <div className="space-y-2 relative group">
                                    <Label htmlFor="phone" className="text-foreground/80 font-medium ml-1">Phone Number</Label>
                                    <Input
                                       id="phone"
                                       name="phone"
                                       type="tel"
                                       value={formData.phone}
                                       onChange={handleChange}
                                       placeholder="+91 00000 00000"
                                       className="rounded-2xl border-2 border-lavender/30 focus:border-mint focus:ring-mint/20 bg-cream/30 py-6 px-5 text-lg transition-all"
                                       required
                                    />
                                 </div>
                                 <div className="space-y-2 relative group">
                                    <Label htmlFor="email" className="text-foreground/80 font-medium ml-1">Email Address</Label>
                                    <Input
                                       id="email"
                                       name="email"
                                       type="email"
                                       value={formData.email}
                                       onChange={handleChange}
                                       placeholder="hello@example.com"
                                       className="rounded-2xl border-2 border-lavender/30 focus:border-mint focus:ring-mint/20 bg-cream/30 py-6 px-5 text-lg transition-all"
                                    />
                                 </div>
                              </div>
                           </div>

                           {/* Step 3: Specifics */}
                           <div className="space-y-6 pt-4">
                              <h3 className="font-semibold text-primary/60 uppercase tracking-widest text-sm flex items-center gap-4">
                                 <span className="w-8 h-px bg-primary/20"></span>
                                 3. Anything else? 
                              </h3>
                              
                              <div className="space-y-2 relative group">
                                 <Label htmlFor="message" className="text-foreground/80 font-medium ml-1">Message (Optional)</Label>
                                 <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about any specific programs you are interested in, or any questions you have prior to visiting."
                                    className="rounded-2xl border-2 border-lavender/30 focus:border-lavender focus:ring-lavender/20 bg-cream/30 py-4 px-5 text-lg transition-all min-h-[140px] resize-none"
                                 />
                              </div>
                           </div>

                           <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-lavender/20">
                              <p className="text-sm text-muted-foreground">
                                 Your data is secure and will only be used to contact you regarding your enquiry.
                              </p>
                              <Button 
                                 type="submit"
                                 className="w-full sm:w-auto btn-gradient-yellow text-foreground rounded-full px-12 py-8 text-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-1 group"
                              >
                                 Submit Request
                                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                           </div>
                        </form>
                     </div>
                  </div>
               )}

            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
