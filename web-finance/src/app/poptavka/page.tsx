// =========================================================
// STARÁ ADRESA /poptavka
// Formulář je teď na stránce Kontakt. Kdo přijde na starý odkaz
// (např. z Googlu nebo ze záložky), automaticky se přesměruje.
// =========================================================

import { permanentRedirect } from 'next/navigation'

export default function PoptavkaPage() {
  permanentRedirect('/kontakt#formular')
}
