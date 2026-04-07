import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles, StickerIcon, HandDrawnDivider, SectionDoodles } from "@/components/floating-doodles"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Puzzle, Palette, MessageCircle, Music, Users, Star } from "lucide-react"

export const metadata = {
  title: "Empowering Programs",
  description: "Discover our warm, activity-based preschool programs designed to nurture your child's confidence, creativity, and love for learning.",
}

const programs = [
  {
    icon: BookOpen,
    stickerType: "rainbow" as const,
    title: "Phonics-Based Language Learning",
    description: "Watch your child's confidence grow as they discover the magic of sounds. From their first 'Aa' to reading their favorite stories with pride, we make language an adventure.",
    features: ["Joyful Phonics & Reading", "Confident Communication", "Magical Storytelling", "Early Literacy Journey"],
    color: "lavender",
    hue: 300,
  },
  {
    icon: Puzzle,
    stickerType: "sun" as const,
    title: "Montessori Sensory Development",
    description: "Inspired by the belief that children learn best with their hands and hearts. Our sensory-rich environment nurtures independent thinkers who are curious about the world around them.",
    features: ["Practical Life Skills", "Hands-on Exploration", "Independent Thinking", "Everyday Resilience"],
    color: "peach",
    hue: 50,
  },
  {
    icon: MessageCircle,
    stickerType: "cloud" as const,
    title: "Activity-Based Exploration",
    description: "Learning isn't sitting still—it's moving, building, and exploring! We transform every lesson into a joyful activity that sparks creativity and builds strong motor skills.",
    features: ["Learning Through Movement", "Collaborative Play", "Creative Motor Skills", "Active Social Growth"],
    color: "mint",
    hue: 160,
  },
  {
    icon: Star,
    stickerType: "star" as const,
    title: "Life Skills & Confidence Training",
    description: "Preparing little hearts for big futures. Beyond academics, we nurture emotional intelligence, kindness, and the 'I can do it' spirit that stays with them for life.",
    features: ["Emotional Intelligence", "Kindness & Character", "Self-Expression", "Unstoppable Confidence"],
    color: "baby-blue",
    hue: 200,
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

export default function ProgramsPage() {
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
          {/* Split Pane Sticky Scroll Layout */}
          <section className="relative pt-16 pb-32 md:pt-24 lg:pt-32 overflow-visible bg-transparent">
            {/* Background specific to programs */}
            <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-cream/80 to-soft-yellow/10 -z-10" />
            
            <SectionDoodles className="opacity-40" />
            
            {/* Soft blob */}
            <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-soft-yellow/20 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
                
                {/* Left Side: Sticky Information */}
                <div className="w-full lg:w-1/3 lg:sticky lg:top-32 space-y-8 z-20">
                  <div className="inline-flex items-center gap-2 bg-lavender/40 rounded-full px-4 py-2">
                    <StickerIcon type="sparkle" className="w-5 h-5" />
                    <span className="text-sm font-medium text-primary">What We Offer</span>
                  </div>
                  
                  <h1 className="font-semibold text-4xl md:text-5xl lg:text-7xl text-primary text-balance leading-tight">
                    Our <br className="hidden lg:block"/>Programs
                  </h1>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                    Our programs are designed to support every stage of your child’s growth — emotionally, socially, and academically.
                  </p>

                  {/* Decorative Elements */}
                  <div className="relative pt-8 pl-8 hidden lg:block">
                     <div className="absolute top-0 left-0 w-24 h-24 opacity-60 animate-float-slow">
                        <StickerIcon type="balloon" className="w-full h-full" />
                     </div>
                     <div className="w-16 h-16 ml-12 opacity-80 animate-sparkle">
                        <StickerIcon type="rainbow" className="w-full h-full" />
                     </div>
                  </div>
                </div>

                {/* Right Side: Scrollable Cards */}
                <div className="w-full lg:w-2/3 space-y-12">
                  {programs.map((program, idx) => (
                    <div 
                      key={program.title} 
                      className={`relative group transform transition-all duration-700`}
                      style={{ zIndex: 10 + idx }}
                    >
                      {/* Subdued connector line */}
                      {idx !== programs.length - 1 && (
                        <div className="hidden lg:block absolute top-[100%] left-16 w-1 h-32 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
                      )}

                      {/* Sticker on top of card */}
                      <div className="absolute -top-6 -left-6 lg:-left-12 w-14 h-14 z-20">
                        <StickerIcon type={program.stickerType} className="w-full h-full drop-shadow-xl" />
                      </div>
                      
                      <div 
                        className="relative rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-xl flex flex-col md:flex-row gap-8 items-start bg-white/70 backdrop-blur-sm border border-white/50"
                      >
                        {/* Blob shape background layer inside card */}
                        <div 
                          className="absolute inset-0 rounded-[2.5rem] opacity-30 blob-shape"
                          style={{ background: `linear-gradient(135deg, oklch(0.92 0.1 ${program.hue}), oklch(0.96 0.05 ${program.hue}))` }}
                        />
                        
                        {/* Icon Block */}
                        <div className="relative flex-shrink-0 w-24 h-24 rounded-[1.5rem] bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 z-10" style={{ rotate: `${idx % 2 === 0 ? '-5deg' : '5deg'}`}}>
                          <program.icon className="w-12 h-12 text-primary" />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex-1">
                          <h3 className="font-semibold text-3xl text-primary mb-4">{program.title}</h3>
                          <p className="text-foreground/80 leading-relaxed mb-8 text-lg">{program.description}</p>
                          
                          {/* Features */}
                          <div className="grid sm:grid-cols-2 gap-3 mb-8">
                            {program.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-3 text-sm text-foreground/90 bg-white/40 p-3 rounded-xl shadow-sm border border-white/60">
                                <Star className="w-4 h-4 text-primary fill-primary/20" />
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Link href="/enquire">
                            <Button className="btn-gradient-yellow text-foreground rounded-full px-8 py-6 font-bold shadow-md hover:shadow-xl transition-all">
                              Discover More
                            </Button>
                          </Link>
                        </div>
                        
                        {/* Corner decorations */}
                        <div className="absolute bottom-8 right-8 w-8 h-8 opacity-40">
                          <StickerIcon type="sparkle" className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wavy bottom linking to next section */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
              <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
                <path
                  d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z"
                  fill="oklch(1 0 0)"
                />
              </svg>
            </div>
          </section>
          
          {/* Additional Programs (Now resting on white background from the wave) */}
          <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-peach/5 to-white -z-10" />
            <SectionDoodles className="opacity-20" />
            <div className="absolute top-20 right-16 w-12 h-12 opacity-30 animate-float">
              <StickerIcon type="cloud" className="w-full h-full" />
            </div>
            <div className="absolute bottom-20 left-16 w-10 h-10 opacity-50 animate-sparkle">
              <StickerIcon type="star" className="w-full h-full" />
            </div>

            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-semibold text-4xl md:text-5xl text-primary mb-6 text-balance">
                  More Ways to Learn & Grow
                </h2>
                <HandDrawnDivider className="py-4 max-w-md mx-auto" />
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Beyond our core programs, we offer enriching activities that complement your child&apos;s holistic development.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                {additionalPrograms.map((program) => (
                  <div key={program.title} className="relative group">
                    <div className="absolute -top-6 -right-6 w-12 h-12 z-20">
                      <StickerIcon type={program.stickerType} className="w-full h-full drop-shadow-md" />
                    </div>
                    
                    <div 
                      className="bg-cream rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-lavender/20 h-full flex flex-col items-center text-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div 
                        className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 shadow-md relative z-10"
                        style={{ background: `linear-gradient(135deg, oklch(0.92 0.08 ${program.hue}), oklch(0.96 0.05 ${program.hue}))` }}
                      >
                        <program.icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-semibold text-2xl text-primary mb-4 relative z-10">{program.title}</h3>
                      <p className="text-muted-foreground relative z-10 leading-relaxed">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Connected CTA section */}
          <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-mint/20 via-cream/80 to-peach/20 -z-10" />
            <SectionDoodles className="opacity-30" />
            <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
              <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
                <path
                  d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,30 1440,40 L1440,0 L0,0 Z"
                  fill="oklch(1 0 0)"
                />
              </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 mt-12">
              <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl max-w-5xl mx-auto text-center relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-soft-yellow/30 rounded-full blur-3xl mix-blend-multiply" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-lavender/30 rounded-full blur-3xl mix-blend-multiply" />

                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                  <h2 className="font-semibold text-4xl md:text-5xl text-primary text-balance">
                    Ready to Begin the Journey?
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                    Give your child the gift of a magical learning experience. 
                    Book a visit to see our programs in action.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/enquire">
                      <Button className="btn-gradient-yellow text-foreground rounded-full px-10 py-8 text-xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                        Book a Free School Visit
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="rounded-full px-10 py-8 text-xl font-bold shadow-sm hover:bg-lavender/10 border-2 border-lavender transition-all">
                        Talk to Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </div>
  )
}
