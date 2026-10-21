'use client'

// =========================================================
// <ContactForm> – formulář pro nezávaznou konzultaci (stránka Kontakt)
//
// Co dělá:
// 1. Uživatel vyplní údaje a klikne na témata (tlačítka se dají zapnout/vypnout).
// 2. Po odeslání se data pošlou na /api/poptavka (soubor app/api/poptavka/route.ts),
//    který z nich udělá e-mail a pošle ho přes službu Resend.
// 3. Podle odpovědi se ukáže poděkování, nebo chybová hláška.
//
// `initialTopic` = téma předvybrané z odkazu, např. /kontakt?tema=investice
// Skryté pole "web" je past na roboty (člověk ho nevidí a nevyplní).
// =========================================================

import { useState, type FormEvent } from 'react'
import { site } from '@/data/site'
import { temataFormulare } from '@/data/sluzby'
import { Icon } from './Icons'

type Stav = 'ceka' | 'odesilam' | 'odeslano' | 'chyba'

const inputClass =
  'w-full rounded-sm border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-800 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40'

export function ContactForm({ initialTopic }: { initialTopic?: string }) {
  const [temata, setTemata] = useState<string[]>(initialTopic ? [initialTopic] : [])
  const [stav, setStav] = useState<Stav>('ceka')

  // Zapne / vypne jedno téma
  const prepniTema = (id: string) =>
    setTemata((aktualni) => (aktualni.includes(id) ? aktualni.filter((t) => t !== id) : [...aktualni, id]))

  async function odeslat(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStav('odesilam')

    const form = new FormData(e.currentTarget)
    const data = {
      jmeno: form.get('jmeno'),
      email: form.get('email'),
      telefon: form.get('telefon'),
      forma: form.get('forma'),
      zprava: form.get('zprava'),
      souhlas: form.get('souhlas') === 'on',
      web: form.get('web'), // past na roboty
      temata: temata.map((id) => temataFormulare.find((t) => t.id === id)?.label ?? id),
    }

    try {
      const res = await fetch('/api/poptavka', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStav(res.ok ? 'odeslano' : 'chyba')
    } catch {
      setStav('chyba')
    }
  }

  // ---- Poděkování po odeslání ----
  if (stav === 'odeslano') {
    return (
      <div role="status" className="fade-up flex min-h-[440px] flex-col items-center justify-center gap-4 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-gold-dark">
          <Icon name="check" className="h-8 w-8" strokeWidth={2} />
        </span>
        <h3 className="font-serif text-[28px] font-medium text-navy">Děkuji, zpráva odešla</h3>
        <p className="max-w-sm text-base leading-relaxed text-slate-600">Ozvu se vám co nejdříve, nejpozději do 24 hodin.</p>
        <button
          type="button"
          onClick={() => {
            setStav('ceka')
            setTemata([])
          }}
          className="min-h-11 rounded-sm border border-slate-300 bg-white px-5 text-sm font-semibold text-navy"
        >
          Odeslat další zprávu
        </button>
      </div>
    )
  }

  // ---- Samotný formulář ----
  return (
    <form onSubmit={odeslat} className="flex flex-col gap-5">
      <div className="grid gap-4.5 sm:grid-cols-2">
        <Field id="f-jmeno" label="Jméno a příjmení *">
          <input id="f-jmeno" name="jmeno" type="text" required autoComplete="name" placeholder="Jan Novák" className={inputClass} />
        </Field>
        <Field id="f-email" label="E-mail *">
          <input id="f-email" name="email" type="email" required autoComplete="email" placeholder="jan@email.cz" className={inputClass} />
        </Field>
        <Field id="f-telefon" label="Telefon">
          <input id="f-telefon" name="telefon" type="tel" autoComplete="tel" placeholder="+420 777 123 456" className={inputClass} />
        </Field>
        <Field id="f-forma" label="Forma schůzky">
          <select id="f-forma" name="forma" className={inputClass}>
            <option>Osobně</option>
            <option>Telefonicky</option>
            <option>Google Meet</option>
            <option>Zoom</option>
          </select>
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2.5 text-sm font-semibold text-navy">Co vás zajímá?</legend>
        <div className="flex flex-wrap gap-2">
          {temataFormulare.map((t) => {
            const zapnuto = temata.includes(t.id)
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={zapnuto}
                onClick={() => prepniTema(t.id)}
                className={`min-h-10 rounded-full border px-4 text-sm font-medium transition-colors ${
                  zapnuto ? 'border-navy bg-navy text-white' : 'border-slate-300 bg-white text-slate-800 hover:border-navy'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>
      </fieldset>

      <Field id="f-zprava" label="Vaše zpráva">
        <textarea id="f-zprava" name="zprava" rows={4} placeholder="Stručně popište svou situaci nebo dotaz…" className={`${inputClass} resize-y`} />
      </Field>

      {/* Past na roboty – skrytá pro lidi */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-normal text-slate-600">
        <input type="checkbox" name="souhlas" required className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-gold-dark" />
        <span>Souhlasím se zpracováním osobních údajů za účelem odpovědi na můj dotaz. *</span>
      </label>

      {stav === 'chyba' && (
        <p role="alert" className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo mi napište přímo na{' '}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={stav === 'odesilam'}
        className="inline-flex min-h-13 items-center gap-2.5 self-start rounded-sm bg-gold-dark px-7 text-[15px] font-semibold tracking-wide text-white transition hover:-translate-y-px hover:bg-[#7a5d36] disabled:cursor-wait disabled:opacity-70"
      >
        {stav === 'odesilam' ? 'Odesílám…' : 'Odeslat poptávku'}
        <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
      </button>
    </form>
  )
}

// Popisek + pole pod sebou
function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
      </label>
      {children}
    </div>
  )
}
