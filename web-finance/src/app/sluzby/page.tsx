import React from 'react';

export const metadata = { title: "Služby | Hynek Novák" };

export default function SluzbyPage() {
  return (
    <main style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #d4af37' }}>
        <h1 style={{ fontSize: '2.25rem', color: '#0b192c', margin: '0 0 10px 0', fontWeight: '700' }}>Moje specializace</h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem', marginBottom: '40px' }}>Přináším vědecký a matematicky podložený přístup ke správě vašeho rodinného majetku.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', borderLeft: '4px solid #0b192c' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📈</div>
            <h3 style={{ fontSize: '1.25rem', color: '#0b192c', margin: '0 0 10px 0', fontWeight: '600' }}>Investice & ETF Portfolia</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#475569' }}>Sestavování nízkonákladových pasivních portfolií. Detailní analýzy překryvů titulů, eliminace skrytých poplatků a vysvětlení rozdílů mezi fyzickými a swapovými ETF.</p>
          </div>
          <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', borderLeft: '4px solid #d4af37' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>💎</div>
            <h3 style={{ fontSize: '1.25rem', color: '#0b192c', margin: '0 0 10px 0', fontWeight: '600' }}>Finanční plánování (Milionový plán)</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#475569' }}>Komplexní audit finančních toků. Modelování scénářů pro dosažení finanční nezávislosti a renty na základě modelů světových institucí (např. Nobelova nadace).</p>
          </div>
          <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', borderLeft: '4px solid #0b192c' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🛡️</div>
            <h3 style={{ fontSize: '1.25rem', color: '#0b192c', margin: '0 0 10px 0', fontWeight: '600' }}>Ochrana majetku & Pojištění</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#475569' }}>Zajištění stabilního příjmu a ochrana vybudovaných hodnot. Expertní poradenství v oblasti pojištění odpovědnosti, nemovitostí i specializovaného vybavení (např. drahých jízdních kol).</p>
          </div>
        </div>
      </div>
    </main>
  );
}