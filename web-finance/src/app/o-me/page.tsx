import React from 'react';

export const metadata = { title: "O mně | Hynek Novák" };

export default function OMnePage() {
  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '4px solid #d4af37' }}>
        <h1 style={{ fontSize: '2.25rem', color: '#0b192c', marginBottom: '20px', fontWeight: '700' }}>Kdo jsem</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
          Jmenuji se <strong>Hynek Novák</strong> a v oblasti osobních financí se pohybuji jako nezávislý konzultant. Moje filozofie stojí na transparentnosti, nízkých nákladech a datech, nikoliv na pocitech nebo provizních pobídkách.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
          Při správě klientského majetku se inspiruji nejúspěšnějšími fondy na světě – například konzervativní a přesto vysoce efektivní strategií <em>Norského státního fondu</em> či alokací aktiv <em>Nobelovy nadace</em>. Věřím, že každý klient si zaslouží institucionální kvalitu péče.
        </p>
      </div>
    </main>
  );
}