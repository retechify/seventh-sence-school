import { Metadata } from "next"

export const metadata: Metadata = {
  title: "A Glimpse Into Our World",
  description: "Take a peek into the joyful learning, creative play, and beautiful smiles of our little ones at Seventh Sense School of Arts.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
