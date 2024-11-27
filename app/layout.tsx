import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'yatra sanstha samiti',
  description: 'NGO dedicated to the welfare of women and children in Barol Dadi since 2004, started by Raka Koul Labroo',
  
  // Basic metadata
  keywords: 'NGO, women empowerment, children welfare, Barol Dadi, Raka Koul, social work',
  authors: [{ name: 'Raka Koul Labroo' }],
  creator: 'Raka Koul Labroo',
  publisher: 'yatra sanstha samiti',
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: 'yatra sanstha samiti - Empowering Women and Children',
    description: 'NGO dedicated to the welfare of women and children in Barol Dadi since 2004',
    url: 'https://yatrasansthasamiti.netlify.app',
    siteName: 'yatra sanstha samiti',
    images: [
      {
        url: 'https://yatrasansthasamiti.netlify.app/kid.jpg',
        width: 1200,
        height: 630,
        alt: 'yatra sanstha samiti logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'yatra sanstha samiti - Empowering Women and Children',
    description: 'NGO dedicated to the welfare of women and children in Barol Dadi since 2004',
    images: ['https://yatrasansthasamiti.netlify.app/kid.jpg'],
  },

  // Robots metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for search consoles
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Additional metadata
  alternates: {
    canonical: 'https://yatrasansthasamiti.netlify.app/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}

 