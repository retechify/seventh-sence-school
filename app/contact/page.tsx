"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon } from "@/components/floating-doodles"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 grain-texture z-0 opacity-40" />
      <FloatingDoodles count={15} />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1">
          {/* Header Banner */}
          <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-lavender/20 to-background" />
            <div className="container mx-auto px-4 relative">
              <div className="max-w-2xl mx-auto text-center">
                 <div className="inline-flex items-center gap-2 bg-peach/40 rounded-full px-4 py-2 mb-6">
                    <StickerIcon type="cloud" className="w-4 h-4" />
                    <span className="text-sm font-medium text-primary">Get in Touch</span>
                 </div>
                 <h1 className="font-semibold text-5xl md:text-6xl text-primary mb-6 text-balance leading-tight">
                    Let’s Connect!
                 </h1>
                 <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                    We’d love to hear from you. Drop by for a cup of tea and a friendly chat about your child’s future.
                 </p>
              </div>
            </div>
          </section>
          
          <section className="py-12 pb-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                
                {/* Masonry-style Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-6 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-soft-yellow/20 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
                   
                   {/* Phone Card (Tall) */}
                   <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-lavender/30 shadow-xl sm:row-span-2 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden flex flex-col">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-peach/20 rounded-bl-full -z-10" />
                      <div className="w-16 h-16 rounded-2xl bg-peach/30 flex items-center justify-center mb-16 shadow-inner shrink-0">
                         <Phone className="w-8 h-8 text-primary" />
                      </div>
                      <div className="mt-auto">
                        <h3 className="font-semibold text-2xl text-primary mb-2">Give Us a Call</h3>
                        <p className="text-muted-foreground mb-6 text-sm">We&apos;re here Monday through Friday, 8am to 6pm.</p>
                        <a href="tel:+918610170313" className="text-xl font-medium hover:text-peach transition-colors block border-t border-peach/20 pt-4">+91 8610170313</a>
                      </div>
                   </div>

                   {/* Email Card */}
                   <div className="bg-mint/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/40 rounded-tl-full -z-10" />
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                         <Mail className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl text-primary mb-2">Email Us</h3>
                      <a href="mailto:info@seventhsenseschool.com" className="text-primary hover:text-mint transition-colors text-sm font-medium">info@seventhsenseschool.com</a>
                   </div>

                    {/* WhatsApp Card */}
                    <div className="bg-[#25D366]/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden line-clamp-none">
                       <div className="absolute top-0 left-0 w-24 h-24 bg-white/40 rounded-br-full -z-10" />
                       <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 flex items-center justify-center mb-6 shadow-sm">
                          <MessageCircle className="w-7 h-7 text-[#25D366]" />
                       </div>
                       <h3 className="font-semibold text-xl pr-4 text-primary mb-2 text-balance">Chat on WhatsApp</h3>
                       <a href="https://wa.me/918610170313" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#25D366]/70 transition-colors flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-wider">
                          Start Chat <ArrowRight className="w-4 h-4" />
                       </a>
                    </div>

                    {/* Instagram Card */}
                    <div className="bg-peach/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-bl-full -z-10" />
                       <div className="w-14 h-14 rounded-2xl bg-peach/30 flex items-center justify-center mb-6 shadow-sm">
                          <Instagram className="w-7 h-7 text-primary" />
                       </div>
                       <h3 className="font-semibold text-xl text-primary mb-2">Follow Us</h3>
                       <a href="https://www.instagram.com/seventhsense_cbe/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-peach transition-colors flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-wider">
                          Instagram <ArrowRight className="w-4 h-4" />
                       </a>
                    </div>
                   
                   {/* Address Card (Spans full width on small, below others on sm) */}
                   <div className="sm:col-span-2 bg-lavender/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white shadow-xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden flex flex-col md:flex-row items-center gap-6">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/30 rounded-full blur-2xl -z-10" />
                      
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm shrink-0">
                         <MapPin className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                         <h3 className="font-semibold text-2xl text-primary mb-2">Visit the School</h3>
                         <p className="text-muted-foreground text-sm">129, R – Block, Kovaipudur, Coimbatore, Tamil Nadu-641042</p>
                      </div>
                   </div>
                </div>
                
                {/* Simple Contact Form */}
                <div className="relative">
                   <div className="absolute -top-10 -right-10 w-24 h-24 animate-float opacity-50 z-20 pointer-events-none">
                      <StickerIcon type="star" className="w-full h-full drop-shadow-xl" />
                   </div>
                   
                   <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-lavender/20 relative overflow-hidden">
                      {/* Inner blob */}
                      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-mint/20 rounded-full blur-3xl mix-blend-multiply opacity-50" />
                      
                      <h2 className="font-semibold text-3xl text-primary mb-8 leading-tight">
                         Send us a Message
                      </h2>
                      
                      <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! We'll reply soon."); }}>
                         <div className="space-y-2">
                           <Label htmlFor="name" className="text-foreground/80 font-medium ml-1">Your Name</Label>
                           <Input
                              id="name"
                              placeholder="e.g. Emily Clark"
                              className="rounded-2xl border-2 border-lavender/30 focus:border-peach focus:ring-peach/20 bg-cream/30 py-6 px-5 transition-all"
                              required
                           />
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="email" className="text-foreground/80 font-medium ml-1">Email Address</Label>
                           <Input
                              id="email"
                              type="email"
                              placeholder="emily@example.com"
                              className="rounded-2xl border-2 border-lavender/30 focus:border-mint focus:ring-mint/20 bg-cream/30 py-6 px-5 transition-all"
                              required
                           />
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="message" className="text-foreground/80 font-medium ml-1">Your Message</Label>
                           <Textarea
                              id="message"
                              placeholder="How can we help you today?"
                              className="rounded-2xl border-2 border-lavender/30 focus:border-lavender focus:ring-lavender/20 bg-cream/30 py-4 px-5 transition-all min-h-[160px] resize-none"
                              required
                           />
                         </div>
                         <div className="pt-2">
                            <Button 
                              type="submit"
                              className="w-full btn-gradient-yellow text-foreground rounded-full py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] hover:-translate-y-1"
                            >
                              Send Message
                            </Button>
                         </div>
                      </form>
                   </div>
                </div>

              </div>
            </div>
          </section>

          {/* Map Area */}
          <section className="h-[50vh] min-h-[400px] w-full relative">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.4!2d76.9248!3d10.9416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0042456e4f%3A0xa193910c2c1bbd00!2s129%2C%20R%20Block%2C%20Kovaipudur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641042!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin" 
               className="absolute inset-0 w-full h-full grayscale-[20%] contrast-125 opacity-90"
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay gradient so it blends into the page */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/20 to-transparent" />
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
