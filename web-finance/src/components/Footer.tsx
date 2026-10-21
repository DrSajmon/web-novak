// =========================================================
// <Footer> – patička (je v layout.tsx, takže je na všech stránkách)
// Kontakty a právní informace se berou z data/site.ts.
// =========================================================

import Link from 'next/link'
import { menu, site, telefonOdkaz } from '@/data/site'

export function Footer() {
  const rok = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark px-5 pb-8 pt-16 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex flex-[1_1_260px] flex-col gap-3.5">
            <span className="font-serif text-[26px] text-gold-light">{site.jmeno}</span>
            <p className="max-w-xs text-sm leading-relaxed">
              {site.podtitul}. {site.pozice}.
            </p>
          </div>

          <div className="flex flex-[0_1_160px] flex-col gap-2.5 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Stránky</span>
            {menu.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold-light">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-[0_1_220px] flex-col gap-2.5 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">Kontakt</span>
            <a href={`mailto:${site.email}`} className="hover:text-gold-light">
              {site.email}
            </a>
            {site.telefon && (
              <a href={telefonOdkaz} className="hover:text-gold-light">
                {site.telefon}
              </a>
            )}
            {site.adresa && <span>{site.adresa}</span>}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-[#23344d] pt-6 text-xs leading-relaxed text-slate-400">
          <span className="max-w-3xl">{site.pravniInfo}</span>
          <span>© {rok} {site.jmeno}</span>
        </div>
      </div>
    </footer>
  )
}
