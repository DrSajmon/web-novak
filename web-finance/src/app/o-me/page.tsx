import React from 'react';

export const metadata = {
  title: "O mně | Hynek Novák",
};

export default function OMnePage() {
  return (
    <main style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#111827', marginBottom: '20px' }}>O mně</h1>
      <p style={{ fontSize: '1.125rem', color: '#374151' }}>
        Jmenuji se Hynek Novák a působím jako nezávislý finanční specialista. Ve své praxi se zaměřuji na přinášení vědeckého a analytického přístupu do světa osobních financí. 
      </p>
      <p style={{ fontSize: '1.125rem', color: '#374151' }}>
        Nejsem prodejce produktů. Mým cílem je pomáhat klientům stavět robustní portfolia inspirovaná strategiemi, jako je Norský státní fond nebo Nobelova nadace, a efektivně chránit jejich vybudované bohatství.
      </p>
    </main>
  );
}