"use client"

import { useEffect, useState } from "react"

const doodleShapes = [
  // Star
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  // Heart
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  // Cloud
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  ),
  // Sparkle
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
    </svg>
  ),
  // Sun
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="21" x2="12" y2="23" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="1" y1="12" x2="3" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="12" x2="23" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  // Moon
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  // Balloon
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <ellipse cx="12" cy="9" rx="6" ry="8" />
      <path d="M12 17v4" stroke={color} strokeWidth="1" fill="none" />
      <path d="M10 21c1 0 2 1 4 0" stroke={color} strokeWidth="1" fill="none" />
    </svg>
  ),
  // Smiley
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="10" r="1.5" fill="white" />
      <circle cx="16" cy="10" r="1.5" fill="white" />
      <path d="M8 14c1.5 2 6.5 2 8 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  // Rainbow
  (color: string) => (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M2 18 A10 10 0 0 1 22 18" fill="none" stroke="oklch(0.7 0.2 25)" strokeWidth="2" />
      <path d="M4 18 A8 8 0 0 1 20 18" fill="none" stroke="oklch(0.8 0.2 80)" strokeWidth="2" />
      <path d="M6 18 A6 6 0 0 1 18 18" fill="none" stroke="oklch(0.85 0.15 95)" strokeWidth="2" />
      <path d="M8 18 A4 4 0 0 1 16 18" fill="none" stroke="oklch(0.8 0.15 160)" strokeWidth="2" />
      <path d="M10 18 A2 2 0 0 1 14 18" fill="none" stroke="oklch(0.8 0.15 230)" strokeWidth="2" />
    </svg>
  ),
  // Swirl
  (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" className="w-full h-full">
      <path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12s-2.5 5.5-5.5 5.5c-2 0-3.5-1-4.5-2.5" strokeLinecap="round" />
    </svg>
  ),
  // Circle
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
  // Small dots
  (color: string) => (
    <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
]

const pastelColors = [
  "oklch(0.85 0.12 50)",   // Peach
  "oklch(0.85 0.1 300)",   // Lavender
  "oklch(0.85 0.12 160)",  // Mint
  "oklch(0.85 0.1 230)",   // Baby blue
  "oklch(0.9 0.15 95)",    // Soft yellow
  "oklch(0.75 0.15 300)",  // Purple
  "oklch(0.8 0.15 25)",    // Coral
]

interface Doodle {
  id: number
  shape: number
  color: string
  x: number
  y: number
  size: number
  delay: number
  duration: number
  rotation: number
}

export function FloatingDoodles({ count = 25 }: { count?: number }) {
  const [doodles, setDoodles] = useState<Doodle[]>([])

  useEffect(() => {
    const generated: Doodle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      shape: Math.floor(Math.random() * doodleShapes.length),
      color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 32,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      rotation: Math.random() * 360,
    }))
    setDoodles(generated)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {doodles.map((doodle) => (
        <div
          key={doodle.id}
          className="absolute opacity-50"
          style={{
            left: `${doodle.x}%`,
            top: `${doodle.y}%`,
            width: doodle.size,
            height: doodle.size,
            transform: `rotate(${doodle.rotation}deg)`,
            animation: `float ${doodle.duration}s ease-in-out infinite`,
            animationDelay: `${doodle.delay}s`,
          }}
        >
          {doodleShapes[doodle.shape](doodle.color)}
        </div>
      ))}
    </div>
  )
}

