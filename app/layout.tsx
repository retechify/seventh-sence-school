import type { Metadata, Viewport } from 'next'
import { Nunito, Pacifico } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-pacifico',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Seventh Sense School of Arts | Where Every Child Finds Their Unique Spark',
    template: '%s | Seventh Sense School of Arts',
  },
  description: 'A magical preschool experience where children discover, learn, and grow through play, expression, and discovery. Premium early learning programs for your little ones in Kovaipudur, Coimbatore.',
  keywords: ['preschool', 'early learning', 'child development', 'kindergarten', 'playschool', 'School of arts', 'Kovaipudur', 'Coimbatore', 'Seventh Sense School'],
  authors: [{ name: 'Seventh Sense School of Arts' }],
  metadataBase: new URL('https://www.seventhsenseschool.com'),
  openGraph: {
    title: 'Seventh Sense School of Arts',
    description: 'A magical preschool experience where children discovery, learn, and grow through play and expression.',
    url: 'https://www.seventhsenseschool.com',
    siteName: 'Seventh Sense School of Arts',
    images: [
      {
        url: '/gallery/hero_main.png',
        width: 1200,
        height: 630,
        alt: 'Children enjoying fun learning activities at Seventh Sense School of Arts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seventh Sense School of Arts',
    description: 'Where Every Child Finds Their Unique Spark',
    images: ['/gallery/hero_main.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#E91E63',
  width: 'device-width',
  initialScale: 1,
}


import { WhatsAppFloating } from '@/components/whatsapp-floating'
import { SocialFloating } from '@/components/social-floating'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${nunito.variable} ${pacifico.variable} antialiased`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        >
          Skip to main content
        </a>
        {children}
        <WhatsAppFloating />
        <SocialFloating />
        <Analytics />
      </body>
    </html>
  )
}
