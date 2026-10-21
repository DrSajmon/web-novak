// =========================================================
// ZÁKLADNÍ ÚDAJE WEBU – vše na jednom místě
// Co změníte tady, změní se v menu, patičce i na stránkách.
// Prázdný text ('') = údaj se na webu vůbec nezobrazí.
// =========================================================

export const site = {
  jmeno: 'Hynek Novák',
  podtitul: 'Finanční a realitní specialista',
  pozice: 'Regionální ředitel Broker Consulting',

  email: 'info@hyneknovak.cz',
  telefon: '', // TODO: doplnit, např. '+420 777 123 456'
  adresa: '', // TODO: doplnit adresu kanceláře

  // Čísla v úvodu stránky a na stránce O mně / Reference
  cisla: [
    { hodnota: '6 let', popis: 'praxe ve financích' },
    { hodnota: '300+', popis: 'spokojených klientů' },
  ],

  // Povinné informace o zprostředkovateli do patičky
  // TODO: doplnit podle podkladů Broker Consulting (postavení, IČO, registrace u ČNB)
  pravniInfo: '',
}

// Položky hlavního menu (pořadí = pořadí v menu)
export const menu = [
  { href: '/', label: 'Úvod' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/o-mne', label: 'O mně' },
  { href: '/reference', label: 'Reference' },
  { href: '/kontakt', label: 'Kontakt' },
]

// Telefon ve tvaru pro odkaz tel: (bez mezer)
export const telefonOdkaz = 'tel:' + site.telefon.replace(/\s/g, '')