// Sticker icons for cards and sections
export function StickerIcon({ type, className = "" }: { type: "sun" | "star" | "heart" | "cloud" | "rainbow" | "moon" | "sparkle" | "balloon"; className?: string }) {
  const icons = {
    sun: (
      <svg viewBox="0 0 24 24" className={`${className}`}>
        <circle cx="12" cy="12" r="5" fill="oklch(0.9 0.18 85)" />
        <g stroke="oklch(0.9 0.18 85)" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="oklch(0.9 0.15 95)" className={className}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="oklch(0.85 0.15 25)" className={className}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 24 24" fill="oklch(0.9 0.08 230)" className={className}>
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
    rainbow: (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M2 18 A10 10 0 0 1 22 18" fill="none" stroke="oklch(0.7 0.2 25)" strokeWidth="2" />
        <path d="M4 18 A8 8 0 0 1 20 18" fill="none" stroke="oklch(0.8 0.2 80)" strokeWidth="2" />
        <path d="M6 18 A6 6 0 0 1 18 18" fill="none" stroke="oklch(0.85 0.15 95)" strokeWidth="2" />
        <path d="M8 18 A4 4 0 0 1 16 18" fill="none" stroke="oklch(0.8 0.15 160)" strokeWidth="2" />
        <path d="M10 18 A2 2 0 0 1 14 18" fill="none" stroke="oklch(0.75 0.15 280)" strokeWidth="2" />
      </svg>
    ),
    moon: (
      <svg viewBox="0 0 24 24" fill="oklch(0.85 0.1 300)" className={className}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    sparkle: (
      <svg viewBox="0 0 24 24" fill="oklch(0.9 0.15 95)" className={className}>
        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
      </svg>
    ),
    balloon: (
      <svg viewBox="0 0 24 24" fill="oklch(0.85 0.15 25)" className={className}>
        <ellipse cx="12" cy="9" rx="6" ry="8" />
        <path d="M12 17v4" stroke="oklch(0.5 0.05 300)" strokeWidth="1.5" fill="none" />
        <path d="M10 21c1 0 2 1 4 0" stroke="oklch(0.5 0.05 300)" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  }

  return icons[type] || null
}

export function SectionDoodles({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Top left sun */}
      <div className="absolute top-4 left-8 w-8 h-8 opacity-60 animate-float">
        <StickerIcon type="sun" className="w-full h-full" />
      </div>
      {/* Top right stars cluster */}
      <div className="absolute top-6 right-12 w-6 h-6 opacity-50 animate-sparkle">
        <StickerIcon type="star" className="w-full h-full" />
      </div>
      <div className="absolute top-12 right-6 w-4 h-4 opacity-40 animate-sparkle" style={{ animationDelay: '0.5s' }}>
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
      {/* Top center cloud */}
      <div className="absolute top-8 left-1/3 w-10 h-10 opacity-40 animate-float-slow">
        <StickerIcon type="cloud" className="w-full h-full" />
      </div>
      {/* Left side heart */}
      <div className="absolute top-1/3 left-4 w-5 h-5 opacity-50 animate-float" style={{ animationDelay: '1s' }}>
        <StickerIcon type="heart" className="w-full h-full" />
      </div>
      {/* Right side moon */}
      <div className="absolute top-1/2 right-8 w-7 h-7 opacity-40 animate-float-slow" style={{ animationDelay: '2s' }}>
        <StickerIcon type="moon" className="w-full h-full" />
      </div>
      {/* Bottom left rainbow */}
      <div className="absolute bottom-16 left-12 w-12 h-12 opacity-50 animate-float">
        <StickerIcon type="rainbow" className="w-full h-full" />
      </div>
      {/* Bottom right balloon */}
      <div className="absolute bottom-8 right-16 w-6 h-6 opacity-50 animate-float-slow">
        <StickerIcon type="balloon" className="w-full h-full" />
      </div>
      {/* Bottom center sparkles */}
      <div className="absolute bottom-12 left-1/2 w-5 h-5 opacity-40 animate-sparkle">
        <StickerIcon type="sparkle" className="w-full h-full" />
      </div>
    </div>
  )
}

// Large playful illustration icons for service cards
export function ServiceIllustration({ 
  type, 
  className = "" 
}: { 
  type: "book" | "puzzle" | "chat" | "palette" | "music" | "blocks" | "abc"; 
  className?: string 
}) {
  const illustrations = {
    // Open book with sparkles - Early Learning
    book: (
      <svg viewBox="0 0 80 80" className={className}>
        {/* Book base */}
        <path d="M10 55 L40 48 L70 55 L70 20 L40 13 L10 20 Z" fill="oklch(0.95 0.08 50)" stroke="oklch(0.7 0.12 50)" strokeWidth="2"/>
        <path d="M40 13 L40 48" stroke="oklch(0.7 0.12 50)" strokeWidth="2"/>
        {/* Left page lines */}
        <line x1="18" y1="26" x2="35" y2="22" stroke="oklch(0.6 0.1 50)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="32" x2="35" y2="28" stroke="oklch(0.6 0.1 50)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="38" x2="35" y2="34" stroke="oklch(0.6 0.1 50)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Right page lines */}
        <line x1="45" y1="22" x2="62" y2="26" stroke="oklch(0.6 0.1 50)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="45" y1="28" x2="62" y2="32" stroke="oklch(0.6 0.1 50)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Sparkles */}
        <path d="M22 8 L23.5 12 L28 13 L23.5 14 L22 18 L20.5 14 L16 13 L20.5 12 Z" fill="oklch(0.9 0.18 95)"/>
        <path d="M60 5 L61 8 L64 9 L61 10 L60 13 L59 10 L56 9 L59 8 Z" fill="oklch(0.9 0.15 95)"/>
        <path d="M48 3 L48.5 5 L50.5 5.5 L48.5 6 L48 8 L47.5 6 L45.5 5.5 L47.5 5 Z" fill="oklch(0.85 0.15 300)"/>
        {/* Sun peeking */}
        <circle cx="65" cy="12" r="6" fill="oklch(0.92 0.18 85)"/>
        <g stroke="oklch(0.92 0.18 85)" strokeWidth="1.5" strokeLinecap="round">
          <line x1="65" y1="3" x2="65" y2="5"/>
          <line x1="73" y1="12" x2="71" y2="12"/>
          <line x1="70" y1="7" x2="69" y2="8"/>
        </g>
      </svg>
    ),
    // Puzzle pieces - Activity Based Learning
    puzzle: (
      <svg viewBox="0 0 80 80" className={className}>
        {/* Main puzzle piece */}
        <path d="M15 25 L30 25 L30 20 C30 15, 38 15, 38 20 L38 25 L50 25 L50 35 L55 35 C60 35, 60 43, 55 43 L50 43 L50 55 L15 55 L15 45 L10 45 C5 45, 5 37, 10 37 L15 37 Z" 
              fill="oklch(0.88 0.15 160)" stroke="oklch(0.7 0.12 160)" strokeWidth="2"/>
        {/* Second puzzle piece */}
        <path d="M55 25 L65 25 L65 55 L55 55 L55 48 L52 48 C48 48, 48 40, 52 40 L55 40 Z" 
              fill="oklch(0.85 0.12 230)" stroke="oklch(0.65 0.12 230)" strokeWidth="2"/>
        {/* Small decorative piece */}
        <path d="M25 60 L45 60 L45 70 L25 70 Z" 
              fill="oklch(0.9 0.15 95)" stroke="oklch(0.7 0.15 95)" strokeWidth="2"/>
        {/* Sparkles */}
        <path d="M68 15 L69 18 L72 19 L69 20 L68 23 L67 20 L64 19 L67 18 Z" fill="oklch(0.9 0.18 95)"/>
        <path d="M8 20 L9 22 L11 22.5 L9 23 L8 25 L7 23 L5 22.5 L7 22 Z" fill="oklch(0.85 0.15 300)"/>
        {/* Rainbow arc */}
        <path d="M55 8 A8 8 0 0 1 71 8" fill="none" stroke="oklch(0.7 0.2 25)" strokeWidth="1.5"/>
        <path d="M57 8 A6 6 0 0 1 69 8" fill="none" stroke="oklch(0.8 0.2 95)" strokeWidth="1.5"/>
        <path d="M59 8 A4 4 0 0 1 67 8" fill="none" stroke="oklch(0.8 0.15 160)" strokeWidth="1.5"/>
      </svg>
    ),
    // Chat bubbles - Communication Development
    chat: (
      <svg viewBox="0 0 80 80" className={className}>
        {/* Large bubble */}
        <path d="M15 20 L55 20 C60 20, 65 25, 65 30 L65 42 C65 47, 60 52, 55 52 L35 52 L25 62 L25 52 L15 52 C10 52, 5 47, 5 42 L5 30 C5 25, 10 20, 15 20 Z" 
              fill="oklch(0.88 0.1 300)" stroke="oklch(0.7 0.12 300)" strokeWidth="2"/>
        {/* Small bubble */}
        <path d="M50 8 L70 8 C73 8, 75 10, 75 13 L75 22 C75 25, 73 27, 70 27 L62 27 L58 32 L58 27 L50 27 C47 27, 45 25, 45 22 L45 13 C45 10, 47 8, 50 8 Z" 
              fill="oklch(0.85 0.12 230)" stroke="oklch(0.65 0.12 230)" strokeWidth="2"/>
        {/* Dots in large bubble */}
        <circle cx="22" cy="36" r="3" fill="oklch(0.98 0.02 300)"/>
        <circle cx="35" cy="36" r="3" fill="oklch(0.98 0.02 300)"/>
        <circle cx="48" cy="36" r="3" fill="oklch(0.98 0.02 300)"/>
        {/* Stars around */}
        <path d="M72 35 L73 38 L76 39 L73 40 L72 43 L71 40 L68 39 L71 38 Z" fill="oklch(0.9 0.18 95)"/>
        <path d="M10 12 L11 14 L13 14.5 L11 15 L10 17 L9 15 L7 14.5 L9 14 Z" fill="oklch(0.9 0.15 95)"/>
        {/* Hearts */}
        <path d="M40 5 C40 3, 42 2, 43 3.5 C44 2, 46 3, 46 5 C46 7, 43 9, 43 9 C43 9, 40 7, 40 5 Z" fill="oklch(0.85 0.15 25)"/>
      </svg>
    ),
    // Paint palette - Creative Arts
    palette: (
      <svg viewBox="0 0 80 80" className={className}>
        {/* Palette base */}
        <ellipse cx="40" cy="42" rx="32" ry="26" fill="oklch(0.92 0.08 50)" stroke="oklch(0.7 0.12 50)" strokeWidth="2"/>
        {/* Thumb hole */}
        <ellipse cx="25" cy="50" rx="8" ry="6" fill="oklch(0.97 0.015 85)"/>
        {/* Paint blobs */}
        <circle cx="50" cy="32" r="7" fill="oklch(0.7 0.2 25)"/>
        <circle cx="35" cy="28" r="6" fill="oklch(0.85 0.18 95)"/>
        <circle cx="55" cy="48" r="5" fill="oklch(0.75 0.15 160)"/>
        <circle cx="42" cy="52" r="5" fill="oklch(0.75 0.15 280)"/>
        <circle cx="60" cy="36" r="4" fill="oklch(0.8 0.15 200)"/>
        {/* Paintbrush */}
        <rect x="62" y="10" width="4" height="20" rx="1" fill="oklch(0.6 0.08 50)" transform="rotate(-30 64 20)"/>
        <path d="M66 5 L72 15 L68 18 L62 8 Z" fill="oklch(0.85 0.12 25)"/>
        {/* Sparkles */}
        <path d="M15 20 L16 23 L19 24 L16 25 L15 28 L14 25 L11 24 L14 23 Z" fill="oklch(0.9 0.18 95)"/>
        <path d="M72 50 L73 52 L75 52.5 L73 53 L72 55 L71 53 L69 52.5 L71 52 Z" fill="oklch(0.85 0.15 300)"/>
        {/* Rainbow drip */}
        <path d="M8 35 Q5 40, 8 45 Q11 50, 8 55" fill="none" stroke="oklch(0.8 0.2 25)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    // Music notes - Music & Movement
    music: (
      <svg viewBox="0 0 80 80" className={className}>
        {/* Music note 1 */}
        <ellipse cx="22" cy="55" rx="8" ry="6" fill="oklch(0.75 0.15 300)"/>
        <rect x="28" y="25" width="3" height="32" fill="oklch(0.75 0.15 300)"/>
        <path d="M30 25 Q40 20, 48 28 Q50 32, 48 35 L30 30 Z" fill="oklch(0.75 0.15 300)"/>
        {/* Music note 2 */}
        <ellipse cx="55" cy="50" rx="7" ry="5" fill="oklch(0.8 0.15 95)"/>
        <rect x="60" y="22" width="3" height="30" fill="oklch(0.8 0.15 95)"/>
        <path d="M62 22 Q70 18, 75 25 L62 28 Z" fill="oklch(0.8 0.15 95)"/>
        {/* Small notes floating */}
        <circle cx="15" cy="28" r="4" fill="oklch(0.85 0.12 160)"/>
        <rect x="18" y="15" width="2" height="15" fill="oklch(0.85 0.12 160)"/>
        {/* Stars */}
        <path d="M40 8 L41.5 12 L46 13 L41.5 14 L40 18 L38.5 14 L34 13 L38.5 12 Z" fill="oklch(0.9 0.18 95)"/>
        <path d="M68 45 L69 47 L71 47.5 L69 48 L68 50 L67 48 L65 47.5 L67 47 Z" fill="oklch(0.9 0.15 95)"/>
        {/* Sparkle swirl */}
        <path d="M8 40 Q12 35, 10 42 Q8 48, 14 45" fill="none" stroke="oklch(0.85 0.15 50)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    // Building blocks - Activity Learning alternative
    blocks: (
      <svg viewBox="0 0 80 80" className={className}>
        {/* Block 1 - bottom left */}
        <rect x="10" y="45" width="25" height="25" rx="3" fill="oklch(0.85 0.15 25)" stroke="oklch(0.7 0.15 25)" strokeWidth="2"/>
        <line x1="15" y1="50" x2="30" y2="50" stroke="oklch(0.95 0.05 25)" strokeWidth="2" strokeLinecap="round"/>
        {/* Block 2 - bottom right */}
        <rect x="40" y="45" width="25" height="25" rx="3" fill="oklch(0.85 0.12 160)" stroke="oklch(0.7 0.12 160)" strokeWidth="2"/>
        <circle cx="52" cy="57" r="5" fill="oklch(0.95 0.05 160)"/>
        {/* Block 3 - top */}
        <rect x="25" y="18" width="25" height="25" rx="3" fill="oklch(0.85 0.15 95)" stroke="oklch(0.7 0.15 95)" strokeWidth="2"/>
        <path d="M32 25 L37 32 L42 25 Z" fill="oklch(0.95 0.05 95)"/>
        {/* Stars and sparkles */}
        <path d="M60 12 L61.5 16 L66 17 L61.5 18 L60 22 L58.5 18 L54 17 L58.5 16 Z" fill="oklch(0.9 0.18 95)"/>
        <path d="M12 35 L13 37 L15 37.5 L13 38 L12 40 L11 38 L9 37.5 L11 37 Z" fill="oklch(0.85 0.15 300)"/>
        <path d="M70 55 L71 57 L73 57.5 L71 58 L70 60 L69 58 L67 57.5 L69 57 Z" fill="oklch(0.9 0.15 95)"/>
      </svg>
    ),
    // ABC letters - Early Learning alternative
    abc: (
      <svg viewBox="0 0 80 80" className={className}>
        {/* Letter A */}
        <text x="8" y="55" fontFamily="Comic Sans MS, cursive" fontSize="32" fontWeight="bold" fill="oklch(0.7 0.2 25)">A</text>
        {/* Letter B */}
        <text x="32" y="55" fontFamily="Comic Sans MS, cursive" fontSize="32" fontWeight="bold" fill="oklch(0.75 0.15 160)">B</text>
        {/* Letter C */}
        <text x="56" y="55" fontFamily="Comic Sans MS, cursive" fontSize="32" fontWeight="bold" fill="oklch(0.7 0.15 280)">C</text>
        {/* Sparkles */}
        <path d="M25 15 L26.5 19 L31 20 L26.5 21 L25 25 L23.5 21 L19 20 L23.5 19 Z" fill="oklch(0.9 0.18 95)"/>
        <path d="M55 12 L56 15 L59 16 L56 17 L55 20 L54 17 L51 16 L54 15 Z" fill="oklch(0.85 0.15 300)"/>
        <path d="M70 30 L71 32 L73 32.5 L71 33 L70 35 L69 33 L67 32.5 L69 32 Z" fill="oklch(0.9 0.15 95)"/>
        {/* Sun */}
        <circle cx="12" cy="18" r="5" fill="oklch(0.92 0.18 85)"/>
        <g stroke="oklch(0.92 0.18 85)" strokeWidth="1.5" strokeLinecap="round">
          <line x1="12" y1="10" x2="12" y2="12"/>
          <line x1="19" y1="18" x2="17" y2="18"/>
          <line x1="5" y1="18" x2="7" y2="18"/>
          <line x1="17" y1="13" x2="16" y2="14"/>
          <line x1="7" y1="13" x2="8" y2="14"/>
        </g>
        {/* Underline decoration */}
        <path d="M10 62 Q40 68, 70 62" fill="none" stroke="oklch(0.8 0.15 50)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
      </svg>
    ),
  }

  return illustrations[type] || null
}

// Hand-drawn divider component
export function HandDrawnDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <svg viewBox="0 0 200 20" className="w-48 h-5 opacity-40">
        <path 
          d="M10 10 Q 30 5, 50 10 T 90 10 T 130 10 T 170 10 T 190 10" 
          fill="none" 
          stroke="oklch(0.75 0.1 300)" 
          strokeWidth="2" 
          strokeLinecap="round"
          strokeDasharray="0"
        />
        <circle cx="100" cy="10" r="3" fill="oklch(0.9 0.15 95)" />
        <circle cx="85" cy="10" r="2" fill="oklch(0.85 0.15 50)" />
        <circle cx="115" cy="10" r="2" fill="oklch(0.85 0.12 160)" />
      </svg>
    </div>
  )
}
