import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Puzzle, MessageCircle } from "lucide-react"
import { StickerIcon, ServiceIllustration } from "@/components/floating-doodles"

const services = [
  {
    icon: BookOpen,
    illustration: "book" as const,
    stickerType: "sun" as const,
    title: "Early Learning Programs",
    description: "Age-appropriate curriculum designed to spark curiosity and build foundational skills through engaging activities.",
    color: "peach",
    gradient: "from-peach to-soft-yellow/50",
    hue: 50,
  },
  {
    icon: Puzzle,
    illustration: "puzzle" as const,
    stickerType: "star" as const,
    title: "Activity-Based Learning",
    description: "Hands-on experiences that encourage exploration, problem-solving, and creative thinking in a fun environment.",
    color: "mint",
    gradient: "from-mint to-baby-blue/50",
    hue: 160,
  },
  {
    icon: MessageCircle,
    illustration: "chat" as const,
    stickerType: "rainbow" as const,
    title: "Communication Development",
    description: "Building strong language and social skills through storytelling, group activities, and expressive arts.",
    color: "lavender",
    gradient: "from-lavender to-purple-light/50",
    hue: 300,
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Wavy top */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="oklch(0.97 0.015 85)"
          />
        </svg>
      </div>
      
      {/* Background doodles */}
      <div className="absolute top-32 left-8 w-10 h-10 opacity-30 animate-float-slow">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-16 w-8 h-8 opacity-40 animate-sparkle">
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
      <div className="absolute bottom-40 left-20 w-6 h-6 opacity-40 animate-float">
        <StickerIcon type="heart" className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 right-12 w-8 h-8 opacity-40 animate-sparkle">
        <StickerIcon type="star" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 right-8 w-10 h-10 opacity-30 animate-float-slow">
        <StickerIcon type="moon" className="w-full h-full" />
      </div>
      <div className="absolute top-60 left-1/4 w-6 h-6 opacity-35 animate-float">
        <StickerIcon type="balloon" className="w-full h-full" />
      </div>
      <div className="absolute bottom-48 right-1/3 w-5 h-5 opacity-40 animate-sparkle">
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4 pt-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-soft-yellow/50 rounded-full px-4 py-2 mb-6">
            <StickerIcon type="sparkle" className="w-5 h-5" />
            <span className="text-sm font-medium text-primary">What We Offer</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 text-balance">
            Our Services
          </h2>
          
          <p className="text-muted-foreground leading-relaxed text-pretty">
            We provide a holistic approach to early childhood education, focusing on each child&apos;s 
            unique needs and helping them grow in every dimension.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group"
            >
              {/* Large floating illustration above card */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-24 h-24 z-20 animate-bounce-gentle drop-shadow-xl">
                <ServiceIllustration type={service.illustration} className="w-full h-full" />
                {/* Sparkles around illustration */}
                <div className="absolute -top-2 -right-2 w-5 h-5 animate-sparkle">
                  <StickerIcon type="sparkle" className="w-full h-full" />
                </div>
                <div className="absolute -bottom-1 -left-3 w-4 h-4 animate-sparkle" style={{ animationDelay: "0.3s" }}>
                  <StickerIcon type="sparkle" className="w-full h-full" />
                </div>
              </div>
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${service.gradient} rounded-[2rem] p-8 pt-14 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-white/50`}>
                {/* Top decorative sticker */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-70">
                  <StickerIcon type={service.stickerType} className="w-full h-full drop-shadow-md" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl text-primary mb-3 text-center">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">{service.description}</p>
                
                {/* Button */}
                <div className="text-center">
                  <Link href="/services">
                    <Button variant="outline" className="rounded-full border-2 border-primary/30 bg-white/50 hover:bg-white transition-all">
                      Learn More
                    </Button>
                  </Link>
                </div>
                
                {/* Bottom corner decorations */}
                <div className="absolute bottom-4 left-4 w-5 h-5 opacity-50 animate-float">
                  <StickerIcon type="heart" className="w-full h-full" />
                </div>
                <div className="absolute bottom-6 right-6 w-4 h-4 opacity-40 animate-sparkle">
                  <StickerIcon type="star" className="w-full h-full" />
                </div>
              </div>
              
              {/* Paper cut shadow effect */}
              <div 
                className="absolute -z-10 -bottom-2 -right-2 w-full h-full rounded-[2rem] bg-white/50 border border-white/30"
                style={{ transform: 'rotate(2deg)' }}
              />
            </div>
          ))}
        </div>
        
        {/* Doodles between cards */}
        <div className="hidden md:block absolute left-1/3 top-1/2 w-6 h-6 opacity-40 animate-float">
          <StickerIcon type="heart" className="w-full h-full" />
        </div>
        <div className="hidden md:block absolute right-1/3 top-1/2 w-5 h-5 opacity-50 animate-sparkle">
          <StickerIcon type="star" className="w-full h-full" />
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/services">
            <Button className="btn-gradient-purple text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Explore All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
