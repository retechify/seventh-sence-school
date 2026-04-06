import EnquireClient from "@/components/enquire-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Visit | Start Your Child's Journey",
  description: "Schedule a free school visit to Seventh Sense School of Arts. Experience our creative learning environment and meet our passionate educators in Kovaipudur.",
  openGraph: {
    title: "Book a School Visit | Seventh Sense",
    description: "Experience the magic of our preschool. Schedule your visit today and discover why parents love Seventh Sense.",
    images: ["/gallery/gallery-section/im1.png"],
  },
}

export default function EnquirePage() {
  return <EnquireClient />
}
