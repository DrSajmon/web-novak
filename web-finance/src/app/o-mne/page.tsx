import React from 'react';
import Link from 'next/link';
export const metadata = { title: "O mně | Hynek Novák" };

export default function OMnePage() {
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
          <Link href="/" >HOME</Link>
          <Link href="/sluzby">SLUŽBY</Link>
          <Link href="/o-mne" className="text-[#b8905b] border-b-2 border-[#b8905b] pb-1">O MNĚ</Link>
          <Link href="/reference">REFERENCE</Link>
          <Link href="/kontakt">KONTAKT</Link>
        </div>
        
        <button className="hidden md:block bg-[#b8905b] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#a07c4c] transition-colors">
          Nezávazná konzultace
        </button>
      </nav>
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #d4af37' }}>
        <h1 style={{ fontSize: '2.25rem', color: '#0b192c', marginBottom: '20px', fontWeight: '700' }}>Kdo jsem</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
          Jmenuji se <strong>Hynek Novák</strong> a v oblasti osobních financí se pohybuji jako nezávislý konzultant. Moje filozofie stojí na transparentnosti, nízkých nákladech a datech, nikoliv na pocitech nebo provizních pobídkách.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
          Při správě klientského majetku se inspiruji nejúspěšnějšími fondy na světě – například konzervativní a přesto vysoce efektivní strategií <em>Norského státního fondu</em> či alokací aktiv <em>Nobelovy nadace</em>. Věřím, že každý klient si zaslouží institucionální kvalitu péče.
        </p>
      </div>
    </main>
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
  );
}