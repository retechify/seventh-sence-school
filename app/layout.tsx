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
  title: 'Seventh sense school of arts | Where Every Child Finds Their Unique Spark',
  description: 'A magical preschool experience where children discover, learn, and grow through play, expression, and discovery. Premium early learning programs for your little ones.',
  keywords: ['preschool', 'early learning', 'child development', 'kindergarten', 'playschool'],
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
