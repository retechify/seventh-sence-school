import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles } from "@/components/floating-doodles"
import { HeroSection } from "@/components/home/hero-section"
import { TrustSection } from "@/components/home/trust-section"
import { ProblemSolutionSection } from "@/components/home/problem-solution-section"
import { AboutSection } from "@/components/home/about-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { PhilosophySection } from "@/components/home/philosophy-section"
import { FounderSection } from "@/components/home/founder-section"
import { GallerySection } from "@/components/home/gallery-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background grain texture */}
      <div className="fixed inset-0 grain-texture z-0" />
      
      {/* Floating doodles - increased count for more visual richness */}
      <FloatingDoodles count={30} />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ProblemSolutionSection />
          <TrustSection />
          <AboutSection />
          <ProgramsSection />
          <PhilosophySection />
          <FounderSection />
          <GallerySection />
          <TestimonialsSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
