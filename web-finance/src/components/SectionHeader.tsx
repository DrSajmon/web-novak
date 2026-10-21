// =========================================================
// <SectionHeader> – nadpis sekce: malý zlatý štítek + velký nadpis + volitelný text
//
// Použití:
//   <SectionHeader eyebrow="Co pro vás mohu udělat" title="Finance a reality…" />
//   <SectionHeader eyebrow="…" title="…" text="…" center />
//   <SectionHeader eyebrow="…" title="…" dark />   // na tmavě modrém pozadí
// =========================================================

type SectionHeaderProps = {
  eyebrow: string
  title: string
  text?: string
  center?: boolean
  dark?: boolean
  as?: 'h1' | 'h2'
}

export function SectionHeader({ eyebrow, title, text, center = false, dark = false, as = 'h2' }: SectionHeaderProps) {
  const Heading = as
  return (
    <div className={`flex max-w-3xl flex-col gap-3.5 ${center ? 'mx-auto items-center text-center' : ''}`}>
      <p className={`text-[13px] font-semibold uppercase tracking-[0.22em] ${dark ? 'text-gold-light' : 'text-gold-dark'}`}>
        {eyebrow}
      </p>
      <Heading
        className={`font-serif font-medium leading-tight ${dark ? 'text-white' : 'text-navy'} ${
          as === 'h1' ? 'text-[clamp(36px,5vw,56px)]' : 'text-[clamp(30px,4vw,42px)]'
        }`}
      >
        {title}
      </Heading>
      {text && <p className={`text-[17px] leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}
