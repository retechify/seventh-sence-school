import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingDoodles } from "@/components/floating-doodles"
import { HeroSection } from "@/components/home/hero-section"
import { WelcomeSection } from "@/components/home/welcome-section"
import { ServicesSection } from "@/components/home/services-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { EnquirySection } from "@/components/home/enquiry-section"
import { GallerySection } from "@/components/home/gallery-section"

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
          <WelcomeSection />
          <ServicesSection />
          <GallerySection />
          <ReviewsSection />
          <EnquirySection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
