import Link from 'next/link';
export default function WebFinance() {
  return (
    <div className="min-h-screen bg-[#faf9f7] font-sans text-slate-800">
      
      {/* 1. NAVIGACE */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto bg-transparent relative z-10">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-light text-[#b8905b] tracking-widest border-r border-slate-300 pr-4">
            HN
          </div>
          <div>
            <div className="text-xl font-semibold tracking-wide text-slate-900">HYNEK NOVÁK</div>
            <div className="text-[10px] tracking-widest text-slate-500 uppercase">Finanční a realitní specialista</div>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wider text-slate-700">
          <Link href="/" className="text-[#b8905b] border-b-2 border-[#b8905b] pb-1">HOME</Link>
          <Link href="/sluzby">SLUŽBY</Link>
          <Link href="/o-mne">O MNĚ</Link>
          <Link href="/reference">REFERENCE</Link>
          <Link href="/kontakt">KONTAKT</Link>
        </div>
        
        <button className="hidden md:block bg-[#b8905b] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#a07c4c] transition-colors">
          Nezávazná konzultace
        </button>
      </nav>

      {/* 2. HERO SEKCE (Hlavička s fotkou) */}
      <header className="relative max-w-7xl mx-auto px-8 pt-12 pb-24 md:flex items-center">
        {/* Levá část s textem */}
        <div className="md:w-1/2 relative z-10">
          <p className="text-[#b8905b] font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Finance. Reality. Jedno rozhodnutí.
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 leading-[1.1] mb-6">
            Komplexní řešení <br /> pro váš majetek <br /> a budoucnost.
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-md">
            Pomáhám klientům efektivně spravovat finance, chránit hodnoty a bezpečně investovat do nemovitostí.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#b8905b] text-white px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-[#a07c4c] transition-colors flex items-center gap-2">
              Nezávazná konzultace <span>→</span>
            </button>
            <Link href="/sluzby" className="border border-slate-300 bg-white px-8 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider hover:bg-slate-50 transition-colors">
              Více o službách
            </Link>
          </div>
        </div>

        {/* Pravá část s fotkou a citátem */}
        <div className="md:w-1/2 relative mt-16 md:mt-0 flex justify-end">
          {/* Zde stačí do složky 'public' nahrát fotku s názvem 'portret.png' */}
          <div className="relative w-full max-w-lg h-[500px] bg-slate-200 object-cover object-bottom rounded-t-full shadow-inner flex items-end justify-center overflow-hidden">
             {/* Odkomentuj tento img tag, jakmile budeš mít fotku ve složce public */}
             <img src="/portret.jpg" alt="Hynek Novák" className="w-full h-full object-cover object-bottom" />
             {!false && <span className="text-slate-400 pb-10">Zde se zobrazí /portret.png</span>}
          </div>

          {/* Modrý box s citátem */}
          <div className="absolute -bottom-10 -right-4 md:-right-10 bg-[#132238] text-white p-10 max-w-xs shadow-2xl">
            <div className="text-[#b8905b] text-6xl font-serif leading-3 mb-4">“</div>
            <p className="font-serif text-xl leading-relaxed mb-6">
              Mým cílem je vaše finanční jistota a spokojený domov.
            </p>
            <div className="text-[#b8905b] font-serif text-2xl italic signature-font">
              Hynek Novák.
            </div>
          </div>
        </div>
      </header>

      {/* 3. SEKCE: CO PRO VÁS MOHU UDĚLAT (5 karet) */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-[#b8905b] font-bold text-xs tracking-widest uppercase mb-4">Co pro vás mohu udělat</p>
          <h2 className="text-4xl font-serif text-slate-900 mb-16">Finance a reality pod jednou střechou</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Karta 1 */}
            <div className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 text-[#b8905b] mb-6 border border-[#b8905b] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase mb-3 text-slate-900">Finanční plánování</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Nastavím s vámi strategii, která dává smysl vám i vaší rodině.</p>
            </div>
            {/* Karta 2 */}
            <div className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 text-[#b8905b] mb-6 flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase mb-3 text-slate-900">Pojištění</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Najdu pro vás optimální ochranu majetku, zdraví i příjmů.</p>
            </div>
            {/* Karta 3 */}
            <div className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 text-[#b8905b] mb-6 flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase mb-3 text-slate-900">Investice</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Pomáhám zhodnocovat peníze bezpečně, chytře a dlouhodobě.</p>
            </div>
            {/* Karta 4 */}
            <div className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 text-[#b8905b] mb-6 flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase mb-3 text-slate-900">Realitní služby</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Zprostředkuji prodej, koupi či pronájem s důrazem na výsledek.</p>
            </div>
            {/* Karta 5 */}
            <div className="p-6 flex flex-col items-center">
              <div className="w-12 h-12 text-[#b8905b] mb-6 flex items-center justify-center">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
              </div>
              <h3 className="text-sm font-bold tracking-wider uppercase mb-3 text-slate-900">Správa majetku</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Postarám se o váš majetek tak, aby pracoval pro vás.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEKCE: PROČ SPOLUPRACOVAT SE MNOU */}
      <section className="bg-[#132238] text-white py-20 border-t border-[#b8905b]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[#b8905b] font-bold text-sm tracking-widest uppercase mb-12 text-center">Proč spolupracovat se mnou?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="flex gap-4">
              <div className="text-[#b8905b] flex-shrink-0 mt-1">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2">Individuální přístup</h3>
                <p className="text-slate-400 text-sm">Každý klient je jedinečný. Řešení vždy přizpůsobuji vašim potřebám.</p>
              </div>
            </div>
            {/* Benefit 2 */}
            <div className="flex gap-4">
              <div className="text-[#b8905b] flex-shrink-0 mt-1">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2">Zkušenosti a odbornost</h3>
                <p className="text-slate-400 text-sm">Dlouholetá praxe ve financích, investicích a realitách.</p>
              </div>
            </div>
            {/* Benefit 3 */}
            <div className="flex gap-4">
              <div className="text-[#b8905b] flex-shrink-0 mt-1">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2">Důvěra a transparentnost</h3>
                <p className="text-slate-400 text-sm">Jednám férově, otevřeně a vždy ve vašem nejlepším zájmu.</p>
              </div>
            </div>
            {/* Benefit 4 */}
            <div className="flex gap-4">
              <div className="text-[#b8905b] flex-shrink-0 mt-1">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2">Komplexní servis</h3>
                <p className="text-slate-400 text-sm">Vše, co potřebujete, vyřešíte pohodlně na jednom místě.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}