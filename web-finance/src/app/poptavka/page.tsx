'use client';

import React, { useState } from 'react';

export default function KontaktPage() {
  // Paměť pro data z formuláře
  const [formData, setFormData] = useState({
    jmeno: '',
    email: '',
    telefon: '',
    sluzba: 'Obecný dotaz',
    zprava: '',
  });

  // Stav pro zobrazení potvrzení o odeslání
  const [odeslano, setOdeslano] = useState(false);

  // Funkce, která ukládá to, co uživatel právě píše
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Funkce při kliknutí na "Odeslat poptávku"
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tady data z formuláře zpracujeme
    console.log('Formulář odeslán:', formData);
    
    // Zobrazíme děkovnou hlášku
    setOdeslano(true);
  };

  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', borderTop: '5px solid #f97316' }}>
        
        <h1 style={{ fontSize: '2.25rem', color: '#0b192c', marginBottom: '10px', fontWeight: '800', textTransform: 'uppercase' }}>
          Kontakt / Poptávka
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '30px' }}>
          Máte dotaz nebo chcete nezávazný rozpočet? Vyplňte formulář níže a ozveme se vám do 24 hodin.
        </p>

        {/* POKUD JE ODESLÁNO, ZOBRAZÍ SE DĚKOVNÁ HLÁŠKA */}
        {odeslano ? (
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', padding: '25px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3rem' }}>Děkujeme za vaši poptávku!</h3>
            <p style={{ margin: 0 }}>Formulář byl úspěšně odeslán. Co nejdříve se vám ozveme zpět.</p>
          </div>
        ) : (
          /* SAMOTNÝ FORMULÁŘ */
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* ŘÁDEK 1: Jméno a E-mail */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0b192c', fontSize: '0.9rem' }}>
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  name="jmeno"
                  required
                  value={formData.jmeno}
                  onChange={handleChange}
                  placeholder="Jan Novák"
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0b192c', fontSize: '0.9rem' }}>
                  E-mailová adresa *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jan@novak.cz"
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            {/* ŘÁDEK 2: Telefon a Výběr služby */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0b192c', fontSize: '0.9rem' }}>
                  Telefonní číslo
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  placeholder="+420 777 123 456"
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0b192c', fontSize: '0.9rem' }}>
                  Typ poptávky
                </label>
                <select
                  name="sluzba"
                  value={formData.sluzba}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', backgroundColor: '#fff', boxSizing: 'border-box' }}
                >
                  <option value="Obecný dotaz">Obecný dotaz</option>
                  <option value="Rodinné domy na klíč">Rodinné domy na klíč</option>
                  <option value="Hrubé stavby & Základy">Hrubé stavby & Základy</option>
                  <option value="Rekonstrukce & Zateplení">Rekonstrukce & Zateplení</option>
                </select>
              </div>
            </div>

            {/* ŘÁDEK 3: Textová zpráva */}
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#0b192c', fontSize: '0.9rem' }}>
                Vaše zpráva / Detail stavby *
              </label>
              <textarea
                name="zprava"
                required
                rows={5}
                value={formData.zprava}
                onChange={handleChange}
                placeholder="Popište stručně váš projekt, lokalitu nebo dotaz..."
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', fontFamily: 'inherit', boxSizing: 'border-box' }}
              />
            </div>

            {/* TLAČÍTKO ODESLAT */}
            <button
              type="submit"
              style={{
                backgroundColor: '#f97316',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                alignSelf: 'flex-start',
              }}
            >
              Odeslat poptávku
            </button>

          </form>
        )}

      </div>
    </main>
  );
}