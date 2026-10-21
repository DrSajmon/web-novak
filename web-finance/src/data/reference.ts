// =========================================================
// REFERENCE KLIENTŮ
// Zveřejňujte jen skutečné reference se souhlasem klienta.
// Dokud je pole prázdné:
//   - na úvodní stránce se sekce Reference nezobrazí,
//   - stránka /reference ukáže krátkou zprávu a tlačítko na kontakt.
//
// tema = id služby z data/sluzby.ts (plan, pojisteni, investice, reality, sprava)
//        – podle něj funguje filtr na stránce Reference.
//
// Příklad jedné reference (zkopírujte, odkomentujte a přepište):
// {
//   text: 'Díky analýze portfolia jsme konečně pochopili, co vlastníme…',
//   autor: 'Jan N., Praha',
//   tema: 'investice',
// },
// =========================================================

export type Reference = {
  text: string
  autor: string
  tema: string
}

export const reference: Reference[] = [
  // sem doplňte reference
]
