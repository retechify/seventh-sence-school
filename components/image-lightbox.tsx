"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Download, Maximize2, Share2 } from "lucide-react"
import { StickerIcon } from "./floating-doodles"

interface ImageLightboxProps {
  images: string[]
  currentIdx: number | null
  onClose: () => void
}

export function ImageLightbox({ images, currentIdx, onClose }: ImageLightboxProps) {
  const [index, setIndex] = useState<number | null>(currentIdx)

  useEffect(() => {
    setIndex(currentIdx)
  }, [currentIdx])

  const handlePrevious = useCallback(() => {
    if (index !== null) {
      setIndex((index - 1 + images.length) % images.length)
    }
  }, [index, images.length])

  const handleNext = useCallback(() => {
    if (index !== null) {
      setIndex((index + 1) % images.length)
    }
  }, [index, images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, handlePrevious, handleNext])

  // Prevent scrolling when open
  useEffect(() => {
    if (index !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [index])

  if (index === null) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
        onClick={onClose}
      >
        {/* Decorative background doodles */}
        <div className="absolute top-10 left-10 w-24 h-24 opacity-20 animate-float pointer-events-none">
          <StickerIcon type="cloud" className="w-full h-full text-white" />
        </div>
        <div className="absolute bottom-10 right-10 w-20 h-20 opacity-20 animate-float-slow pointer-events-none">
          <StickerIcon type="rainbow" className="w-full h-full text-white" />
        </div>
        <div className="absolute top-1/4 right-10 w-16 h-16 opacity-10 animate-pulse pointer-events-none">
          <StickerIcon type="sparkle" className="w-full h-full text-white" />
        </div>

        {/* Toolbar */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 z-[110]" onClick={(e) => e.stopPropagation()}>
           <span className="text-white/80 font-bold tracking-widest text-sm">
             {index + 1} / {images.length}
           </span>
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 border border-white/20 group z-[110]"
          aria-label="Close"
        >
          <X className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:-translate-x-2 border border-white/20 group hidden md:flex z-[110]"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:translate-x-2 border border-white/20 group hidden md:flex z-[110]"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

        {/* Main Image Container */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center z-[105]"
          onClick={(e) => e.stopPropagation()}
        >
           <img
             src={images[index]}
             alt={`Gallery image ${index + 1}`}
             className="w-auto h-auto max-w-full max-h-full object-contain rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 border-white/10"
           />
           
           {/* Mobile Navigation Area */}
           <div className="absolute inset-y-0 left-0 w-1/4 md:hidden" onClick={handlePrevious} />
           <div className="absolute inset-y-0 right-0 w-1/4 md:hidden" onClick={handleNext} />
        </motion.div>

        {/* Footnote / Fun text */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm font-medium tracking-[0.2em] uppercase pointer-events-none">
          Seventh Sense Magic
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
