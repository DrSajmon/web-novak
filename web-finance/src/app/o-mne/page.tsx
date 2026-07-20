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
    </div>
  );
}