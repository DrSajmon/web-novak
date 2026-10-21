# Průvodce kódem webu Hynek Novák

Tenhle soubor vysvětluje, co je kde a co to dělá, abyste mohl web upravovat sám
(nebo s Claude Code ve VS Code).

Web běží na **Next.js 16** (App Router) + **Tailwind CSS 4**, nasazený na **Vercelu**.
Každý `git push` do větve `main` na GitHubu = nová verze na webu.

---

## 1. Kde co je

```
web-finance/
├─ PRUVODCE.md                 ← tento soubor
├─ public/portret.jpg          ← fotka (stačí přepsat stejným názvem)
└─ src/
   ├─ data/                    ← ★ TEXTY A ÚDAJE – tady upravujete nejčastěji
   │  ├─ site.ts               jméno, e-mail, telefon, adresa, čísla (6 let, 300+), menu, právní info
   │  ├─ sluzby.ts             všech 5 služeb (název, ikona, popis, odrážky, text tlačítka)
   │  └─ reference.ts          reference klientů (zatím prázdné)
   │
   ├─ app/                     ← STRÁNKY (každá složka = jedna adresa)
   │  ├─ layout.tsx            společný obal: písma, menu nahoře, patička dole
   │  ├─ globals.css           barvy webu + animace
   │  ├─ page.tsx              /            Úvod (zkrácené verze sekcí)
   │  ├─ sluzby/page.tsx       /sluzby      Služby na střídačku vlevo/vpravo
   │  ├─ o-mne/page.tsx        /o-mne       O mně
   │  ├─ reference/page.tsx    /reference   Reference s filtrem
   │  ├─ kontakt/page.tsx      /kontakt     Kontakty + formulář
   │  ├─ poptavka/page.tsx     /poptavka    jen přesměruje na /kontakt (stará adresa)
   │  └─ api/poptavka/route.ts POST /api/poptavka – odešle formulář e-mailem
   │
   └─ components/              ← OPAKOVANĚ POUŽÍVANÉ KOUSKY
      ├─ Nav.tsx               horní menu + mobilní menu ☰
      ├─ Footer.tsx            patička
      ├─ Reveal.tsx            animace „vyjetí“ při posouvání
      ├─ Button.tsx            tlačítka (4 barevné varianty)
      ├─ SectionHeader.tsx     nadpis sekce (zlatý štítek + nadpis + text)
      ├─ CtaBanner.tsx         modrý pruh „Domluvme si konzultaci“
      ├─ Calculator.tsx        kalkulačka složeného úročení
      ├─ ContactForm.tsx       formulář poptávky
      ├─ ReferenceList.tsx     karty referencí + filtr
      └─ Icons.tsx             všechny ikony (SVG)
```

**Pravidlo:** text měníte v `src/data/…`, vzhled v `src/app/…` a `src/components/…`.

---

## 2. Nejčastější úpravy

| Chci… | Kde |
|---|---|
| doplnit telefon / adresu | `src/data/site.ts` → `telefon`, `adresa` (prázdné = nezobrazí se) |
| změnit „6 let“ / „300+“ | `src/data/site.ts` → `cisla` |
| doplnit právní info do patičky | `src/data/site.ts` → `pravniInfo` |
| přepsat text služby | `src/data/sluzby.ts` |
| přidat 6. službu | `src/data/sluzby.ts` → zkopírovat jeden blok `{ … }` a upravit; objeví se na úvodu, na Službách i ve formuláři |
| přidat referenci | `src/data/reference.ts` → podle příkladu v komentáři |
| změnit barvu | `src/app/globals.css` → blok `@theme` (např. `--color-gold-dark`) |
| přidat/přejmenovat položku menu | `src/data/site.ts` → `menu` |
| změnit kroky „Jak spolupráce probíhá“ | `src/app/sluzby/page.tsx` → pole `kroky` |
| doplnit váš příběh | `src/app/o-mne/page.tsx` → místo s komentářem `TODO` |
| změnit titulek pro Google | `metadata` nahoře v příslušném `page.tsx` (hlavní v `layout.tsx`) |

---

## 3. Jak fungují jednotlivé věci

### Barvy (Tailwind)
V `globals.css` je blok `@theme`. Každá proměnná `--color-NAZEV` vytvoří třídy
`bg-NAZEV`, `text-NAZEV`, `border-NAZEV`. Příklad: `--color-navy` → `bg-navy`.

| Barva | Hodnota | Kde se používá |
|---|---|---|
| `navy` | #132238 | tmavé sekce, nadpisy |
| `gold` | #b8905b | tlačítka na modrém, ozdoby |
| `gold-dark` | #8a6a3f | zlatý text a tlačítka na světlém pozadí (čitelnější než `gold`) |
| `gold-light` | #d4b483 | zlatý text na modrém |
| `cream` | #faf9f7 | pozadí stránky |
| `sand` | #f1ebe2 | béžové panely |

### Písma
`layout.tsx` načítá přes `next/font/google` **Inter** (text) a **Playfair Display** (nadpisy).
V kódu je použijete třídou `font-sans` / `font-serif`.

### Animace
Jsou dvě a obě jsou v `globals.css`:

