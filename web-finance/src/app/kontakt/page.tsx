import React from 'react';

export const metadata = { title: "Kontakt | Hynek Novák" };

export default function KontaktPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '2.25rem', color: '#0f172a', marginBottom: '15px' }}>Napište mi nebo zavolejte</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px' }}>Rád s vámi proberu vaše finanční cíle u dobré kávy nebo na online schůzce.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>E-mailová adresa</div>
            <a href="mailto:info@hyneknovak.cz" style={{ fontSize: '1.25rem', color: '#0284c7', textDecoration: 'none', fontWeight: '500' }}>info@hyneknovak.cz</a>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '5px' }}>Telefonní kontakt</div>
            <a href="tel:+420123456789" style={{ fontSize: '1.25rem', color: '#0f172a', textDecoration: 'none', fontWeight: '500' }}>+420 123 456 789</a>
          </div>
        </div>
      </div>
    </main>
  );
}