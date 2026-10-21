// =========================================================
// STRÁNKA SLUŽBY ( /sluzby )
//   1. Úvod + rychlé odkazy na jednotlivé služby (#plan, #investice…)
//   2. Služby na střídačku: sudé = ikona vlevo, liché = ikona vpravo
//      (texty se mění v data/sluzby.ts, tady jen vzhled)
//   3. Jak spolupráce probíhá – 4 kroky
//   4. Výzva ke konzultaci
// =========================================================

import type { Metadata } from 'next'
import Link from 'next/link'
import { ButtonLink } from '@/components/Button'
import { CtaBanner } from '@/components/CtaBanner'
import { Icon } from '@/components/Icons'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { sluzby } from '@/data/sluzby'

export const metadata: Metadata = {
  title: 'Služby',
  description: 'Finanční plánování, pojištění, investice a ETF portfolia, realitní služby a správa majetku.',
}

// Kroky spolupráce – text upravíte přímo tady
const kroky = [
  { nazev: 'Úvodní schůzka', text: 'Nezávazně probereme vaše cíle, současnou situaci a co od spolupráce čekáte.' },
  { nazev: 'Analýza', text: 'Projdu vaše smlouvy, investice a cash-flow. Odhalím skryté poplatky i mezery v ochraně.' },
  { nazev: 'Návrh řešení', text: 'Představím konkrétní plán s čísly a vysvětlím každý krok, abyste přesně věděli, co vlastníte.' },
  { nazev: 'Dlouhodobá péče', text: 'Pravidelné revize a úpravy podle toho, jak se mění váš život a trhy.' },
]

export default function SluzbyPage() {
  return (
    <>
      {/* ---------- 1. ÚVOD ---------- */}
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pb-[clamp(40px,6vw,64px)] pt-[clamp(48px,8vw,88px)]">
        <div className="fade-up">
          <SectionHeader
            as="h1"
            eyebrow="Služby"
            title="Vše pro váš majetek na jednom místě"
            text="Přináším vědecký a matematicky podložený přístup ke správě rodinného majetku. Vyberte oblast, která vás zajímá."
          />
        </div>
        <div className="fade-up flex flex-wrap gap-2.5 pt-1.5" style={{ animationDelay: '200ms' }}>
          {sluzby.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              {s.nazev}
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- 2. SLUŽBY NA STŘÍDAČKU ---------- */}
      <div className="mx-auto flex max-w-6xl flex-col gap-[clamp(56px,8vw,96px)] px-5 pb-[clamp(64px,9vw,96px)]">
        {sluzby.map((s, i) => {
          const vpravo = i % 2 === 1 // každá druhá služba má ikonu vpravo
          return (
            <Reveal
              key={s.id}
              id={s.id}
              className={`group flex scroll-mt-28 flex-col items-center gap-[clamp(32px,6vw,72px)] md:flex-row ${
                vpravo ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Panel s ikonou – střídá modrou a béžovou */}
              <div
                className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded md:w-5/12 ${
                  vpravo ? 'bg-sand' : 'bg-navy'
                }`}
              >
                <span className={`absolute left-7 top-6 font-serif text-[22px] ${vpravo ? 'text-gold-dark' : 'text-gold-light'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* ozdobný kruh v rohu */}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-16 h-56 w-56 rounded-full border ${
                    vpravo ? '-left-16 border-[#ddd2c2]' : '-right-16 border-navy-line'
                  }`}
                />
                <Icon
                  name={s.ikona}
                  strokeWidth={0.9}
                  className={`h-28 w-28 transition-transform duration-500 group-hover:scale-105 ${vpravo ? 'text-navy' : 'text-gold'}`}
                />
              </div>

              {/* Text */}
              <div className="flex w-full min-w-0 flex-col gap-4.5 md:w-7/12">
                <h2 className="font-serif text-[clamp(28px,3.6vw,38px)] font-medium leading-tight text-navy">{s.nazev}</h2>
                <p className="text-[17px] leading-relaxed text-slate-600">{s.popis}</p>
                <ul className="flex flex-col gap-2.5">
                  {s.body.map((bod) => (
                    <li key={bod} className="flex gap-3 text-[15px] leading-normal">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" strokeWidth={2} />
                      {bod}
                    </li>
                  ))}
                </ul>
                <ButtonLink href={`/kontakt?tema=${s.id}#formular`} className="mt-1.5 self-start">
                  {s.tlacitko}
                </ButtonLink>
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* ---------- 3. JAK SPOLUPRÁCE PROBÍHÁ ---------- */}
      <section className="border-t border-line bg-white px-5 py-[clamp(64px,9vw,96px)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <Reveal>
            <SectionHeader eyebrow="Jak spolupráce probíhá" title="Čtyři kroky od první kávy k funkčnímu plánu" />
          </Reveal>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {kroky.map((k, i) => (
              <li key={k.nazev}>
                <Reveal delay={i * 100} className="flex flex-col gap-3 border-t-2 border-navy pt-6">
                  <span className="font-serif text-4xl text-gold-dark">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-semibold text-navy">{k.nazev}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">{k.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 4. VÝZVA ---------- */}
      <CtaBanner title="Nevíte, kde začít?" text="Na první schůzce společně zjistíme, co má pro vás největší smysl." />
    </>
  )
}
