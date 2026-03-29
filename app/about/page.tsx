import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, HandDrawnDivider } from "@/components/floating-doodles"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Target, Award, Users } from "lucide-react"

export const metadata = {
  title: "About Us | Seventh sense school of arts Preschool",
  description: "Meet the heart behind Seventh sense school of arts. Learn about our vision, mission, and the passionate team dedicated to nurturing young minds.",
}

const values = [
  {
    icon: Eye,
    stickerType: "sun" as const,
    title: "Her Vision",
    description: "To create a world where every child feels valued, understood, and empowered to reach their fullest potential through love-based education.",
    color: "peach",
    hue: 50,
  },
  {
    icon: Target,
    stickerType: "rainbow" as const,
    title: "Her Mission",
    description: "To provide a nurturing, stimulating environment that fosters creativity, curiosity, and confidence in every child who walks through our doors.",
    color: "mint",
    hue: 160,
  },
  {
    icon: Award,
    stickerType: "star" as const,
    title: "Her Impact",
    description: "Over 500 children have discovered their unique spark at Seventh sense school of arts, growing into confident, creative, and compassionate individuals.",
    color: "lavender",
    hue: 300,
  },
]

export default function AboutPage() {
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
          {/* Hero Banner */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/30 via-cream to-peach/20" />
            
            {/* Extra doodles */}
            <div className="absolute top-16 left-10 w-12 h-12 opacity-50 animate-float">
              <StickerIcon type="moon" className="w-full h-full" />
            </div>
            <div className="absolute top-24 right-16 w-10 h-10 opacity-60 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            <div className="absolute top-1/2 left-8 w-8 h-8 opacity-40 animate-float-slow">
              <StickerIcon type="sparkle" className="w-full h-full" />
            </div>
            <div className="absolute bottom-32 right-10 w-14 h-14 opacity-30 animate-float">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 left-1/4 w-6 h-6 opacity-50 animate-sparkle">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 bg-soft-yellow/50 rounded-full px-4 py-2 mb-6">
                  <StickerIcon type="heart" className="w-5 h-5" />
                  <span className="text-sm font-medium text-primary">Our Story</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 text-balance">
                  Meet the Heart Behind Seventh sense school of arts
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  A journey of love, dedication, and an unwavering belief in the magic of childhood.
                </p>
              </div>
              
              {/* Main banner image */}
              <div className="relative max-w-4xl mx-auto">
                {/* Stickers around image */}
                <div className="absolute -top-6 -left-6 w-12 h-12 z-10 animate-float">
                  <StickerIcon type="sun" className="w-full h-full drop-shadow-lg" />
                </div>
                <div className="absolute -top-4 right-16 w-10 h-10 z-10 animate-sparkle">
                  <StickerIcon type="star" className="w-full h-full drop-shadow-lg" />
                </div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 z-10 animate-float-slow">
                  <StickerIcon type="heart" className="w-full h-full drop-shadow-md" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 z-10 animate-sparkle">
                  <StickerIcon type="sparkle" className="w-full h-full drop-shadow-lg" />
                </div>
                <div className="absolute bottom-10 -left-6 w-12 h-12 z-10 animate-float">
                  <StickerIcon type="cloud" className="w-full h-full drop-shadow-md" />
                </div>
                
                <div className="relative bg-white rounded-[2rem] p-4 shadow-2xl">
                  <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-mint/40 via-baby-blue/30 to-lavender/40 overflow-hidden flex items-center justify-center">
                    {/* Illustration */}
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                      <div className="flex items-center gap-8">
                        {/* Teacher figure */}
                        <div className="relative">
                          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-lavender to-purple-light flex items-center justify-center shadow-xl">
                            <Users className="w-16 h-16 md:w-24 md:h-24 text-primary" />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-soft-yellow rounded-full flex items-center justify-center shadow-lg animate-float">
                            <StickerIcon type="heart" className="w-7 h-7" />
                          </div>
                        </div>
                        
                        {/* Children figures */}
                        <div className="grid grid-cols-2 gap-4">
                          {[50, 160, 230, 95].map((hue, i) => (
                            <div
                              key={i}
                              className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg flex items-center justify-center animate-float"
                              style={{ 
                                animationDelay: `${i * 0.3}s`,
                                background: `linear-gradient(135deg, oklch(0.9 0.1 ${hue}), oklch(0.85 0.08 ${hue}))`
                              }}
                            >
                              <svg viewBox="0 0 40 40" className="w-10 h-10 md:w-12 md:h-12">
                                <circle cx="20" cy="20" r="14" fill="oklch(0.95 0.05 70)" />
                                <circle cx="16" cy="18" r="2" fill="oklch(0.3 0.05 300)" />
                                <circle cx="24" cy="18" r="2" fill="oklch(0.3 0.05 300)" />
                                <path d="M15 24 Q20 28 25 24" stroke="oklch(0.3 0.05 300)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                              </svg>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Shadow decoration */}
                <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-[2rem] bg-lavender/30" style={{ transform: 'rotate(2deg)' }} />
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
          
          {/* Story Section */}
          <section className="py-20 bg-cream relative overflow-hidden">
            {/* Background doodles */}
            <div className="absolute top-10 left-10 w-8 h-8 opacity-40 animate-float">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            <div className="absolute top-20 right-16 w-10 h-10 opacity-30 animate-float-slow">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute bottom-16 left-20 w-6 h-6 opacity-50 animate-sparkle">
              <StickerIcon type="sparkle" className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 right-10 w-8 h-8 opacity-40 animate-float">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl text-primary text-balance">
                  A Story Written in Love
                </h2>
                
                <HandDrawnDivider />
                
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Seventh sense school of arts was born from a simple yet powerful belief: every child deserves to feel 
                  special, understood, and celebrated for who they are. Our founder, with over a decade 
                  of experience in early childhood education, saw a gap in traditional schooling - the 
                  need for a place where learning is joyful, where creativity flourishes, and where 
                  each child&apos;s unique spark is nurtured.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  What started as a dream in a small classroom has grown into a thriving community of 
                  passionate educators, supportive parents, and most importantly, happy children who 
                  come to school each day with excitement in their hearts.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Today, Seventh sense school of arts stands as a testament to what&apos;s possible when education is 
                  rooted in love, guided by research, and delivered with genuine care for each child&apos;s 
                  well-being and development.
                </p>
                
                <HandDrawnDivider />
              </div>
            </div>
          </section>
          
          {/* Vision, Mission, Impact Cards */}
          <section className="py-20 bg-background relative overflow-hidden">
            {/* Background doodles */}
            <div className="absolute top-20 left-10 w-10 h-10 opacity-30 animate-float">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute top-32 right-16 w-8 h-8 opacity-40 animate-sparkle">
              <StickerIcon type="sparkle" className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 left-1/4 w-6 h-6 opacity-50 animate-float-slow">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            <div className="absolute bottom-32 right-10 w-10 h-10 opacity-40 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={value.title} className="relative group">
                    {/* Sticker on top */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 z-10">
                      <StickerIcon type={value.stickerType} className="w-full h-full drop-shadow-lg" />
                    </div>
                    
                    <div 
                      className="relative rounded-[2rem] p-8 pt-10 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, oklch(0.92 0.08 ${value.hue}), oklch(0.96 0.04 ${value.hue}))`
                      }}
                    >
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="font-serif text-xl text-primary mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      
                      {/* Decorative */}
                      <div className="absolute top-6 right-6 w-6 h-6 opacity-40">
                        <StickerIcon type="sparkle" className="w-full h-full" />
                      </div>
                      <div className="absolute bottom-6 right-6 w-5 h-5 opacity-30 animate-float">
                        <StickerIcon type="heart" className="w-full h-full" />
                      </div>
                    </div>
                    
                    {/* Shadow card */}
                    <div 
                      className="absolute -z-10 -bottom-2 -right-2 w-full h-full rounded-[2rem] bg-white/50"
                      style={{ transform: 'rotate(2deg)' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-lavender/30 via-cream to-mint/20 relative overflow-hidden">
            {/* Doodles */}
            <div className="absolute top-10 left-16 w-12 h-12 opacity-40 animate-float">
              <StickerIcon type="rainbow" className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 right-16 w-10 h-10 opacity-50 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            <div className="absolute top-1/2 right-8 w-8 h-8 opacity-40 animate-float-slow">
              <StickerIcon type="balloon" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl text-primary text-balance">
                  Good Home & Nurturing Space
                </h2>
                
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Join our family and give your child the gift of a magical early learning experience. 
                  We&apos;d love to meet you and show you around our little wonderland.
                </p>
                
                <Link href="/enquire">
                  <Button className="btn-gradient-yellow text-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Schedule a Visit
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}
