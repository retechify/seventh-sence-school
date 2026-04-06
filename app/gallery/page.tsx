import GalleryClient from "@/components/gallery-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Moments of Joy & Discovery",
  description: "Explore the magical world of Seventh Sense School of Arts. See our students learning, playing, and creating in our vibrant Kovaipudur campus.",
  openGraph: {
    title: "Gallery | Seventh Sense School of Arts",
    description: "Step inside and witness the magic of childhood. Real growth, real friendships, and endless discovery.",
    images: ["/gallery/gallery-section/im3.png"],
  },
}

export default function GalleryPage() {
  return <GalleryClient />
}
