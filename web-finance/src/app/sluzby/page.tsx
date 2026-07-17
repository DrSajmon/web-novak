import React from 'react';

export const metadata = {
  title: "Služby | Hynek Novák",
  description: "Finanční plánování, správa ETF portfolií a pojištění na míru.",
};

export default function SluzbyPage() {
  return (
    <main style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#111827', marginBottom: '30px' }}>Moje Služby</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div style={{ padding: '24px', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#1E3A8A', marginBottom: '10px' }}>Investice & ETF</h3>
          <p style={{ color: '#4B5563', lineHeight: '1.6' }}>Nízkonákladová pasivní portfolia, analýzy překryvů a optimalizace poplatků.</p>
        </div>
        <div style={{ padding: '24px', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#1E3A8A', marginBottom: '10px' }}>Finanční plánování</h3>
          <p style={{ color: '#4B5563', lineHeight: '1.6' }}>Sestavení dlouhodobé strategie pro ochranu majetku a rentu.</p>
        </div>
        <div style={{ padding: '24px', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#1E3A8A', marginBottom: '10px' }}>Ochrana majetku & Pojištění</h3>
          <p style={{ color: '#4B5563', lineHeight: '1.6' }}>Zajištění příjmů, pojištění odpovědnosti, majetku i specifického vybavení (např. jízdních kol).</p>
        </div>
      </div>
    </main>
  );
}