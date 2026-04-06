import Link from "next/link"
import { RainbowLogo, RainbowDivider } from "./rainbow-logo"
import { Heart, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-cream pt-16 pb-8 overflow-hidden">
      {/* Wavy top edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-background wavy-bottom" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <RainbowLogo />
            <p className="text-muted-foreground leading-relaxed">
              Where every child finds their unique spark. A magical place for learning, growing, and discovering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Programs", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg text-primary mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {["Early Learning", "Activity-Based Learning", "Creative Arts", "Communication Development"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg text-primary mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-lavender/50 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+91 8610170313</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-peach/50 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>info@seventhsenseschool.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-mint/50 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>129, R – Block, Kovaipudur, Coimbatore, Tamil Nadu-641042</span>
              </li>
            </ul>
          </div>
        </div>

        <RainbowDivider className="mb-8 rounded-full overflow-hidden" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-[oklch(0.7_0.2_25)] fill-current" /> for little dreamers
          </p>
          <p>&copy; {new Date().getFullYear()} Seventh sense school of arts. All rights reserved.</p>
        </div>
      </div>

      {/* Floating doodles */}
      <div className="absolute top-20 right-10 w-8 h-8 opacity-30 animate-float">
        <svg viewBox="0 0 24 24" fill="oklch(0.9 0.15 95)">
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 w-6 h-6 opacity-30 animate-float-slow">
        <svg viewBox="0 0 24 24" fill="oklch(0.85 0.12 50)">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </footer>
  )
}
