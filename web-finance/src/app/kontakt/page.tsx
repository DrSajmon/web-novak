import React from 'react';
import Link from 'next/link';
export const metadata = { title: "Kontakt | Hynek Novák" };

export default function KontaktPage() {
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
          <Link href="/reference">REFERENCE</Link>
          <Link href="/kontakt" className="text-[#b8905b] border-b-2 border-[#b8905b] pb-1">KONTAKT</Link>
        </div>
        
        <button className="hidden md:block bg-[#b8905b] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#a07c4c] transition-colors">
          Nezávazná konzultace
        </button>
      </nav>
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #d4af37' }}>
        <h1 style={{ fontSize: '2.25rem', color: '#0b192c', marginBottom: '15px', fontWeight: '700' }}>Napište mi nebo zavolejte</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px' }}>Rád s vámi proberu vaše finanční cíle u dobré kávy nebo na online schůzce.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>E-mailová adresa</div>
            <a href="mailto:info@hyneknovak.cz" style={{ fontSize: '1.25rem', color: '#d4af37', textDecoration: 'none', fontWeight: 'bold' }}>info@hyneknovak.cz</a>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Telefonní kontakt</div>
            <a href="tel:+420123456789" style={{ fontSize: '1.25rem', color: '#0b192c', textDecoration: 'none', fontWeight: 'bold' }}>+420 123 456 789</a>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}