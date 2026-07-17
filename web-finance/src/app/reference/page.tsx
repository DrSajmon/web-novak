import React from 'react';

export const metadata = {
  title: "Reference | Hynek Novák",
};

export default function ReferencePage() {
  return (
    <main style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#111827', marginBottom: '30px' }}>Případové studie a reference</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <blockquote style={{ borderLeft: '4px solid #2563EB', paddingLeft: '20px', margin: 0 }}>
          <p style={{ fontSize: '1.125rem', fontStyle: 'italic', color: '#374151' }}>
            "Pan Novák nám pomohl efektivně zainvestovat dědictví. Analýza ETF portfolia nám otevřela oči ohledně skrytých poplatků."
          </p>
          <cite style={{ display: 'block', marginTop: '8px', fontWeight: 'bold', color: '#4B5563' }}>— Manželé Starých, Praha</cite>
        </blockquote>
        <blockquote style={{ borderLeft: '4px solid #2563EB', paddingLeft: '20px', margin: 0 }}>
          <p style={{ fontSize: '1.125rem', fontStyle: 'italic', color: '#374151' }}>
            "Komplexní finanční plán na milion korun nám dal jasný přehled o tom, kdy budeme moci doplatit hypotéku."
          </p>
          <cite style={{ display: 'block', marginTop: '8px', fontWeight: 'bold', color: '#4B5563' }}>— Tomáš L., podnikatel</cite>
        </blockquote>
      </div>
    </main>
  );
}