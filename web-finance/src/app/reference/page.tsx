import React from 'react';
import Link from 'next/link';
export const metadata = { title: "Reference | Hynek Novák" };

export default function ReferencePage() {
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
          <Link href="/o-mne">O MNĚ</Link>
          <Link href="/reference" className="text-[#b8905b] border-b-2 border-[#b8905b] pb-1">REFERENCE</Link>
          <Link href="/kontakt">KONTAKT</Link>
        </div>
        
        <button className="hidden md:block bg-[#b8905b] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#a07c4c] transition-colors">
          Nezávazná konzultace
        </button>
      </nav>
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #d4af37' }}>
        <h1 style={{ fontSize: '2.25rem', color: '#0b192c', marginBottom: '30px', fontWeight: '700' }}>Výsledky mé práce</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ borderLeft: '4px solid #d4af37', paddingLeft: '20px' }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#334155', margin: '0 0 10px 0' }}>
              "Analýza překryvů v našem stávajícím ETF portfoliu od pana Nováka nám ušetřila desetitisíce korun ročně na poplatcích. Konečně přesně víme, co vlastníme."
            </p>
            <span style={{ fontWeight: 'bold', color: '#64748b', fontSize: '0.9rem' }}>— Ing. Radek S., investor</span>
          </div>
          <div style={{ borderLeft: '4px solid #0b192c', paddingLeft: '20px' }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#334155', margin: '0 0 10px 0' }}>
              "Díky komplexnímu finančnímu plánování jsme dokázali bezpečně alokovat volný milión korun tak, aby generoval stabilní výnos a byl krytý proti inflaci."
            </p>
            <span style={{ fontWeight: 'bold', color: '#64748b', fontSize: '0.9rem' }}>— MUDr. Lucie M., Brno</span>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}