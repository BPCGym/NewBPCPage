import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: {
    default: 'BPC Gym – Treningssenter i Loddefjord, Bergen',
    template: '%s | BPC Gym',
  },
  description:
    'BPC Gym i Loddefjord: egentrening og velvære, åpent 04–23 alle dager. Se gymmet og finn medlemskapet som passer deg.',
  generator: 'v0.app',
  // Test version: ask search engines not to index. Remove at launch (see LANSERINGSSJEKK.md).
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: '/images/bpc-logo.png', type: 'image/png' }],
    apple: '/images/bpc-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#121315',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nb" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
