'use client'

// =========================================================
// <Nav> – horní menu (je v layout.tsx, takže se zobrazí na všech stránkách)
//
// - Položky menu se berou z data/site.ts (pole `menu`).
// - Aktivní stránka se zvýrazní zlatě podle aktuální adresy (usePathname).
// - Pod 900 px šířky se odkazy schovají a ukáže se tlačítko ☰,
//   které rozbalí mobilní menu (stav `open`).
// - 'use client' nahoře = komponenta běží i v prohlížeči (kvůli klikání na ☰).
// =========================================================

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { menu, site } from '@/data/site'
import { Icon } from './Icons'

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Je odkaz aktivní? Úvod jen přesně na "/", ostatní i pro podstránky.
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <nav aria-label="Hlavní navigace" className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5" onClick={() => setOpen(false)}>
          <span className="border-r border-[#d6cfc4] pr-3.5 font-serif text-[28px] leading-none text-gold-dark">HN</span>
          <span className="flex flex-col gap-0.5">
            <span className="text-[15px] font-semibold tracking-[0.08em] text-navy">{site.jmeno.toUpperCase()}</span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500">{site.podtitul}</span>
          </span>
        </Link>

        {/* Odkazy – jen na širších obrazovkách (min-[900px]:flex) */}
        <div className="hidden items-center gap-7 text-sm font-medium min-[900px]:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`border-b-2 pb-1 transition-colors ${
                isActive(item.href)
                  ? 'border-gold text-gold-dark'
                  : 'border-transparent text-navy hover:text-gold-dark'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/kontakt#formular"
          className="hidden rounded-sm bg-navy px-5 py-3 text-[13px] font-semibold tracking-wide text-white transition hover:-translate-y-px hover:bg-navy-light min-[900px]:inline-block"
        >
          Nezávazná konzultace
        </Link>

        {/* Tlačítko ☰ – jen na mobilu */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobilni-menu"
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#d6cfc4] bg-white text-navy min-[900px]:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      {/* Rozbalené mobilní menu */}
      {open && (
        <div id="mobilni-menu" className="fade-up flex flex-col gap-1 bg-navy px-5 pb-7 pt-5 min-[900px]:hidden" style={{ animationDuration: '0.35s' }}>
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-[#23344d] py-2.5 font-serif text-[26px] ${
                isActive(item.href) ? 'text-gold-light' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt#formular"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-sm bg-gold p-4 text-center text-[15px] font-semibold text-navy"
          >
            Nezávazná konzultace
          </Link>
        </div>
      )}
    </nav>
  )
}
