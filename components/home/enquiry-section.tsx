"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { StickerIcon } from "@/components/floating-doodles"
import { MessageCircle } from "lucide-react"

export function EnquirySection() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your enquiry! We will contact you soon.")
    setFormData({ parentName: "", childName: "", phone: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="relative py-20 bg-cream overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-10 left-10 w-10 h-10 opacity-40 animate-float">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-20 w-8 h-8 opacity-50 animate-sparkle">
        <StickerIcon type="star" className="w-full h-full" />
      </div>
      <div className="absolute bottom-16 left-1/4 w-6 h-6 opacity-40 animate-float-slow">
        <StickerIcon type="heart" className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 right-16 w-12 h-12 opacity-30 animate-float">
        <StickerIcon type="rainbow" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-6 w-5 h-5 opacity-40 animate-sparkle">
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-lavender/40 via-white to-peach/30 rounded-[3rem] p-8 md:p-12 shadow-xl overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-mint/30 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-soft-yellow/30 to-transparent rounded-tr-full" />
            
            {/* Sticker icons on card */}
            <div className="absolute -top-3 left-10 w-10 h-10">
              <StickerIcon type="sun" className="w-full h-full drop-shadow-md" />
            </div>
            <div className="absolute top-8 right-8 w-8 h-8 animate-float">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            <div className="absolute bottom-8 left-8 w-7 h-7 animate-float-slow">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Quick Enquiry</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-primary text-balance">
                  Start Your Child&apos;s Journey Today
                </h2>
                
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Fill out this quick form and we&apos;ll get in touch within 24 hours to schedule a visit!
                </p>
                
                {/* WhatsApp button */}
                <a
                  href="https://wa.me/918610170313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full py-3 px-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="quickParentName" className="text-foreground font-medium">
                    Parent Name
                  </Label>
                  <Input
                    id="quickParentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-xl border-2 border-lavender/30 focus:border-primary py-5 px-4 bg-white/80"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quickChildName" className="text-foreground font-medium">
                    Child&apos;s Name
                  </Label>
                  <Input
                    id="quickChildName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Child's name"
                    className="rounded-xl border-2 border-lavender/30 focus:border-primary py-5 px-4 bg-white/80"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quickPhone" className="text-foreground font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="quickPhone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="rounded-xl border-2 border-lavender/30 focus:border-primary py-5 px-4 bg-white/80"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full btn-gradient-purple text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  Enquire Now
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  Or visit our{" "}
                  <Link href="/contact" className="text-primary hover:underline font-medium">
                    full contact page
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
