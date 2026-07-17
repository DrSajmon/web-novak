import React from 'react';

export const metadata = { title: "Kontakt | Hynek Novák" };

export default function KontaktPage() {
  return (
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
  );
}