import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Visit",
  description: "Schedule a free school visit at Seventh Sense School of Arts. Experience our magical learning environment firsthand.",
}

export default function EnquireLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
