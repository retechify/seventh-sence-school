"use client"

import { motion } from "framer-motion"
import { StickerIcon } from "@/components/floating-doodles"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface AnnouncementBarProps {
  text: string
  ctaText?: string
  ctaLink?: string
  isVisible?: boolean
  iconType?: "star" | "sparkle" | "sun" | "rainbow" | "cloud" | "heart" | "balloon" | "moon"
}

export function AnnouncementBar({
  text = "🎉 Admissions Open for 2026–27 – Limited Seats Available!",
  ctaText = "Enquire Now",
  ctaLink = "/enquire",
  isVisible = true,
  iconType = "sparkle"
}: AnnouncementBarProps) {
  if (!isVisible) return null

  return (
    <div className="container mx-auto px-4 -mt-10 mb-10 relative z-30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-md border border-peach/30 rounded-3xl p-4 md:p-6 shadow-xl relative overflow-hidden group">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-soft-yellow/10 via-peach/5 to-soft-yellow/10 opacity-50" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-soft-yellow/30 flex items-center justify-center animate-pulse">
                <StickerIcon type={iconType} className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-primary font-semibold text-lg md:text-xl">
                {text}
              </p>
            </div>
            
            {ctaText && ctaLink && (
              <Link href={ctaLink}>
                <Button variant="ghost" className="text-secondary font-bold hover:text-secondary/80 hover:bg-secondary/5 group flex items-center gap-2 transition-all">
                  {ctaText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
