import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, HandDrawnDivider } from "@/components/floating-doodles"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Puzzle, Palette, MessageCircle, Music, Users, Star } from "lucide-react"

export const metadata = {
  title: "Our Services | Seventh sense school of arts Preschool",
  description: "Explore our comprehensive early learning programs including activity-based learning, creative arts, and communication development.",
}

const services = [
  {
    icon: BookOpen,
    stickerType: "sun" as const,
    title: "Early Learning Programs",
    description: "Our comprehensive curriculum is designed to build strong foundations in literacy, numeracy, and cognitive development. Through age-appropriate activities, children discover the joy of learning while developing essential skills.",
    features: ["Phonics & Reading Readiness", "Numbers & Counting", "Science Exploration", "Environmental Awareness"],
    color: "peach",
    hue: 50,
  },
  {
    icon: Puzzle,
    stickerType: "star" as const,
    title: "Activity-Based Learning",
    description: "Learning through play is at the heart of our approach. Children engage in hands-on activities that spark curiosity, encourage problem-solving, and develop fine motor skills in a fun, supportive environment.",
    features: ["Sensory Play Stations", "Building & Construction", "Problem-Solving Games", "Outdoor Adventures"],
    color: "mint",
    hue: 160,
  },
  {
    icon: Palette,
    stickerType: "rainbow" as const,
    title: "Creative Arts & Play",
    description: "We believe every child is an artist. Our creative arts program encourages self-expression through various mediums including painting, drawing, crafts, and imaginative play.",
    features: ["Painting & Drawing", "Craft Projects", "Dramatic Play", "Storytelling"],
    color: "soft-yellow",
    hue: 95,
  },
  {
    icon: MessageCircle,
    stickerType: "cloud" as const,
    title: "Communication Development",
    description: "Strong communication skills are essential for lifelong success. Our program focuses on developing language abilities, social skills, and emotional intelligence through group activities and one-on-one interactions.",
    features: ["Language Development", "Public Speaking", "Social Skills", "Emotional Literacy"],
    color: "lavender",
    hue: 300,
  },
]

const additionalPrograms = [
  {
    icon: Music,
    stickerType: "sparkle" as const,
    title: "Music & Movement",
    description: "Rhythm, dance, and musical exploration to develop coordination and creative expression.",
    hue: 50,
  },
  {
    icon: Users,
    stickerType: "heart" as const,
    title: "Social Development",
    description: "Group activities that teach cooperation, sharing, and building lasting friendships.",
    hue: 160,
  },
]

