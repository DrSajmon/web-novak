import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Hynek Novák | Osobní finance a investice",
  description: "Nezávislé finanční poradenství, správa nízkonákladových ETF portfolií a dlouhodobé plánování.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8fafc', color: '#334155', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* ZLATO-MODRÁ HLAVIČKA */}
        <header style={{ backgroundColor: '#0b192c', color: '#fff', position: 'sticky', top: 0, zIndex: 1000, borderBottom: '3px solid #d4af37', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', textDecoration: 'none', letterSpacing: '-0.5px' }}>
              Hynek Novák <span style={{ color: '#d4af37', fontSize: '0.875rem', fontWeight: 'normal' }}>| Finance</span>
            </Link>
            <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
              <Link href="/" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '500' }}>Domů</Link>
              <Link href="/sluzby" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '500' }}>Služby</Link>
              <Link href="/reference" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '500' }}>Reference</Link>
              <Link href="/o-mne" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: '500' }}>O mně</Link>
              <Link href="/kontakt" style={{ backgroundColor: '#d4af37', color: '#0b192c', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #fff' }}>Kontakt</Link>
            </nav>
          </div>
        </header>

        {/* VNITŘEK STRÁNEK */}
        <div style={{ flex: 1 }}>
          {children}
        </div>

        {/* PATIČKA */}
        <footer style={{ backgroundColor: '#0b192c', color: '#94a3b8', padding: '40px 20px', marginTop: '60px', borderTop: '1px solid #1e293b', fontSize: '0.875rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>Hynek Novák</strong>
                <p style={{ marginTop: '5px' }}>Nezávislý finanční specialista</p>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/sluzby" style={{ color: '#94a3b8', textDecoration: 'none' }}>Služby</Link>
                <Link href="/reference" style={{ color: '#94a3b8', textDecoration: 'none' }}>Reference</Link>
                <Link href="/kontakt" style={{ color: '#94a3b8', textDecoration: 'none' }}>Kontakt</Link>
              </div>
            </div>
            <hr style={{ border: 0, borderTop: '1px solid #1e293b', margin: '10px 0' }} />
            <p style={{ fontSize: '0.75rem', lineHeight: '1.6', color: '#64748b' }}>
              <strong>Právní informace:</strong> Obsah těchto stránek má pouze informativní charakter a nepředstavuje investiční doporučení ani nabídku k nákupu či prodeji finančních nástrojů. Minulá výnosnost není zárukou budoucích výsledků. Investování do ETF a jiných nástrojů s sebou nese riziko ztráty kapitálu.
            </p>
            <p style={{ textAlign: 'center', margin: 0, fontSize: '0.75rem' }}>&copy; {new Date().getFullYear()} Hynek Novák. Všechna práva vyhrazena.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}