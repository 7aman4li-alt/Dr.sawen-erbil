import React from "react"
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  title: 'Dr. Sawen Dizay | Premium Medical Care in Erbil',
  description: 'Experience exceptional healthcare at Dr. Sawen Dizay Clinic in Erbil. Modern facilities, trusted expertise, patient-centered care. Open 2 PM - 8 PM.',
  generator: 'v0.app',
  keywords: ['medical clinic', 'Erbil', 'Iraq', 'healthcare', 'doctor', 'Dr. Sawen Dizay'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
