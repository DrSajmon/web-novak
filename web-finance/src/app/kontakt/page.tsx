// =========================================================
// STRÁNKA KONTAKT ( /kontakt )
//   1. Úvod + karty s e-mailem, telefonem a adresou (z data/site.ts)
//   2. Formulář (components/ContactForm.tsx) – kotva #formular
//
// Odkaz /kontakt?tema=investice#formular otevře formulář
// s předvybraným tématem (používají ho tlačítka na stránce Služby).
// =========================================================

import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { Icon, type IconName } from '@/components/Icons'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { site, telefonOdkaz } from '@/data/site'
import { temataFormulare } from '@/data/sluzby'

export const metadata: Metadata = {
  title: 'Kontakt a nezávazná konzultace',
  description: 'Napište mi nebo zavolejte. Rád s vámi proberu vaše finanční cíle u kávy nebo online.',
}

export default async function KontaktPage({ searchParams }: { searchParams: Promise<{ tema?: string | string[] }> }) {
  // V Next.js 16 jsou parametry z adresy "Promise" – proto await
  const { tema } = await searchParams
  const predvybrane = typeof tema === 'string' && temataFormulare.some((t) => t.id === tema) ? tema : undefined

  // Kontaktní karty – zobrazí se jen vyplněné údaje
  type Karta = { ikona: IconName; popis: string; hodnota: string; href?: string }
  const vsechnyKarty: Karta[] = [
    { ikona: 'mail', popis: 'E-mail', hodnota: site.email, href: `mailto:${site.email}` },
    { ikona: 'phone', popis: 'Telefon', hodnota: site.telefon, href: telefonOdkaz },
    { ikona: 'pin', popis: 'Kancelář', hodnota: site.adresa },
  ]
  const karty = vsechnyKarty.filter((k) => k.hodnota)

  return (
    <>
      {/* ---------- 1. ÚVOD + KONTAKTY ---------- */}
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-10 pt-[clamp(48px,8vw,80px)]">
        <div className="fade-up">
          <SectionHeader
            as="h1"
            eyebrow="Kontakt"
            title="Napište mi nebo zavolejte"
            text="Rád s vámi proberu vaše finanční cíle u dobré kávy nebo na online schůzce."
          />
        </div>
        <div className="fade-up grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ animationDelay: '200ms' }}>
          {karty.map((k) => {
            const obsah = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand text-gold-dark">
                  <Icon name={k.ikona} className="h-[22px] w-[22px]" />
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-[13px] text-slate-500">{k.popis}</span>
                  <span className="break-words text-base font-semibold text-navy">{k.hodnota}</span>
                </span>
              </>
            )
            const cls = 'card-hover flex items-center gap-4 rounded-sm border border-line bg-white p-6'
            return k.href ? (
              <a key={k.popis} href={k.href} className={cls}>
                {obsah}
              </a>
            ) : (
              <div key={k.popis} className={cls}>
                {obsah}
              </div>
            )
          })}
        </div>
      </section>

      {/* ---------- 2. FORMULÁŘ ---------- */}
      <section id="formular" className="scroll-mt-24 px-5 pb-[clamp(64px,9vw,96px)] pt-6">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap overflow-hidden rounded shadow-[0_30px_60px_-30px_rgba(19,34,56,0.35)]">
          {/* Levý modrý panel */}
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-5.5 bg-navy p-[clamp(32px,5vw,56px)] text-white">
            <SectionHeader eyebrow="Nezávazná konzultace" title="Domluvme si první schůzku" text="Vyplňte pár údajů a já se vám ozvu." dark />
            <ol className="mt-2 flex flex-col gap-4">
              {['Ozvu se vám do 24 hodin', 'Domluvíme termín a formu schůzky', 'Probereme vaše cíle, bez závazků'].map((t, i) => (
                <li key={t} className="flex items-start gap-3.5">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-gold text-[13px] font-semibold text-gold-light">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-[15px] leading-normal">{t}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Pravá bílá část s formulářem */}
          <div className="min-w-0 flex-[1.5_1_420px] bg-white p-[clamp(28px,5vw,56px)]">
            <ContactForm initialTopic={predvybrane} />
          </div>
        </Reveal>
      </section>
    </>
  )
}
