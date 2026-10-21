// =========================================================
// LAYOUT – společný obal všech stránek
// Tady se nastavují: písma, jazyk stránky, menu nahoře a patička dole.
// Obsah konkrétní stránky (page.tsx) se vloží místo {children}.
// =========================================================

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import './globals.css'

// Písmo pro běžný text (latin-ext = česká diakritika)
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

// Písmo pro nadpisy
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600'],
  display: 'swap',
})

// Titulek a popis pro Google a sdílení odkazu.
// "template" = podstránky mají titulek "Služby | Hynek Novák" apod.
export const metadata: Metadata = {
  title: {
    default: 'Hynek Novák | Osobní finance, investice a reality',
    template: '%s | Hynek Novák',
  },
  description:
    'Pomáhám klientům efektivně spravovat finance, chránit hodnoty a bezpečně investovat do nemovitostí. Finanční plánování, investice, pojištění a reality.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Nav />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
        {/* Bez JavaScriptu by animovaný obsah zůstal schovaný – tímhle se zobrazí hned */}
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </body>
    </html>
  )
}
