import { StickerIcon } from "@/components/floating-doodles"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Lakshmi Narayanan",
    role: "Mother of Aditya, 4 years",
    review: "Seventh sense school of arts has been a blessing for our family in Coimbatore. Aditya looks forward to school every single day. The teachers truly care about each child's individual growth.",
    rating: 5,
    avatar: "L",
    color: "peach",
  },
  {
    name: "Rajesh Kumar",
    role: "Father of Kavya, 3 years",
    review: "The creative approach to learning here is remarkable. Kavya has developed so much confidence and her communication skills have improved tremendously. Highly recommended for Coimbatore parents!",
    rating: 5,
    avatar: "R",
    color: "mint",
  },
  {
    name: "Divya Murugesan",
    role: "Mother of Arjun, 5 years",
    review: "The warmth and love at Seventh sense school of arts is palpable. Arjun has blossomed into a curious, creative, and kind little person. We couldn't be happier! Best school in Coimbatore!",
    rating: 5,
    avatar: "D",
    color: "lavender",
  },
]

export function ReviewsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-soft-yellow/20 via-cream to-lavender/20 overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-8 left-8 w-10 h-10 opacity-50 animate-float">
        <StickerIcon type="heart" className="w-full h-full" />
      </div>
      <div className="absolute top-16 right-16 w-8 h-8 opacity-40 animate-sparkle">
        <StickerIcon type="star" className="w-full h-full" />
      </div>
      <div className="absolute bottom-12 left-20 w-12 h-12 opacity-30 animate-float-slow">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-12 w-6 h-6 opacity-40 animate-sparkle">
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-peach/40 rounded-full px-4 py-2 mb-6">
            <StickerIcon type="heart" className="w-4 h-4" />
            <span className="text-sm font-medium text-primary">Happy Families</span>
          </div>
          
          <h2 className="font-semibold text-3xl md:text-4xl text-primary mb-4 text-balance text-center mx-auto">
            What Parents Say
          </h2>
          
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Hear from the families who have experienced the magic of Seventh sense school of arts firsthand.
          </p>
        </div>
        
        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={review.name} className="relative group">
              {/* Card sticker icon on top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 z-10">
                <StickerIcon 
                  type={["star", "heart", "sparkle"][index] as "star" | "heart" | "sparkle"} 
                  className="w-full h-full drop-shadow-md" 
                />
              </div>
              
              <div 
                className="relative bg-white rounded-[2rem] p-8 pt-10 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-medium text-white shadow-md`}
                    style={{
                      background: `linear-gradient(135deg, oklch(0.8 0.15 ${[50, 160, 300][index]}), oklch(0.7 0.18 ${[50, 160, 300][index]}))`
                    }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-soft-yellow fill-current" />
                  ))}
                </div>
                
                {/* Review text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  &ldquo;{review.review}&rdquo;
                </p>
                
                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 w-6 h-6 opacity-30">
                  <StickerIcon type="sparkle" className="w-full h-full" />
                </div>
              </div>
              
              {/* Shadow card */}
              <div 
                className="absolute -z-10 -bottom-2 -right-2 w-full h-full rounded-[2rem]"
                style={{ 
                  background: `oklch(0.92 0.08 ${[50, 160, 300][index]})`,
                  transform: 'rotate(2deg)' 
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Wavy bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1380,30 1440,30 L1440,60 L0,60 Z"
            fill="oklch(0.97 0.015 85)"
          />
        </svg>
      </div>
    </section>
  )
}
