import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yatra Sanstha Samiti - Empowering Women and Children',
  description: 'NGO dedicated to the welfare of women and children in Barol Dadi since 2004, started by Raka Koul Labroo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

