'use client'

// =========================================================
// <Calculator> – kalkulačka složeného úročení (úvodní stránka)
//
// Tři jezdce (měsíční vklad, počet let, roční výnos) jsou uložené ve stavu (useState).
// Při každém posunu se výsledek přepočítá vzorcem pro budoucí hodnotu
// pravidelné měsíční investice:
//   hodnota = vklad × ((1 + r)^n − 1) / r
//   kde r = roční výnos / 12 (měsíční úrok) a n = počet měsíců
//
// Rozsahy jezdců změníte v atributech min / max / step u jednotlivých <input>.
// =========================================================

import { useState } from 'react'
import { ButtonLink } from './Button'
import { Reveal } from './Reveal'

// 123456.7 → "123 457 Kč"
const kc = (n: number) => Math.round(n).toLocaleString('cs-CZ') + ' Kč'

export function Calculator() {
  const [mesicne, setMesicne] = useState(3000)
  const [roky, setRoky] = useState(20)
  const [vynos, setVynos] = useState(6)

  const r = vynos / 100 / 12
  const n = roky * 12
  const celkem = r > 0 ? (mesicne * (Math.pow(1 + r, n) - 1)) / r : mesicne * n
  const vlozeno = mesicne * n

  return (
    <section className="border-t border-gold bg-navy px-5 py-[clamp(64px,9vw,96px)] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-12">
        <Reveal className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-gold-light">Síla složeného úročení</p>
          <h2 className="font-serif text-[clamp(30px,4vw,42px)] font-medium leading-tight">Kolik můžete mít za {roky} let?</h2>
          <p className="text-base leading-relaxed text-slate-300">
            Posuňte jezdci a podívejte se, jak pravidelné investování pracuje v čase. Konkrétní strategii vám rád
            spočítám na míru.
          </p>
          <ButtonLink href="/kontakt?tema=investice#formular" variant="gold" className="mt-2 self-start">
            Chci plán na míru
          </ButtonLink>
        </Reveal>

        <Reveal delay={120} className="flex min-w-0 flex-[1_1_440px] flex-col gap-6 rounded bg-navy-light p-[clamp(24px,4vw,36px)]">
          <Slider id="calc-m" label="Měsíční vklad" value={kc(mesicne)} min={500} max={30000} step={500} current={mesicne} onChange={setMesicne} />
          <Slider id="calc-y" label="Doba investování" value={`${roky} let`} min={1} max={40} step={1} current={roky} onChange={setRoky} />
          <Slider id="calc-r" label="Očekávaný roční výnos" value={`${String(vynos).replace('.', ',')} %`} min={1} max={10} step={0.5} current={vynos} onChange={setVynos} />

          <div className="flex flex-wrap gap-5 border-t border-navy-line pt-5">
            <div className="flex basis-full flex-col gap-1">
              <span className="text-[13px] text-slate-300">Odhadovaná hodnota</span>
              <span className="font-serif text-[clamp(32px,4vw,44px)] text-gold-light" aria-live="polite">
                {kc(celkem)}
              </span>
            </div>
            <div className="flex flex-[1_1_130px] flex-col gap-1">
              <span className="text-[13px] text-slate-300">Vloženo</span>
              <span className="text-xl font-semibold">{kc(vlozeno)}</span>
            </div>
            <div className="flex flex-[1_1_130px] flex-col gap-1">
              <span className="text-[13px] text-slate-300">Výnos</span>
              <span className="text-xl font-semibold">{kc(celkem - vlozeno)}</span>
            </div>
          </div>
          <p className="text-xs leading-normal text-slate-400">
            Modelový výpočet bez poplatků a daní. Nejde o příslib výnosu; hodnota investice může kolísat.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// Jeden jezdec s popiskem a aktuální hodnotou
type SliderProps = {
  id: string
  label: string
  value: string
  min: number
  max: number
  step: number
  current: number
  onChange: (v: number) => void
}

function Slider({ id, label, value, min, max, step, current, onChange }: SliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex justify-between gap-3 text-sm text-slate-300">
        <span>{label}</span>
        <strong className="text-white">{value}</strong>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-7 w-full cursor-pointer"
      />
    </div>
  )
}
