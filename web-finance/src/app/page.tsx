// =========================================================
// ÚVODNÍ STRÁNKA ( / )
// Jen zkrácené verze – každá sekce odkazuje na svou podstránku:
//   1. Hero (úvod s fotkou)          → tlačítka na Kontakt a Služby
//   2. Služby – malé karty            → /sluzby#<id služby>
//   3. Kalkulačka                     → components/Calculator.tsx
//   4. O mně – krátce                 → /o-mne
//   5. Reference – 2 ukázky           → /reference (zobrazí se, jen když nějaké jsou)
//   6. Výzva ke konzultaci            → /kontakt#formular
// =========================================================

import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '@/components/Button'
import { Calculator } from '@/components/Calculator'
import { CtaBanner } from '@/components/CtaBanner'
import { Icon, QuoteMark } from '@/components/Icons'
import { ReferenceCard } from '@/components/ReferenceList'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { reference } from '@/data/reference'
import { site } from '@/data/site'
import { sluzby } from '@/data/sluzby'

export default function HomePage() {
  return (
    <>
      {/* ---------- 1. HERO ---------- */}
      <section className="mx-auto flex max-w-6xl flex-wrap items-center gap-[clamp(40px,6vw,64px)] px-5 pb-[clamp(56px,8vw,96px)] pt-[clamp(40px,7vw,72px)]">
        {/* Text vlevo – každý řádek vyjede s jiným zpožděním (animationDelay) */}
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-6">
          <p className="fade-up text-[13px] font-semibold uppercase tracking-[0.22em] text-gold-dark" style={{ animationDelay: '80ms' }}>
            Finance. Reality. Jedno rozhodnutí.
          </p>
          <h1 className="fade-up font-serif text-[clamp(38px,5.4vw,60px)] font-medium leading-[1.08] text-navy" style={{ animationDelay: '180ms' }}>
            Komplexní řešení pro váš majetek a&nbsp;budoucnost.
          </h1>
          <p className="fade-up max-w-[500px] text-[clamp(16px,1.6vw,18px)] leading-relaxed text-slate-600" style={{ animationDelay: '280ms' }}>
            Pomáhám klientům efektivně spravovat finance, chránit hodnoty a bezpečně investovat do nemovitostí.
          </p>
          <div className="fade-up flex flex-wrap gap-3" style={{ animationDelay: '380ms' }}>
            <ButtonLink href="/kontakt#formular" arrow>
              Nezávazná konzultace
            </ButtonLink>
            <ButtonLink href="/sluzby" variant="outline">
              Více o službách
            </ButtonLink>
          </div>
          <div className="fade-up flex flex-wrap gap-x-9 gap-y-5 border-t border-[#e5ded4] pt-6" style={{ animationDelay: '500ms' }}>
            {site.cisla.map((c) => (
              <Stat key={c.popis} value={c.hodnota} label={c.popis} />
            ))}
            <Stat value="Broker Consulting" label="regionální ředitel" />
          </div>
        </div>

        {/* Fotka vpravo s citátem */}
        <div className="fade-up relative flex min-w-0 flex-[1_1_380px] justify-center pb-24" style={{ animationDelay: '280ms' }}>
          <div className="relative h-[clamp(380px,48vw,560px)] w-full max-w-[460px] overflow-hidden rounded-t-[230px] bg-slate-200">
            <Image
              src="/portret.jpg"
              alt={site.jmeno}
              fill
              sizes="(max-width: 900px) 100vw, 460px"
              loading="eager"
              fetchPriority="high"
              className="object-cover object-[center_20%]"
            />
          </div>
          <figure className="absolute bottom-0 right-0 flex w-[min(380px,92%)] flex-col gap-3 rounded-sm bg-navy px-7 py-6 text-white shadow-[0_24px_48px_-16px_rgba(19,34,56,0.45)]">
            <QuoteMark className="h-[22px] w-7 text-gold" />
            <blockquote className="font-serif text-lg leading-normal">
              V byznysu i v týmu si zakládám na férovosti, rozumu a dlouhodobém partnerství.
            </blockquote>
            <figcaption className="text-sm font-medium text-gold-light">{site.jmeno}</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- 2. SLUŽBY – zkrácené karty ---------- */}
      <section className="border-t border-line bg-white px-5 py-[clamp(64px,9vw,96px)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-11">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeader eyebrow="Co pro vás mohu udělat" title="Finance a reality pod jednou střechou" />
            <Link href="/sluzby" className="py-3 text-sm font-semibold text-gold-dark hover:underline">
              Všechny služby →
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sluzby.map((s, i) => (
              <Reveal key={s.id} delay={i * 80} className="flex">
                <Link
                  href={`/sluzby#${s.id}`}
                  className="card-hover flex w-full flex-col gap-3 rounded-sm border border-line bg-cream px-6 py-7"
                >
                  <Icon name={s.ikona} className="h-[34px] w-[34px] text-gold-dark" strokeWidth={1.5} />
                  <span className="text-[17px] font-semibold text-navy">{s.nazev}</span>
                  <span className="text-sm leading-relaxed text-slate-600">{s.kratce}</span>
                  <span className="mt-auto text-[13px] font-semibold text-gold-dark">Zjistit více →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3. KALKULAČKA ---------- */}
      <Calculator />

      {/* ---------- 4. O MNĚ – krátce ---------- */}
      <section className="px-5 py-[clamp(64px,9vw,96px)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-[clamp(40px,6vw,64px)]">
          <Reveal className="flex min-w-0 flex-[1_1_280px] justify-center p-3.5">
            <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-full outline outline-1 outline-offset-[14px] outline-gold">
              <Image src="/portret.jpg" alt={site.jmeno} fill sizes="360px" className="object-cover object-[center_12%]" />
            </div>
          </Reveal>
          <Reveal delay={120} className="flex min-w-0 flex-[1.4_1_440px] flex-col gap-5">
            <SectionHeader
              eyebrow="Kdo jsem"
              title="Rozum a čísla místo emocí"
              text="Přináším vědecký a matematicky podložený přístup ke správě rodinného majetku, inspirovaný tím, jak investují velké světové instituce."
            />
            <ButtonLink href="/o-mne" variant="outline" className="self-start border-navy">
              Více o mně
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* ---------- 5. REFERENCE – jen když nějaké jsou (data/reference.ts) ---------- */}
      {reference.length > 0 && (
        <section className="border-t border-line bg-white px-5 py-[clamp(64px,9vw,96px)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <Reveal className="flex flex-wrap items-end justify-between gap-5">
              <SectionHeader eyebrow="Reference" title="Co říkají klienti" />
              <Link href="/reference" className="py-3 text-sm font-semibold text-gold-dark hover:underline">
                Všechny reference →
              </Link>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {reference.slice(0, 2).map((r, i) => (
                <Reveal key={i} delay={i * 100} className="flex">
                  <ReferenceCard item={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- 6. VÝZVA ---------- */}
      <CtaBanner title="Domluvme si nezávaznou konzultaci" text="U dobré kávy nebo online. Ozvu se do 24 hodin." button="Vyplnit poptávku" />
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-serif text-3xl text-navy">{value}</span>
      <span className="text-[13px] text-slate-500">{label}</span>
    </div>
  )
}
