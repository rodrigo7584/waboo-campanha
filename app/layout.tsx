import type { Metadata } from 'next'
import { Outfit, Roboto } from 'next/font/google'


import '../styles/globals.css'

import '../styles/header.css'
import '../styles/footer.css'

const roboto = Roboto({ subsets: ['latin'],
weight:['300','400','500','700'],
variable: '--font-roboto' });

const outfit = Outfit({ subsets: ['latin'],
variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Waboo Creative',
  description: 'Sua presença online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${roboto.variable}`}>{children}</body>
    </html>
  )
}
