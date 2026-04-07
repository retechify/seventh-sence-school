import AboutClient from "@/components/about-client"

export const metadata = {
  title: "About Us | Meet the Heart of Seventh Sense School of Arts",
  description: "Learn about the vision and legacy of Seventh Sense. Lead by Dr. Vijayalakshmi Ponnusamy, we are dedicated to joyful, activity-based child development in Coimbatore.",
  openGraph: {
    title: "About Seventh Sense | Our Story & Vision",
    description: "Discover our journey from a spark of curiosity to a trusted preschool in Coimbatore, dedicated to nurturing your child's confidence.",
    images: ["/gallery/about.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Seventh Sense School of Arts",
    description: "Meet the founder and learn about our mission to provide the best preschool experience in Coimbatore.",
    images: ["/gallery/about.png"],
  },
}

export default function AboutPage() {
  return <AboutClient />
}
