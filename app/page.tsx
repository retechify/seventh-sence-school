import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles } from "@/components/floating-doodles"
import { HeroSection } from "@/components/home/hero-section"
import { TrustSection } from "@/components/home/trust-section"
import { ProblemSolutionSection } from "@/components/home/problem-solution-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { FounderSection } from "@/components/home/founder-section"
import { GallerySection } from "@/components/home/gallery-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"
import { AnnouncementBar } from "@/components/home/announcement-bar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background grain texture */}
      <div className="fixed inset-0 grain-texture z-0" />
      
      {/* Floating doodles - increased count for more visual richness */}
      <FloatingDoodles count={30} />
      
      {/* Main content */}
      <div className="relative z-10 text-primary">
        <Header />
        <main>
          <HeroSection />
          
          <AnnouncementBar 
            text="🎉 Admissions Open for 2026–27 – Limited Seats Available!"
            ctaText="Enquire Now"
            ctaLink="/enquire"
            isVisible={true}
            iconType="sparkle"
          />

          <ProblemSolutionSection />
          <TrustSection />
          <ProgramsSection />
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
