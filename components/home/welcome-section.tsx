import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StickerIcon, HandDrawnDivider } from "@/components/floating-doodles"

const stats = [
  { number: "500+", label: "Happy Children" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Expert Teachers" },
  { number: "100%", label: "Parent Satisfaction" },
]

export function WelcomeSection() {
  return (
    <section className="relative py-20 bg-cream overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-12 left-12 w-10 h-10 opacity-40 animate-float">
        <StickerIcon type="heart" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-20 w-8 h-8 opacity-50 animate-sparkle">
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
      <div className="absolute bottom-16 left-20 w-12 h-12 opacity-30 animate-float-slow">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      <div className="absolute bottom-24 right-16 w-6 h-6 opacity-40 animate-float">
        <StickerIcon type="star" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-6 w-8 h-8 opacity-30 animate-sparkle">
        <StickerIcon type="moon" className="w-full h-full" />
      </div>
      <div className="absolute top-1/3 right-8 w-10 h-10 opacity-40 animate-float-slow">
        <StickerIcon type="balloon" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Sticker icons around image */}
            <div className="absolute -top-4 -left-4 w-10 h-10 z-10 animate-float">
              <StickerIcon type="sun" className="w-full h-full drop-shadow-md" />
            </div>
            <div className="absolute -top-2 right-10 w-8 h-8 z-10 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full drop-shadow-md" />
            </div>
            <div className="absolute bottom-10 -left-6 w-8 h-8 z-10 animate-float-slow">
              <StickerIcon type="heart" className="w-full h-full drop-shadow-md" />
            </div>
            <div className="absolute -bottom-4 right-8 w-10 h-10 z-10 animate-sparkle">
              <StickerIcon type="sparkle" className="w-full h-full drop-shadow-md" />
            </div>
            
            <div className="relative rounded-[2rem] overflow-hidden bg-white p-4 shadow-xl">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-mint/40 via-baby-blue/30 to-lavender/40 flex items-center justify-center">
                {/* Classroom illustration */}
                <div className="relative w-full h-full p-8">
                  <div className="flex items-center justify-center gap-6">
                    {/* Teacher */}
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-lavender to-purple-light flex items-center justify-center shadow-xl">
                      <svg viewBox="0 0 60 60" className="w-20 h-20 md:w-24 md:h-24">
                        <circle cx="30" cy="30" r="24" fill="oklch(0.95 0.05 70)" />
                        <circle cx="24" cy="26" r="3" fill="oklch(0.3 0.05 300)" />
                        <circle cx="36" cy="26" r="3" fill="oklch(0.3 0.05 300)" />
                        <path d="M22 36 Q30 44 38 36" stroke="oklch(0.3 0.05 300)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        <circle cx="17" cy="32" r="4" fill="oklch(0.9 0.1 50)" opacity="0.5" />
                        <circle cx="43" cy="32" r="4" fill="oklch(0.9 0.1 50)" opacity="0.5" />
                      </svg>
                    </div>
                    
                    {/* Children */}
                    <div className="grid grid-cols-2 gap-3">
                      {["peach", "mint", "soft-yellow", "baby-blue"].map((color, i) => (
                        <div
                          key={i}
                          className="w-14 h-14 md:w-18 md:h-18 rounded-full shadow-lg flex items-center justify-center animate-float"
                          style={{ 
                            animationDelay: `${i * 0.4}s`,
                            background: `linear-gradient(135deg, oklch(0.9 0.1 ${[50, 160, 95, 230][i]}), oklch(0.85 0.08 ${[50, 160, 95, 230][i]}))`
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
            <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-[2rem] bg-peach/40" style={{ transform: 'rotate(3deg)' }} />
          </div>
          
          {/* Content side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-mint/40 rounded-full px-4 py-2">
              <StickerIcon type="heart" className="w-5 h-5" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-primary text-balance">
              Welcome to Seventh sense school of arts
            </h2>
            
            <p className="text-muted-foreground leading-relaxed text-pretty">
              At Seventh sense school of arts, we create a magical world where children can explore, learn, and grow 
              in a warm, nurturing environment. Our passionate team of educators is dedicated to 
              bringing out the best in every child through innovative, play-based learning approaches.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-pretty">
              We believe that early childhood is a time of wonder and discovery. That&apos;s why we design 
              experiences that spark curiosity, build confidence, and create lasting memories.
            </p>
            
            <HandDrawnDivider className="py-4" />
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center p-4 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.95 0.08 ${[50, 160, 300, 95][index]}), oklch(0.98 0.03 ${[50, 160, 300, 95][index]}))`
                  }}
                >
                  <div className="font-serif text-2xl md:text-3xl text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Link href="/about">
              <Button className="btn-gradient-peach text-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 mt-4">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
