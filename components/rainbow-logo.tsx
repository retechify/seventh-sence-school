export function RainbowLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Rainbow Arc */}
      <div className="relative w-12 h-8">
        <svg viewBox="0 0 48 32" className="w-full h-full">
          {/* Rainbow arcs */}
          <path
            d="M4 28 Q4 8 24 8 Q44 8 44 28"
            fill="none"
            stroke="oklch(0.7 0.2 25)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M8 28 Q8 12 24 12 Q40 12 40 28"
            fill="none"
            stroke="oklch(0.85 0.18 70)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M12 28 Q12 16 24 16 Q36 16 36 28"
            fill="none"
            stroke="oklch(0.9 0.15 95)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M16 28 Q16 20 24 20 Q32 20 32 28"
            fill="none"
            stroke="oklch(0.85 0.15 160)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20 28 Q20 24 24 24 Q28 24 28 28"
            fill="none"
            stroke="oklch(0.75 0.15 300)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Clouds at bottom */}
          <circle cx="6" cy="28" r="4" fill="white" />
          <circle cx="10" cy="28" r="3" fill="white" />
          <circle cx="42" cy="28" r="4" fill="white" />
          <circle cx="38" cy="28" r="3" fill="white" />
        </svg>
      </div>
      {/* Logo Text */}
      <span className="font-serif text-2xl text-primary">
        Seventh sense school of arts
      </span>
    </div>
  )
}

export function RainbowDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-2 flex ${className}`}>
      <div className="flex-1 bg-gradient-to-r from-[oklch(0.7_0.2_25)] to-[oklch(0.85_0.18_70)]" />
      <div className="flex-1 bg-gradient-to-r from-[oklch(0.85_0.18_70)] to-[oklch(0.9_0.15_95)]" />
      <div className="flex-1 bg-gradient-to-r from-[oklch(0.9_0.15_95)] to-[oklch(0.85_0.15_160)]" />
      <div className="flex-1 bg-gradient-to-r from-[oklch(0.85_0.15_160)] to-[oklch(0.75_0.15_230)]" />
      <div className="flex-1 bg-gradient-to-r from-[oklch(0.75_0.15_230)] to-[oklch(0.75_0.15_300)]" />
    </div>
  )
}
