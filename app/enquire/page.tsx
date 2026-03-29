"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, HandDrawnDivider } from "@/components/floating-doodles"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your enquiry! We will get back to you within 24 hours.")
    setFormData({
      parentName: "",
      childName: "",
      childAge: "",
      phone: "",
      email: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background grain texture */}
      <div className="fixed inset-0 grain-texture z-0" />
      
      {/* Floating doodles */}
      <FloatingDoodles count={25} />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/30 via-cream to-mint/20" />
            
            {/* Extra floating doodles */}
            <div className="absolute top-16 left-10 w-12 h-12 opacity-50 animate-float">
              <StickerIcon type="rainbow" className="w-full h-full" />
            </div>
            <div className="absolute top-20 right-20 w-10 h-10 opacity-40 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            <div className="absolute top-1/2 left-6 w-8 h-8 opacity-40 animate-float-slow">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 right-10 w-14 h-14 opacity-30 animate-float">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-peach/40 rounded-full px-4 py-2 mb-6">
                  <StickerIcon type="heart" className="w-5 h-5" />
                  <span className="text-sm font-medium text-primary">Start the Journey</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 text-balance">
                  Let&apos;s Begin Your Child&apos;s Beautiful Journey
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Fill out the form below and we&apos;ll get in touch within 24 hours to schedule a visit 
                  and answer all your questions.
                </p>
              </div>
            </div>
            
            {/* Wavy bottom */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
                <path
                  d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
                  fill="oklch(0.97 0.015 85)"
                />
              </svg>
            </div>
          </section>
          
          {/* Form Section */}
          <section className="py-20 bg-cream relative overflow-hidden">
            {/* Background doodles */}
            <div className="absolute top-10 left-10 w-10 h-10 opacity-40 animate-float">
              <StickerIcon type="sun" className="w-full h-full" />
            </div>
            <div className="absolute top-32 right-16 w-8 h-8 opacity-50 animate-sparkle">
              <StickerIcon type="sparkle" className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 left-20 w-12 h-12 opacity-30 animate-float-slow">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute bottom-32 right-10 w-6 h-6 opacity-40 animate-float">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            <div className="absolute top-1/2 right-6 w-10 h-10 opacity-30 animate-sparkle">
              <StickerIcon type="moon" className="w-full h-full" />
            </div>
            <div className="absolute top-1/3 left-8 w-8 h-8 opacity-40 animate-float-slow">
              <StickerIcon type="balloon" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-5 gap-12">
                  {/* Form Card */}
                  <div className="lg:col-span-3 relative">
                    {/* Sticker on card */}
                    <div className="absolute -top-5 left-10 w-12 h-12 z-10">
                      <StickerIcon type="rainbow" className="w-full h-full drop-shadow-lg" />
                    </div>
                    <div className="absolute top-10 -right-4 w-8 h-8 z-10 animate-float">
                      <StickerIcon type="star" className="w-full h-full drop-shadow-md" />
                    </div>
                    <div className="absolute -bottom-4 left-1/4 w-10 h-10 z-10 animate-sparkle">
                      <StickerIcon type="sparkle" className="w-full h-full drop-shadow-md" />
                    </div>
                    
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl relative overflow-hidden">
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-lavender/20 to-transparent rounded-bl-full" />
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-peach/20 to-transparent rounded-tr-full" />
                      
                      <div className="relative">
                        <h2 className="font-serif text-2xl md:text-3xl text-primary mb-2">
                          Enquiry Form
                        </h2>
                        <p className="text-muted-foreground mb-8">
                          Tell us about your little one and we&apos;ll be in touch soon!
                        </p>
                        
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="parentName" className="text-foreground font-medium">
                                Parent Name
                              </Label>
                              <Input
                                id="parentName"
                                name="parentName"
                                value={formData.parentName}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="rounded-xl border-2 border-lavender/30 focus:border-primary py-5 px-4"
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="childName" className="text-foreground font-medium">
                                Child&apos;s Name
                              </Label>
                              <Input
                                id="childName"
                                name="childName"
                                value={formData.childName}
                                onChange={handleChange}
                                placeholder="Child's name"
                                className="rounded-xl border-2 border-lavender/30 focus:border-primary py-5 px-4"
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="childAge" className="text-foreground font-medium">
                                Child&apos;s Age
                              </Label>
                              <Input
                                id="childAge"
                                name="childAge"
                                value={formData.childAge}
                                onChange={handleChange}
                                placeholder="e.g., 3 years"
                                className="rounded-xl border-2 border-lavender/30 focus:border-primary py-5 px-4"
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone" className="text-foreground font-medium">
                                Phone Number
                              </Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                className="rounded-xl border-2 border-lavender/30 focus:border-primary py-5 px-4"
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground font-medium">
                              Email Address (Optional)
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              className="rounded-xl border-2 border-lavender/30 focus:border-primary py-5 px-4"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="message" className="text-foreground font-medium">
                              Message
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your child and any questions you have..."
                              className="rounded-xl border-2 border-lavender/30 focus:border-primary min-h-[120px] px-4 py-3"
                              rows={4}
                            />
                          </div>
                          
                          <Button 
                            type="submit"
                            className="w-full btn-gradient-purple text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                          >
                            Enquire Now
                          </Button>
                        </form>
                      </div>
                    </div>
                    
                    {/* Decorative shadow */}
                    <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-[2.5rem] bg-lavender/30" style={{ transform: 'rotate(2deg)' }} />
                  </div>
                  
                  {/* Contact Info Side */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-4">
                      {/* Phone Card */}
                      <div className="relative">
                        <div className="absolute -top-3 left-6 w-8 h-8 z-10">
                          <StickerIcon type="star" className="w-full h-full drop-shadow-md" />
                        </div>
                        <div className="bg-gradient-to-br from-peach/50 to-peach/30 rounded-2xl p-5 flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
                            <Phone className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                            <p className="text-muted-foreground text-sm">+91 8610170313</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Email Card */}
                      <div className="relative">
                        <div className="absolute -top-3 right-6 w-7 h-7 z-10">
                          <StickerIcon type="heart" className="w-full h-full drop-shadow-md" />
                        </div>
                        <div className="bg-gradient-to-br from-mint/50 to-mint/30 rounded-2xl p-5 flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
                            <Mail className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                            <p className="text-muted-foreground text-sm">info@seventhsenseschool.com</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Location Card */}
                      <div className="relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 z-10">
                          <StickerIcon type="cloud" className="w-full h-full drop-shadow-md" />
                        </div>
                        <div className="bg-gradient-to-br from-lavender/50 to-lavender/30 rounded-2xl p-5 flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                            <p className="text-muted-foreground text-sm">129, R – Block, Kovaipudur, Coimbatore, Tamil Nadu-641042</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <HandDrawnDivider />
                    
                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/918610170313"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-full py-4 px-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                    
                    <p className="text-center text-sm text-muted-foreground">
                      We typically respond within a few hours!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
      
      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/918610170313"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
