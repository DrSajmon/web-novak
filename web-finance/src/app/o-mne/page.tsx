// =========================================================
// STRÁNKA O MNĚ ( /o-mne )
//   1. Úvod s fotkou a čísly
//   2. Můj přístup – 3 principy (pole `principy`)
//   3. Proč spolupracovat – 4 důvody na modrém pozadí (pole `duvody`)
//   4. Citát + tlačítko na kontakt
// =========================================================

import type { Metadata } from 'next'
import Image from 'next/image'
import { ButtonLink } from '@/components/Button'
import { Icon, QuoteMark, type IconName } from '@/components/Icons'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'O mně',
  description: 'Hynek Novák – regionální ředitel Broker Consulting, specialista na investice a reality.',
}

const principy = [
  { nazev: 'Data místo dojmů', text: 'Rozhodnutí stavím na číslech a dlouhodobých datech, ne na aktuálních náladách trhu.' },
  { nazev: 'Nízké náklady', text: 'Každé procento poplatků se za desítky let násobí. Hlídám, abyste neplatil víc, než musíte.' },
  { nazev: 'Srozumitelnost', text: 'Vysvětlím každý krok tak, abyste přesně věděli, co vlastníte a proč.' },
]

const duvody: { ikona: IconName; nazev: string; text: string }[] = [
  { ikona: 'person', nazev: 'Individuální přístup', text: 'Řešení vždy přizpůsobuji vašim potřebám.' },
  { ikona: 'award', nazev: 'Zkušenosti a odbornost', text: 'Praxe ve financích, investicích a realitách.' },
  { ikona: 'shield', nazev: 'Důvěra a transparentnost', text: 'Jednám férově a vždy ve vašem zájmu.' },
  { ikona: 'home', nazev: 'Komplexní servis', text: 'Finance i reality vyřešíte na jednom místě.' },
]

export default function OMnePage() {
  return (
    <>
      {/* ---------- 1. ÚVOD ---------- */}
      <section className="mx-auto flex max-w-6xl flex-wrap items-center gap-[clamp(40px,6vw,72px)] px-5 pb-[clamp(56px,8vw,96px)] pt-[clamp(48px,8vw,88px)]">
        <div className="fade-up flex min-w-0 flex-[1_1_340px] justify-center p-3.5" style={{ animationDelay: '150ms' }}>
          <div className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-sm outline outline-1 outline-offset-[14px] outline-gold">
            <Image
              src="/portret.jpg"
              alt={site.jmeno}
              fill
              sizes="(max-width: 900px) 100vw, 440px"
              loading="eager"
              fetchPriority="high"
              className="object-cover object-[center_15%]"
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-[1.2_1_440px] flex-col gap-5">
          <div className="fade-up">
            <SectionHeader as="h1" eyebrow="O mně" title={site.jmeno} />
          </div>
          <p className="fade-up text-lg leading-relaxed text-slate-600" style={{ animationDelay: '200ms' }}>
            {site.pozice} a specialista na investice a reality. Přináším vědecký a matematicky podložený přístup ke správě
            rodinného majetku.
          </p>
          {/* TODO: sem doplňte svůj příběh – jak jste se k financím dostal, co vás baví, čím se lišíte.
              Stačí zkopírovat odstavec <p> výše a přepsat text. */}
          <div className="fade-up flex flex-wrap gap-x-10 gap-y-5 border-t border-[#e5ded4] pt-5.5" style={{ animationDelay: '300ms' }}>
            {site.cisla.map((c) => (
              <div key={c.popis} className="flex flex-col gap-1">
                <span className="font-serif text-3xl text-navy">{c.hodnota}</span>
                <span className="text-[13px] text-slate-500">{c.popis}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 2. MŮJ PŘÍSTUP ---------- */}
      <section className="border-t border-line bg-white px-5 py-[clamp(64px,9vw,96px)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="Můj přístup"
              title="Investuji jako velké instituce, jen v měřítku vaší rodiny"
              text="Inspiruji se tím, jak spravuje majetek Norský státní fond nebo jak alokuje aktiva Nobelova nadace."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {principy.map((p, i) => (
              <Reveal key={p.nazev} delay={i * 100} className="flex">
                <article className="card-hover flex w-full flex-col gap-3.5 rounded-sm border border-line bg-cream px-7 py-8">
                  <span className="font-serif text-[32px] text-gold-dark">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-semibold text-navy">{p.nazev}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3. PROČ SPOLUPRACOVAT ---------- */}
      <section className="border-t border-gold bg-navy px-5 py-[clamp(64px,9vw,96px)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <h2 className="text-center text-[13px] font-semibold uppercase tracking-[0.22em] text-gold-light">Proč spolupracovat se mnou</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {duvody.map((d, i) => (
              <Reveal key={d.nazev} delay={i * 100} className="flex gap-4">
                <Icon name={d.ikona} className="h-[30px] w-[30px] shrink-0 text-gold" strokeWidth={1.5} />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold">{d.nazev}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. CITÁT ---------- */}
      <section className="px-5 py-[clamp(64px,9vw,96px)]">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          <QuoteMark className="h-8 w-10 text-gold" />
          <blockquote className="font-serif text-[clamp(24px,3vw,34px)] leading-snug text-navy">
            V byznysu i v týmu si zakládám na férovosti, rozumu a dlouhodobém partnerství.
          </blockquote>
          <ButtonLink href="/kontakt#formular">Pojďme se potkat</ButtonLink>
        </Reveal>
      </section>
    </>
  )
}