export default function ServicesPage() {
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
            <div className="absolute inset-0 bg-gradient-to-br from-mint/30 via-cream to-soft-yellow/20" />
            
            {/* Extra doodles */}
            <div className="absolute top-16 left-10 w-12 h-12 opacity-50 animate-float">
              <StickerIcon type="balloon" className="w-full h-full" />
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
            <div className="absolute bottom-20 left-1/4 w-10 h-10 opacity-40 animate-float-slow">
              <StickerIcon type="rainbow" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-lavender/40 rounded-full px-4 py-2 mb-6">
                  <StickerIcon type="sparkle" className="w-5 h-5" />
                  <span className="text-sm font-medium text-primary">What We Offer</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 text-balance">
                  Our Services
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Learning through play, expression, and discovery. We provide a holistic approach to early 
                  childhood education that nurtures every aspect of your child&apos;s development.
                </p>
              </div>
            </div>
            
            {/* Wavy bottom */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
                <path
                  d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
                  fill="oklch(0.97 0.015 85)"
                />
              </svg>
            </div>
          </section>
          
          {/* Main Services Grid */}
          <section className="py-20 bg-cream relative overflow-hidden">
            {/* Background doodles */}
            <div className="absolute top-20 left-10 w-10 h-10 opacity-30 animate-float-slow">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute top-40 right-16 w-8 h-8 opacity-40 animate-sparkle">
              <StickerIcon type="sparkle" className="w-full h-full" />
            </div>
            <div className="absolute bottom-40 left-20 w-6 h-6 opacity-40 animate-float">
              <StickerIcon type="heart" className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 right-10 w-12 h-12 opacity-30 animate-float-slow">
              <StickerIcon type="moon" className="w-full h-full" />
            </div>
            <div className="absolute top-1/2 left-6 w-8 h-8 opacity-40 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service) => (
                  <div key={service.title} className="relative group">
                    {/* Sticker on top of card */}
                    <div className="absolute -top-5 left-10 w-12 h-12 z-10">
                      <StickerIcon type={service.stickerType} className="w-full h-full drop-shadow-lg" />
                    </div>
                    
                    <div 
                      className="relative rounded-[2rem] p-8 pt-10 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, oklch(0.92 0.1 ${service.hue}), oklch(0.96 0.05 ${service.hue}))`
                      }}
                    >
                      {/* Blob shape background */}
                      <div 
                        className="absolute top-0 right-0 w-32 h-32 opacity-30 blob-shape"
                        style={{ background: `oklch(0.98 0.05 ${service.hue})` }}
                      />
                      
                      {/* Icon */}
                      <div className="relative w-20 h-20 rounded-2xl bg-white/80 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                        <service.icon className="w-10 h-10 text-primary" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="font-serif text-2xl text-primary mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      
                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                            <Star className="w-4 h-4 text-primary fill-current" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Button */}
                      <Link href="/enquire">
                        <Button className="btn-gradient-yellow text-foreground rounded-full px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all">
                          Learn More
                        </Button>
                      </Link>
                      
                      {/* Corner decorations */}
                      <div className="absolute bottom-8 right-8 w-8 h-8 opacity-40">
                        <StickerIcon type="sparkle" className="w-full h-full" />
                      </div>
                      <div className="absolute top-8 right-8 w-6 h-6 opacity-30 animate-float">
                        <StickerIcon type="heart" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Additional Programs */}
          <section className="py-20 bg-background relative overflow-hidden">
            {/* Background doodles */}
            <div className="absolute top-10 left-16 w-10 h-10 opacity-40 animate-float">
              <StickerIcon type="rainbow" className="w-full h-full" />
            </div>
            <div className="absolute bottom-16 right-12 w-8 h-8 opacity-50 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 text-balance">
                  More Ways to Learn & Grow
                </h2>
                <HandDrawnDivider className="py-4" />
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Beyond our core programs, we offer enriching activities that complement your child&apos;s development.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {additionalPrograms.map((program) => (
                  <div key={program.title} className="relative">
                    {/* Sticker */}
                    <div className="absolute -top-4 left-8 w-10 h-10 z-10">
                      <StickerIcon type={program.stickerType} className="w-full h-full drop-shadow-md" />
                    </div>
                    
                    <div 
                      className="bg-white rounded-[2rem] p-8 pt-10 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `linear-gradient(135deg, oklch(0.92 0.08 ${program.hue}), oklch(0.96 0.05 ${program.hue}))` }}
                      >
                        <program.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl text-primary mb-2">{program.title}</h3>
                      <p className="text-muted-foreground">{program.description}</p>
                      
                      {/* Small decoration */}
                      <div className="absolute bottom-4 right-4 w-5 h-5 opacity-30 animate-sparkle">
                        <StickerIcon type="sparkle" className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-peach/30 via-cream to-lavender/20 relative overflow-hidden">
            {/* Doodles */}
            <div className="absolute top-10 left-16 w-14 h-14 opacity-40 animate-float">
              <StickerIcon type="sun" className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 right-16 w-10 h-10 opacity-50 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full" />
            </div>
            <div className="absolute top-1/2 right-8 w-8 h-8 opacity-40 animate-float-slow">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 left-10 w-10 h-10 opacity-40 animate-float">
              <StickerIcon type="balloon" className="w-full h-full" />
            </div>
            
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl text-primary text-balance">
                  Ready to Begin the Journey?
                </h2>
                
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Give your child the gift of a magical learning experience. 
                  Schedule a visit to see our programs in action.
                </p>
                
                <Link href="/enquire">
                  <Button className="btn-gradient-purple text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Enquire Now
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
