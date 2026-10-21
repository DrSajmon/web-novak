// =========================================================
// STRÁNKA REFERENCE ( /reference )
// Reference se doplňují v data/reference.ts.
// Dokud tam žádné nejsou, ukáže se krátká zpráva místo karet.
// =========================================================

import type { Metadata } from 'next'
import { ButtonLink } from '@/components/Button'
import { CtaBanner } from '@/components/CtaBanner'
import { ReferenceList } from '@/components/ReferenceList'
import { SectionHeader } from '@/components/SectionHeader'
import { reference } from '@/data/reference'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Reference',
  description: 'Zkušenosti klientů se spoluprací s Hynkem Novákem.',
}

export default function ReferencePage() {
  return (
    <>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 pb-10 pt-[clamp(48px,8vw,88px)] text-center">
        <div className="fade-up">
          <SectionHeader as="h1" eyebrow="Reference" title="Výsledky mé práce" text="Co říkají klienti, se kterými spolupracuji." center />
        </div>
        <div className="fade-up flex flex-wrap justify-center gap-x-14 gap-y-6 pt-4" style={{ animationDelay: '250ms' }}>
          {site.cisla.map((c) => (
            <div key={c.popis} className="flex flex-col gap-1">
              <span className="font-serif text-[40px] text-navy">{c.hodnota}</span>
              <span className="text-[13px] text-slate-500">{c.popis}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-[clamp(64px,9vw,96px)] pt-6">
        {reference.length > 0 ? (
          <ReferenceList items={reference} />
        ) : (
          // Zobrazí se, dokud v data/reference.ts nejsou žádné reference
          <div className="fade-up mx-auto flex max-w-xl flex-col items-center gap-5 rounded-sm border border-line bg-white p-10 text-center">
            <p className="text-[17px] leading-relaxed text-slate-600">
              Reference klientů zde brzy zveřejním. Mezitím se mě nebojte zeptat na zkušenosti přímo na schůzce.
            </p>
            <ButtonLink href="/kontakt#formular">Domluvit schůzku</ButtonLink>
          </div>
        )}
      </section>

      {reference.length > 0 && (
        <CtaBanner title="Staňte se další spokojenou referencí" text="První konzultace je nezávazná." button="Domluvit schůzku" />
      )}
    </>
  )
}
