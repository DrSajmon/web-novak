import React from 'react';

export const metadata = {
  title: "Kontakt | Hynek Novák",
};

export default function KontaktPage() {
  return (
    <main style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#111827', marginBottom: '20px' }}>Kontaktujte mě</h1>
      <p style={{ fontSize: '1.125rem', color: '#4B5563', marginBottom: '40px' }}>
        Máte dotaz k investicím nebo chcete zrevidovat své stávající finanční nastavení? Ozvěte se.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', fontWeight: '500' }}>
        <div>
          <h3 style={{ color: '#9CA3AF', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '8px' }}>E-mail</h3>
          <p style={{ fontSize: '1.25rem', color: '#111827' }}>info@hyneknovak.cz</p>
        </div>
        <div>
          <h3 style={{ color: '#9CA3AF', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '8px' }}>Telefon</h3>
          <p style={{ fontSize: '1.25rem', color: '#111827' }}>+420 123 456 789</p>
        </div>
      </div>
    </main>
  );
}