1. **`fade-up`** – prvek vyjede po načtení stránky. Používá se v horních částech stránek.
   Zpoždění se nastavuje `style={{ animationDelay: '200ms' }}`, proto texty v úvodu vyjíždějí postupně.
2. **`<Reveal>`** (`components/Reveal.tsx`) – obsah vyjede, až k němu dojedete při posouvání.
   Obalíte cokoliv: `<Reveal delay={100}>…</Reveal>`. Uvnitř je `IntersectionObserver`, který přidá
   třídu `is-visible`, a CSS přechod se postará o zbytek.

Kdo má v systému zapnuté „omezit pohyb“, animace neuvidí (blok `prefers-reduced-motion`).
Karty se po najetí myší zvednou díky třídě `card-hover`.

### Responzivita (mobil)
Tailwind třídy s předponou platí od určité šířky: `sm:` ≥ 640 px, `md:` ≥ 768 px, `lg:` ≥ 1024 px.
Příklad ze Služeb: `flex-col md:flex-row` = na mobilu pod sebou, na počítači vedle sebe.
Menu se mění na ☰ pod 900 px (`min-[900px]:…` v `Nav.tsx`).

### Služby na střídačku
`sluzby/page.tsx` prochází pole služeb a u každé druhé (`i % 2 === 1`) přidá
`md:flex-row-reverse`, takže se ikona přesune doprava a panel zbéžoví.
Pořadí služeb = pořadí v `data/sluzby.ts`.

### Proklik z úvodu na konkrétní službu
Karty na úvodu vedou na `/sluzby#investice` apod. Hodnota za `#` je `id` služby
a na stránce Služby má každá sekce stejné `id`, takže se na ni stránka posune.

### Předvyplněné téma ve formuláři
Tlačítka u služeb vedou na `/kontakt?tema=investice#formular`. Stránka Kontakt
přečte `tema` z adresy (`searchParams`) a pošle ho formuláři jako `initialTopic`.

### Kalkulačka
`components/Calculator.tsx`. Tři jezdce ukládají hodnoty přes `useState`, výsledek je
budoucí hodnota pravidelné měsíční investice: `vklad × ((1 + r)^n − 1) / r`
(r = roční výnos / 12, n = počet měsíců). Rozsahy jezdců jsou v `min` / `max` / `step`.

### Formulář → e-mail
1. `ContactForm.tsx` po odeslání pošle data (JSON) na `/api/poptavka`.
2. `app/api/poptavka/route.ts` běží na serveru: zkontroluje povinná pole, odfiltruje roboty
   (skryté pole `web`) a přes službu **Resend** pošle e-mail. „Odpovědět“ v e-mailu jde rovnou klientovi.
3. Formulář podle odpovědi ukáže poděkování, nebo chybu s odkazem na váš e-mail.

**Dokud není nastavený Resend, formulář ukazuje chybu** (nic se neztratí potichu).

---

## 4. Zprovoznění odesílání e-mailů (jednou)

1. Zaregistrujte se na [resend.com](https://resend.com) (bezplatný tarif stačí).
2. V Resendu vytvořte **API Key**.
3. Na Vercelu: Project → **Settings → Environment Variables** a přidejte:
   - `RESEND_API_KEY` = klíč z Resendu
   - `CONTACT_EMAIL` = kam mají chodit poptávky (např. `info@hyneknovak.cz`)
4. Udělejte nový deploy (Vercel → Deployments → Redeploy, nebo jakýkoli push).

Bez ověřené domény posílá Resend z testovací adresy `onboarding@resend.dev` a e-maily
doručí jen na adresu, se kterou jste se v Resendu registroval. Pro ostrý provoz
v Resendu ověřte doménu (Domains → přidat DNS záznamy u vaší domény) a na Vercelu
přidejte `CONTACT_FROM` = `Hynek Novák <web@vase-domena.cz>`.

Pro testování u sebe vytvořte ve složce `web-finance` soubor `.env.local` se stejnými
proměnnými (soubor se na GitHub nenahrává).

---

## 5. Práce na počítači

```bash
cd web-finance
npm install        # jen poprvé nebo po změně balíčků
npm run dev        # spustí web na http://localhost:3000, změny se ukazují hned
npm run build      # ověří, že se web dá sestavit (to samé dělá Vercel)
npm run lint       # kontrola kódu
```

Nasazení: ve VS Code **Source Control** → napsat popis → **Commit** → **Sync/Push**.
Vercel web do pár minut sestaví a zveřejní. Když chcete změny nejdřív vidět bez zveřejnění,
pushněte je do jiné větve (např. `redesign`) – Vercel k ní vytvoří náhledovou adresu.

---

## 6. Co ještě doplnit (TODO)

- [ ] telefon a adresa kanceláře – `src/data/site.ts`
- [ ] právní informace do patičky (postavení zprostředkovatele, IČO, ČNB) – `src/data/site.ts`
- [ ] váš příběh na stránku O mně – `src/app/o-mne/page.tsx`
- [ ] skutečné reference se souhlasem klientů – `src/data/reference.ts`
- [ ] nastavit Resend (kapitola 4)
- [ ] stránka „Ochrana osobních údajů“ (GDPR) – formulář sbírá osobní údaje
