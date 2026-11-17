import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Digital Hit — Design que acerta. Resultado que aparece.',
  description: 'Landing pages, criativos para Instagram, gestão de tráfego e planilhas automatizadas para transformar presença digital em resultado real.',
  keywords: ['landing pages', 'criativos para Instagram', 'gestão de tráfego', 'planilhas automatizadas', 'marketing digital'],
  openGraph: {
    title: 'Digital Hit — Seu negócio no alvo certo',
    description: 'Design, performance e automação para fazer seu negócio avançar.',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
