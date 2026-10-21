// =========================================================
// SLUŽBY – texty pro úvodní stránku (krátké karty) i stránku Služby
// Pořadí v poli = pořadí na webu. Na stránce Služby se automaticky
// střídá: 1. ikona vlevo, 2. ikona vpravo, 3. vlevo…
//
// id      – použije se v odkazu (/sluzby#investice) a ve formuláři
// ikona   – název ikony z components/Icons.tsx
// kratce  – jedna věta do karty na úvodní stránce
// popis   – odstavec na stránce Služby
// body    – odrážky "s čím pomohu"
// tlacitko – text tlačítka, které vede na formulář s předvybraným tématem
// =========================================================

import type { IconName } from '@/components/Icons'

export type Sluzba = {
  id: string
  nazev: string
  ikona: IconName
  kratce: string
  popis: string
  body: string[]
  tlacitko: string
}

export const sluzby: Sluzba[] = [
  {
    id: 'plan',
    nazev: 'Finanční plánování',
    ikona: 'plan',
    kratce: 'Strategie, která dává smysl vám i rodině.',
    popis:
      'Komplexní audit vašich finančních toků a modelování scénářů, jak dosáhnout finanční nezávislosti a renty. Vycházím z modelů, které používají světové instituce.',
    body: [
      'Analýza příjmů, výdajů, rezerv a závazků',
      'Milionový plán – cesta k finanční nezávislosti',
      'Plán renty a zajištění na důchod',
      'Pravidelná revize podle životních změn',
    ],
    tlacitko: 'Chci finanční plán',
  },
  {
    id: 'pojisteni',
    nazev: 'Pojištění',
    ikona: 'pojisteni',
    kratce: 'Ochrana majetku, zdraví i příjmů.',
    popis:
      'Zajištění stabilního příjmu a ochrana vybudovaných hodnot. Pojištění nastavím tak, aby krylo skutečná rizika, ne zbytečnosti.',
    body: [
      'Životní a úrazové pojištění pro ochranu příjmu',
      'Pojištění nemovitosti, domácnosti a odpovědnosti',
      'Specializované vybavení, např. drahá jízdní kola',
      'Revize stávajících smluv',
    ],
    tlacitko: 'Chci revizi pojištění',
  },
  {
    id: 'investice',
    nazev: 'Investice & ETF portfolia',
    ikona: 'investice',
    kratce: 'Zhodnocení bezpečně a dlouhodobě.',
    popis:
      'Sestavuji nízkonákladová pasivní portfolia a pomáhám pochopit, do čeho přesně investujete.',
    body: [
      'ETF portfolia s nízkými náklady',
      'Analýza překryvů titulů ve stávajícím portfoliu',
      'Odhalení a eliminace skrytých poplatků',
      'Vysvětlení rozdílu mezi fyzickými a swapovými ETF',
    ],
    tlacitko: 'Chci analýzu portfolia',
  },
  {
    id: 'reality',
    nazev: 'Realitní služby',
    ikona: 'reality',
    kratce: 'Prodej, koupě i pronájem.',
    popis:
      'Zprostředkuji prodej, koupi či pronájem nemovitosti s důrazem na výsledek a propojím to s financováním.',
    body: [
      'Prodej nemovitosti od ocenění po předání',
      'Hledání a koupě nemovitosti',
      'Pronájem a výběr nájemníka',
      'Financování a hypotéka na jednom místě',
    ],
    tlacitko: 'Řešit nemovitost',
  },
  {
    id: 'sprava',
    nazev: 'Správa majetku',
    ikona: 'sprava',
    kratce: 'Majetek, který pracuje pro vás.',
    popis:
      'Postarám se o to, aby váš majetek dlouhodobě pracoval pro vás a měl jste o něm přehled.',
    body: [
      'Pravidelný přehled o celém majetku',
      'Rebalancování portfolia',
      'Nemovitosti jako součást investic',
      'Dlouhodobá péče a pravidelné revize',
    ],
    tlacitko: 'Domluvit konzultaci',
  },
]

// Témata ve formuláři = všechny služby + "Něco jiného"
export const temataFormulare = [
  ...sluzby.map((s) => ({ id: s.id, label: s.nazev.replace(' & ETF portfolia', '') })),
  { id: 'jine', label: 'Něco jiného' },
]
