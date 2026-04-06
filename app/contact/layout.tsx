import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Have questions? We're here to help. Reach out to Seventh Sense School of Arts for admissions, visits, or general enquiries.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
