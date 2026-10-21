// =========================================================
// <CtaBanner> – tmavě modrý pruh s výzvou a tlačítkem (konec většiny stránek)
//
// Použití:
//   <CtaBanner title="Domluvme si nezávaznou konzultaci" text="…" button="Vyplnit poptávku" />
// Tlačítko vede vždy na formulář na stránce Kontakt (lze změnit přes href).
// =========================================================

import { ButtonLink } from './Button'
import { Reveal } from './Reveal'

type CtaBannerProps = {
  title: string
  text?: string
  button?: string
  href?: string
}

export function CtaBanner({
  title,
  text,
  button = 'Nezávazná konzultace',
  href = '/kontakt#formular',
}: CtaBannerProps) {
  return (
    <section className="px-5 py-[clamp(64px,9vw,96px)]">
      <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 rounded bg-navy p-[clamp(32px,5vw,56px)] text-white">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-3">
          <h2 className="font-serif text-[clamp(28px,3.6vw,38px)] font-medium leading-tight">{title}</h2>
          {text && <p className="text-base leading-relaxed text-slate-300">{text}</p>}
        </div>
        <ButtonLink href={href} variant="gold">
          {button}
        </ButtonLink>
      </Reveal>
    </section>
  )
}
