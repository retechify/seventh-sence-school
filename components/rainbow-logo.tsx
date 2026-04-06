import Image from "next/image"

export function RainbowLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Icon */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image
          src="/gallery/logo/logo.png"
          alt="Seventh Sense Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="font-sans text-xl font-bold tracking-tight text-[#2D2D2D] leading-tight">
          Seventh Sense
        </span>
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#E91E63] font-semibold leading-none">
          School of Arts
        </span>
      </div>
    </div>
  )
}

export function RainbowDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-2 flex ${className}`}>
      <div className="flex-1 bg-gradient-to-r from-[#E91E63] to-[#FF9800]" />
      <div className="flex-1 bg-gradient-to-r from-[#FF9800] to-[#FFEB3B]" />
      <div className="flex-1 bg-gradient-to-r from-[#FFEB3B] to-[#4CAF50]" />
      <div className="flex-1 bg-gradient-to-r from-[#4CAF50] to-[#2196F3]" />
      <div className="flex-1 bg-gradient-to-r from-[#2196F3] to-[#9C27B0]" />
    </div>
  )
}

