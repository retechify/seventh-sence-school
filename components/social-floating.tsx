"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Facebook, Youtube, Link as LinkIcon, X } from "lucide-react"

export function SocialFloating() {
  const [isOpen, setIsOpen] = useState(false)

  const socials = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/seventhsense_cbe/",
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      delay: 0.1
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://www.facebook.com/seventh.sense.school.2025/",
      color: "bg-[#1877F2]",
      delay: 0.2
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      url: "http://www.youtube.com/@SeventhSenseschoolofarts",
      color: "bg-[#FF0000]",
      delay: 0.3
    }
  ]

  return (
    <div className="fixed bottom-28 right-6 z-50 flex flex-col items-center">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-center gap-3 mb-3">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  delay: social.delay
                }}
                className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                aria-label={social.name}
                onClick={() => setIsOpen(false)}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2.2 // Slightly after WhatsApp
        }}
        className={`${isOpen ? 'bg-primary' : 'bg-peach'} w-14 h-14 rounded-full flex items-center justify-center text-primary shadow-[0_10px_25px_rgba(255,145,145,0.4)] hover:shadow-[0_15px_35px_rgba(255,145,145,0.5)] transition-all`}
        aria-label="Social Links"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <LinkIcon className="w-7 h-7" />
        )}
      </motion.button>
    </div>
  )
}
