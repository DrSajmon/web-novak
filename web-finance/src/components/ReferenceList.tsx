'use client'

// =========================================================
// <ReferenceList> – karty referencí s filtrem podle oblasti (stránka Reference)
//
// Filtr (tlačítka nahoře) je uložený ve stavu `filtr`. Zobrazí se jen
// tlačítka pro oblasti, ke kterým existuje aspoň jedna reference.
// Data se berou z data/reference.ts, názvy oblastí z data/sluzby.ts.
// =========================================================

import { useState } from 'react'
import type { Reference } from '@/data/reference'
import { sluzby } from '@/data/sluzby'
import { QuoteMark } from './Icons'

export function ReferenceList({ items }: { items: Reference[] }) {
  const [filtr, setFiltr] = useState('vse')

  const nazevTematu = (id: string) => sluzby.find((s) => s.id === id)?.nazev ?? id
  const temata = [...new Set(items.map((r) => r.tema))]
  const filtry = [{ id: 'vse', label: 'Vše' }, ...temata.map((id) => ({ id, label: nazevTematu(id) }))]
  const zobrazene = filtr === 'vse' ? items : items.filter((r) => r.tema === filtr)

  return (
    <div className="flex flex-col gap-8">
      {temata.length > 1 && (
        <div role="group" aria-label="Filtrovat reference" className="flex flex-wrap justify-center gap-2">
          {filtry.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filtr === f.id}
              onClick={() => setFiltr(f.id)}
              className={`min-h-10.5 rounded-full border px-4.5 text-sm font-medium transition-colors ${
                filtr === f.id ? 'border-navy bg-navy text-white' : 'border-slate-300 bg-white text-slate-800 hover:border-navy'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {zobrazene.map((r, i) => (
          // key obsahuje filtr → při přepnutí se karty znovu "vyjedou"
          <ReferenceCard key={`${filtr}-${i}`} item={r} label={nazevTematu(r.tema)} />
        ))}
      </div>
    </div>
  )
}

export function ReferenceCard({ item, label }: { item: Reference; label?: string }) {
  return (
    <figure className="card-hover fade-up flex flex-col gap-4.5 rounded-sm border border-line bg-white p-8" style={{ animationDuration: '0.5s' }}>
      <div className="flex items-center justify-between gap-3">
        <QuoteMark className="h-5 w-6 text-gold" />
        {label && (
          <span className="rounded-full bg-sand px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">{label}</span>
        )}
      </div>
      <blockquote className="font-serif text-lg leading-relaxed text-navy">{item.text}</blockquote>
      <figcaption className="mt-auto text-sm text-slate-500">{item.autor}</figcaption>
    </figure>
  )
}
