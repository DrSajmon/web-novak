'use client'

// =========================================================
// <Reveal> – jemné vyjetí obsahu, když se při posouvání objeví v okně
//
// Použití:
//   <Reveal>…cokoliv…</Reveal>
//   <Reveal delay={150}>…</Reveal>        // zpoždění v ms (např. pro karty za sebou)
//   <Reveal className="grid gap-4">…</Reveal>  // třídy se předají obalovému <div>
//
// Jak to funguje: prvek má třídu .reveal (schovaný a posunutý dolů, viz globals.css).
// IntersectionObserver hlídá, kdy se prvek objeví na obrazovce, a přidá mu
// třídu .is-visible → CSS ho plynule zobrazí. Animace proběhne jen jednou.
// =========================================================

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  id?: string
}

export function Reveal({ children, delay = 0, className = '', id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target) // už ho dál nehlídáme
          }
        }
      },
      // spustí se, když je vidět aspoň 15 % prvku (a trochu dřív před spodním okrajem)
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
