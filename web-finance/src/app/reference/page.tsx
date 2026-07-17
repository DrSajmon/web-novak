import React from 'react';

export const metadata = { title: "Reference | Hynek Novák" };

export default function ReferencePage() {
  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '2.25rem', color: '#0f172a', marginBottom: '30px' }}>Výsledky mé práce</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ borderLeft: '4px solid #0284c7', paddingLeft: '20px' }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#334155', margin: '0 0 10px 0' }}>
              "Analýza překryvů v našem stávajícím ETF portfoliu od pana Nováka nám ušetřila desetitisíce korun ročně na poplatcích. Konečně přesně víme, co vlastníme."
            </p>
            <span style={{ fontWeight: 'bold', color: '#64748b', fontSize: '0.9rem' }}>— Ing. Radek S., investor</span>
          </div>
          <div style={{ borderLeft: '4px solid #0284c7', paddingLeft: '20px' }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#334155', margin: '0 0 10px 0' }}>
              "Díky komplexnímu finančnímu plánování jsme dokázali bezpečně alokovat volný milión korun tak, aby generoval stabilní výnos a byl krytý proti inflaci."
            </p>
            <span style={{ fontWeight: 'bold', color: '#64748b', fontSize: '0.9rem' }}>— MUDr. Lucie M., Brno</span>
          </div>
        </div>
      </div>
    </main>
  );
}