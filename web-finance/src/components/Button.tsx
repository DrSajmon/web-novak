// =========================================================
// <ButtonLink> – odkaz, který vypadá jako tlačítko
//
// Použití:
//   <ButtonLink href="/kontakt">Nezávazná konzultace</ButtonLink>
//   <ButtonLink href="/sluzby" variant="outline">Více o službách</ButtonLink>
//   <ButtonLink href="/kontakt" variant="gold" arrow>…</ButtonLink>
//
// Varianty:
//   primary – tmavě zlaté tlačítko s bílým textem (na světlém pozadí)
//   outline – bílé s rámečkem
//   navy    – tmavě modré (např. v menu)
//   gold    – světle zlaté s modrým textem (na modrém pozadí)
// =========================================================

import Link from 'next/link'
import type { ReactNode } from 'react'
import { Icon } from './Icons'

const variants = {
  primary: 'bg-gold-dark text-white hover:bg-[#7a5d36]',
  outline: 'border border-slate-300 bg-white text-navy hover:border-navy',
  navy: 'bg-navy text-white hover:bg-[#1b2f4a]',
  gold: 'bg-gold text-navy hover:bg-gold-light',
}

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  arrow?: boolean
  className?: string
}

export function ButtonLink({ href, children, variant = 'primary', arrow = false, className = '' }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm px-7 py-3.5 text-sm font-semibold tracking-wide transition hover:-translate-y-px ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />}
    </Link>
  )
}
