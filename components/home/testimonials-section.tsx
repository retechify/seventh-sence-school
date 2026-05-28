"use client"

import { useState, useEffect, useRef } from "react"
import { StickerIcon, SectionDoodles } from "@/components/floating-doodles"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const APPS_SCRIPT_URL = "/api/reviews";

interface Review {
  name: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
  color: string;
}

const defaultReviews: Review[] = [
  {
    name: "Lakshmi Narayanan",
    role: "Mother of Aditya, 4 years",
    review: "Aditya looks forward to school every single day. <strong>The teachers truly care, and we've seen him blossom into a happy, confident boy.</strong>",
    rating: 5,
    avatar: "L",
    color: "peach",
  },
  {
    name: "Rajesh Kumar",
    role: "Father of Kavya, 3 years",
    review: "Kavya has developed so much confidence and <strong>her communication skills have improved tremendously.</strong>",
    rating: 5,
    avatar: "R",
    color: "mint",
  },
  {
    name: "Divya Murugesan",
    role: "Mother of Arjun, 5 years",
    review: "<strong>We’ve seen such a positive change in our child.</strong> He is more confident, expressive, and excited to learn. We couldn't be happier!",
    rating: 5,
    avatar: "D",
    color: "lavender",
  },
  {
    name: "Priya Senthil",
    role: "Mother of Ananya, 4 years",
    review: "<strong>The playful environment makes learning an absolute joy.</strong> Ananya is becoming so independent and expressive!",
    rating: 5,
    avatar: "P",
    color: "soft-yellow",
  },
]

