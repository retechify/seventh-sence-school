import type { Metadata, Viewport } from 'next'
import { Nunito, Pacifico } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
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
  title: 'Seventh Sense School of Arts | Where Every Child Finds Their Unique Spark',
  description: 'A magical preschool experience where children discover, learn, and grow through play, expression, and discovery. Premium early learning programs for your little ones.',
  keywords: ['preschool', 'early learning', 'child development', 'kindergarten', 'playschool', 'School of arts', 'Kovaipudur', 'Coimbatore'],
  authors: [{ name: 'Seventh Sense School of Arts' }],
  openGraph: {
    title: 'Seventh Sense School of Arts',
    description: 'Where Every Child Finds Their Unique Spark',
    url: 'https://seventhsenseschool.com',
    siteName: 'Seventh Sense School of Arts',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seventh Sense School of Arts',
    description: 'Where Every Child Finds Their Unique Spark',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5e6d3',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${pacifico.variable} font-sans antialiased`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
