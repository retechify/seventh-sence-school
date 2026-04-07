"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, SectionDoodles } from "@/components/floating-doodles"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, Instagram } from "lucide-react"

import Link from 'next/link';

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 grain-texture z-0 opacity-40" />
      <FloatingDoodles count={15} />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1">
          {/* Header Banner */}
          <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/30 via-cream/80 to-peach/20 -z-10" />
            <SectionDoodles className="opacity-40" />
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
          
          <section className="py-12 pb-24 relative overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-lavender/5 to-white -z-10" />
            <SectionDoodles className="opacity-20" />
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
                       <a href="https://wa.me/918610170313?text=Hi%2C%20I%E2%80%99m%20interested%20in%20admission%20for%20my%20child.%20Can%20you%20share%20details%3F" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#25D366]/70 transition-colors flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-wider">
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
                         <p className="text-muted-foreground text-sm">R130, Block R, Kovaipudur, Coimbatore, Tamil Nadu - 641042</p>
                      </div>
                   </div>
                </div>
                 
                 {/* Visual Decor for the remaining space */}
                 <div className="relative flex items-center justify-center min-h-[400px]">
                    <div className="absolute inset-0 animate-pulse opacity-20 bg-gradient-to-tr from-peach/30 via-lavender/30 to-mint/30 rounded-[3rem] blur-3xl" />
                    <div className="relative z-10 text-center space-y-6 max-w-sm">
                       <div className="w-24 h-24 mx-auto animate-float">
                          <StickerIcon type="sparkle" className="w-full h-full text-peach" />
                       </div>
                       <h2 className="font-semibold text-3xl text-primary leading-tight">
                          We&apos;re just a message away!
                       </h2>
                       <p className="text-muted-foreground text-pretty">
                          Choose your favorite way to say hello. We&apos;re highly responsive on WhatsApp and Phone for quick queries.
                       </p>
                       <div className="pt-4">
                          <Link href="/enquire">
                             <Button className="btn-gradient-yellow text-foreground rounded-full px-10 py-6 font-bold shadow-lg hover:scale-105 transition-all">
                                Book a School Visit
                             </Button>
                          </Link>
                       </div>
                    </div>
                 </div>

              </div>
            </div>
          </section>

          {/* Map Area */}
          <section className="h-[50vh] min-h-[400px] w-full relative">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.022611727412!2d76.93035792774732!3d10.94820605224041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bed7088354f%3A0x11a9d4fa08dd223b!2sR130%2C%20Block%20R%2C%20R%20-%20Block%2C%20Coimbatore%2C%20Kovaipudur%2C%20Tamil%20Nadu%20641042!5e1!3m2!1sen!2sin!4v1775483077848!5m2!1sen!2sin" 
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

    </div>
  )
}