export function TestimonialsSection() {
  const [reviewsList, setReviewsList] = useState<Review[]>(defaultReviews)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const [activeModalReview, setActiveModalReview] = useState<Review | null>(null)
  
  const isLongReview = (text: string) => {
    return text.replace(/<[^>]*>/g, '').length > 130;
  }

  // Drag Scroll States and Handlers
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setIsInteracting(true);
    if (sliderRef.current) {
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsInteracting(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setTimeout(() => {
      setIsInteracting(false);
    }, 1000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = () => {
    setIsInteracting(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsInteracting(false);
    }, 1000);
  };

  // requestAnimationFrame continuous smooth auto-scroll with seam-wrap
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let scrollPos = slider.scrollLeft; // Float value to prevent browser integer truncation
    const speed = 50; // Smooth visual scroll speed (pixels per second)

    const scroll = (time: number) => {
      if (!isInteracting && !isMouseDown) {
        const delta = (time - lastTime) / 1000;
        scrollPos += speed * delta;

        const halfWidth = slider.scrollWidth / 2;
        if (halfWidth > 0) {
          if (scrollPos >= halfWidth) {
            scrollPos -= halfWidth;
          }
          slider.scrollLeft = Math.floor(scrollPos);
        }
      } else {
        // Sync our float scrollPos with the manual scroll position while dragging
        scrollPos = slider.scrollLeft;
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInteracting, isMouseDown]);

  // Form State
  const [parentName, setParentName] = useState("")
  const [childName, setChildName] = useState("")
  const [childAge, setChildAge] = useState("")
  const [rating, setRating] = useState(5)
  const [message, setMessage] = useState("")
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(APPS_SCRIPT_URL);
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
          const dynamicReviews = data.map((r: any, idx: number) => ({
            name: r.name,
            role: r.childName ? `Parent of ${r.childName}` : "Parent",
            review: r.review,
            rating: Number(r.rating) || 5,
            avatar: r.name.charAt(0).toUpperCase(),
            color: ["peach", "mint", "lavender", "soft-yellow"][idx % 4],
          }));
          // Merge dynamic reviews at the beginning
          setReviewsList([...dynamicReviews, ...defaultReviews]);
        }
      } catch (err) {
        console.error("Error loading approved reviews:", err);
      }
    }
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !childName || !childAge || !message) return;

    setFormStatus("submitting");

    const formattedChildDetails = `${childName}, ${childAge}`;

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentName,
          childName: formattedChildDetails,
          rating,
          message,
        }),
      });
      
      if (!response.ok) throw new Error("Failed to submit review");
      
      setFormStatus("success");
      setParentName("");
      setChildName("");
      setChildAge("");
      setRating(5);
      setMessage("");
    } catch (err) {
      console.error("Form submission error:", err);
      setFormStatus("error");
    }
  };

  // Calculate average rating dynamically
  const totalCount = reviewsList.length
  const avgRating = totalCount > 0 
    ? (reviewsList.reduce((sum, r) => sum + r.rating, 0) / totalCount).toFixed(1) 
    : "5.0"

  // Only display the latest 6 approved reviews on the homepage marquee
  const homepageReviews = reviewsList.slice(0, 6)

  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden" id="testimonials">
      {/* Background gradients for a playful look */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-cream to-lavender/20 -z-10" />
      
      {/* Section-specific doodles */}
      <SectionDoodles className="opacity-30" />
      
      {/* Manual extra doodles for impact */}
      <div className="absolute top-10 right-20 w-12 h-12 opacity-30 animate-float-slow">
        <StickerIcon type="heart" className="w-full h-full text-peach" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-peach/40 rounded-full px-4 py-2 mb-6"
          >
            <StickerIcon type="star" className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-900 uppercase tracking-widest">
              Happy Families • {avgRating}/5 ★ ({totalCount > 100 ? "100+" : totalCount} reviews)
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-3xl md:text-4xl text-primary mb-6 leading-tight text-balance tracking-tight"
          >
            Loved by Parents, Adored by Children
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Don't just take our word for it. Hear from the parents who have seen their children flourish in our care.
          </motion.p>
        </div>
        
        {/* Infinite Testimonial Marquee Slider with mouse-drag and touch scroll */}
        <div className="relative w-full z-10">
          {/* Left and Right Fade Gradients */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full overflow-x-auto scrollbar-none py-10 flex gap-8 cursor-grab active:cursor-grabbing select-none"
          >
            {[...homepageReviews, ...homepageReviews].map((review, index) => {
              // Calculate original index to ensure cloned elements look exactly the same
              const originalIndex = index % homepageReviews.length;
              
              // Subtle polaroid rotation
              const rotation = originalIndex % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]";
              
              return (
                <div 
                  key={`${review.name}-${index}`}
                  className={`relative group w-[300px] md:w-[350px] flex-shrink-0 origin-center transition-all duration-300 hover:scale-105 ${rotation}`}
                >
                  <div 
                    className="bg-white rounded-[2.25rem] p-8 shadow-xl border border-gray-100 relative h-[370px] md:h-[355px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Decorative Pin/Sticker */}
                    <div className="absolute -top-4 left-6 w-10 h-10 opacity-80">
                      <StickerIcon type={["sun", "rainbow", "cloud", "sparkle"][originalIndex % 4] as any} className="w-full h-full drop-shadow-md" />
                    </div>

                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-4 justify-end">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>

                      <div className="relative">
                        <p 
                           className="text-gray-600 leading-relaxed italic text-[1rem] font-medium line-clamp-5 text-pretty"
                           dangerouslySetInnerHTML={{ __html: `&ldquo;${review.review}&rdquo;` }}
                        />
                        {isLongReview(review.review) && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveModalReview(review);
                            }}
                            className="text-primary hover:text-brand-orange text-xs font-bold transition-colors inline-block mt-1 cursor-pointer outline-none focus:underline"
                          >
                            ... Read More
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-medium text-lg text-white shadow-sm shrink-0"
                        style={{
                          background: `linear-gradient(135deg, oklch(0.8 0.15 ${[50, 160, 300, 80][originalIndex % 4]}), oklch(0.7 0.18 ${[50, 160, 300, 80][originalIndex % 4]}))`
                        }}
                      >
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Buttons for Reviews page and Review Modal */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12 relative z-10">
          <Link href="/reviews">
            <button className="btn-gradient-yellow text-foreground rounded-full px-8 py-4 font-bold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer">
              View More Reviews
            </button>
          </Link>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-gradient-purple text-white rounded-full px-8 py-4 font-bold shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Share Your Experience
          </button>
        </div>
      </div>

      {/* Testimonial Form Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-primary/20 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-[2.5rem] p-8 max-w-md w-full border border-lavender/30 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Close Button */}
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setFormStatus("idle");
                }}
                className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors text-2xl font-bold cursor-pointer"
              >
                &times;
              </button>

              {formStatus === "success" ? (
                <div className="text-center py-6 space-y-6">
                  <div className="w-20 h-20 mx-auto text-peach animate-bounce">
                    <StickerIcon type="sparkle" className="w-full h-full text-brand-orange" />
                  </div>
                  <h3 className="font-semibold text-2xl text-primary">Thank You!</h3>
                  <p className="text-muted-foreground text-pretty">
                    Your review has been submitted. It will be displayed on the website once approved by our school team.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="btn-gradient-purple text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-2xl text-primary mb-2">Share Your Experience</h3>
                    <p className="text-sm text-muted-foreground">We value your feedback and love hearing about your child's journey with us!</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1">Parent Name *</label>
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-lavender/30 bg-cream/20 focus:border-primary/50 focus:ring focus:ring-primary/20 outline-none transition-all text-sm font-sans"
                        placeholder="e.g. Lakshmi Narayanan"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1">Child's Name *</label>
                      <input
                        type="text"
                        required
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-lavender/30 bg-cream/20 focus:border-primary/50 focus:ring focus:ring-primary/20 outline-none transition-all text-sm font-sans"
                        placeholder="e.g. Aditya"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1">Child's Age *</label>
                      <select
                        required
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-lavender/30 bg-cream/20 focus:border-primary/50 focus:ring focus:ring-primary/20 outline-none transition-all text-sm font-sans cursor-pointer text-gray-700 bg-white"
                      >
                        <option value="" disabled>Select age...</option>
                        <option value="1.5 years">1.5 years</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                        <option value="6 years">6 years</option>
                        <option value="7 years">7 years</option>
                        <option value="8 years">8 years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1">Rating *</label>
                      <div className="flex gap-2 py-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="transition-transform hover:scale-125 cursor-pointer"
                          >
                            <Star
                              className={`w-8 h-8 ${
                                star <= rating ? "text-amber-400 fill-amber-400" : "text-gray-200"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1">Review Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-lavender/30 bg-cream/20 focus:border-primary/50 focus:ring focus:ring-primary/20 outline-none transition-all text-sm resize-none font-sans"
                        placeholder="Share your experience..."
                      />
                    </div>
                  </div>

                  {formStatus === "error" && (
                    <p className="text-destructive text-xs font-semibold text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full btn-gradient-purple text-white rounded-full py-4 font-bold shadow-lg hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Submit Review"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Testimonial Detail Modal Overlay */}
      <AnimatePresence>
        {activeModalReview && (
          <div className="fixed inset-0 bg-primary/20 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-[2.5rem] p-8 max-w-lg w-full border border-lavender/30 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Close Button */}
              <button 
                onClick={() => setActiveModalReview(null)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors text-2xl font-bold cursor-pointer"
              >
                &times;
              </button>

              <div className="space-y-6 pt-4">
                {/* Decorative Pin/Sticker */}
                <div className="w-12 h-12 mx-auto opacity-95">
                  <StickerIcon 
                    type={["sun", "rainbow", "cloud", "sparkle"][reviewsList.indexOf(activeModalReview) !== -1 ? reviewsList.indexOf(activeModalReview) % 4 : 0] as any} 
                    className="w-full h-full drop-shadow-md" 
                  />
                </div>

                <div className="text-center">
                  {/* Stars */}
                  <div className="flex gap-1.5 justify-center mb-4">
                    {Array.from({ length: activeModalReview.rating }).map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <div 
                    className="text-gray-700 leading-relaxed italic text-[1.12rem] font-medium text-pretty bg-cream/15 p-6 rounded-[1.75rem] border border-gray-100 max-h-[45vh] overflow-y-auto"
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${activeModalReview.review}&rdquo;` }}
                  />
                </div>

                {/* Parent Info Section */}
                <div className="flex items-center gap-4 p-4 rounded-[2rem]" style={{
                  background: `linear-gradient(135deg, oklch(0.97 0.01 90), oklch(0.95 0.015 85))`
                }}>
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-sm shrink-0"
                    style={{
                      background: `linear-gradient(135deg, oklch(0.8 0.15 ${[50, 160, 300, 80][reviewsList.indexOf(activeModalReview) !== -1 ? reviewsList.indexOf(activeModalReview) % 4 : 0]}), oklch(0.7 0.18 ${[50, 160, 300, 80][reviewsList.indexOf(activeModalReview) !== -1 ? reviewsList.indexOf(activeModalReview) % 4 : 0]}))`
                    }}
                  >
                    {activeModalReview.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg text-gray-900 leading-none mb-1">{activeModalReview.name}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-none">{activeModalReview.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
