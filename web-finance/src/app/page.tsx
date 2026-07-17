import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ maxWidth: '1000px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
      
      <h1 style={{ fontSize: '3.5rem', color: '#0b192c', marginBottom: '20px', letterSpacing: '-1px', lineHeight: '1.2', fontWeight: '800' }}>
        Profesionální správa majetku <br />
        <span style={{ color: '#d4af37' }}>založená na datech</span>
      </h1>
      
      <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
        Pomáhám úspěšným lidem chránit a zhodnocovat jejich kapitál. 
        Využívám principy světových fondů, nízkonákladová ETF a nezávislé finanční plánování bez provizních kompromisů.
      </p>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/sluzby" style={{ backgroundColor: '#0b192c', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold', border: '1px solid #d4af37' }}>
          Jaké služby nabízím
        </Link>
        <Link href="/kontakt" style={{ backgroundColor: '#fff', color: '#0b192c', border: '2px solid #0b192c', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
          Sjednat schůzku
        </Link>
      </div>

    </main>
  );
}