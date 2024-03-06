import type { Metadata } from 'next'
import { Outfit, Roboto } from 'next/font/google'

import { GoogleTagManager } from '@next/third-parties/google'
import  FacebookPixel from "../components/FacebookPixel";

import Header from '../components/Header'
import Footer from '../components/Footer'

import 'swiper/css'
import '../styles/globals.css'

import '../styles/header.css'
import '../styles/footer.css'

const roboto = Roboto({ subsets: ['latin'],
weight:['300','400','500','700'],
variable: '--font-roboto' });

const outfit = Outfit({ subsets: ['latin'],
variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Waboo Creative - Revolucione sua presença online com um site personalizado e impactante!',
  description: 'Transforme sua presença online com a Waboo! Desenvolvemos sites personalizados e impactantes para empreendedores, startups e empresas. Aumente sua base de clientes, impulsione vendas e maximize seus lucros com nossas soluções de alto nível.',
  metadataBase: new URL('https://waboo.com.br/site'),
  openGraph: {
    title: 'Waboo Creative',
    description: 'Revolucione sua presença online com um site personalizado e impactante!',
    url: 'https://waboo.com.br/site',
    images: '/public/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waboo Creative',
    description: 'Revolucione sua presença online com um site personalizado e impactante!',
    images: '/public/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${roboto.variable}`}>
        <Header/>
          {children}
          <FacebookPixel />
        <Footer/>
      </body>
      <GoogleTagManager gtmId="GTM-PNLG4WC5" />
    </html>
  )
}
