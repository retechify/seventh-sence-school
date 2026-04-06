import ContactClient from "@/components/contact-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Connect with Seventh Sense",
  description: "Have questions? We'd love to hear from you. Visit our Kovaipudur campus, call us, or message us on WhatsApp for admission inquiries.",
  openGraph: {
    title: "Contact Seventh Sense School of Arts",
    description: "Get in touch with us for preschool admissions and creative program details in Coimbatore.",
    images: ["/gallery/gallery-section/im1.png"],
  },
}

export default function ContactPage() {
  return <ContactClient />
}
