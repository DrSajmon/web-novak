// =========================================================
// API: POST /api/poptavka – přijme data z formuláře a pošle je e-mailem
//
// Běží na serveru (Vercel), ne v prohlížeči – proto tu může být tajný klíč.
// E-mail se posílá přes službu Resend (resend.com, má bezplatný tarif).
//
// Potřebné proměnné prostředí (Vercel → Project → Settings → Environment Variables,
// pro lokální vývoj soubor .env.local ve složce web-finance):
//   RESEND_API_KEY  – API klíč z resend.com
//   CONTACT_EMAIL   – kam mají poptávky chodit (např. info@hyneknovak.cz)
//   CONTACT_FROM    – odesílatel; dokud nemáte v Resendu ověřenou doménu,
//                     nechte prázdné (použije se testovací onboarding@resend.dev)
// =========================================================

type Poptavka = {
  jmeno?: unknown
  email?: unknown
  telefon?: unknown
  forma?: unknown
  zprava?: unknown
  temata?: unknown
  souhlas?: unknown
  web?: unknown
}

// Převede cokoliv na oříznutý text s maximální délkou
const text = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as Poptavka | null
  if (!data) {
    return Response.json({ ok: false, error: 'Neplatná data' }, { status: 400 })
  }

  // Robot vyplnil skryté pole → tváříme se, že je vše v pořádku, ale nic neposíláme
  if (text(data.web)) {
    return Response.json({ ok: true })
  }

  const jmeno = text(data.jmeno, 100)
  const email = text(data.email, 200)
  const telefon = text(data.telefon, 40)
  const forma = text(data.forma, 40)
  const zprava = text(data.zprava, 5000)
  const temata = Array.isArray(data.temata) ? data.temata.map((t) => text(t, 60)).filter(Boolean) : []

  // Kontrola povinných polí
  if (!jmeno || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || data.souhlas !== true) {
    return Response.json({ ok: false, error: 'Chybí povinné údaje' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL
  const from = process.env.CONTACT_FROM || 'Web Hynek Novák <onboarding@resend.dev>'

  if (!apiKey || !to) {
    console.error('Formulář: chybí RESEND_API_KEY nebo CONTACT_EMAIL – e-mail nebyl odeslán.', { jmeno, email })
    return Response.json({ ok: false, error: 'Odesílání není nastavené' }, { status: 500 })
  }

  // Text e-mailu, který vám přijde
  const telo = [
    'Nová poptávka z webu',
    '',
    `Jméno: ${jmeno}`,
    `E-mail: ${email}`,
    `Telefon: ${telefon || '—'}`,
    `Forma schůzky: ${forma || '—'}`,
    `Témata: ${temata.length ? temata.join(', ') : '—'}`,
    '',
    'Zpráva:',
    zprava || '—',
  ].join('\n')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email, // "Odpovědět" v e-mailu půjde rovnou klientovi
      subject: `Nová poptávka z webu – ${jmeno}`,
      text: telo,
    }),
  })

  if (!res.ok) {
    console.error('Formulář: Resend vrátil chybu', res.status, await res.text())
    return Response.json({ ok: false, error: 'E-mail se nepodařilo odeslat' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
