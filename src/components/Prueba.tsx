import { useState, useEffect } from "react";

interface ListItem {
  id: number;
  name: string;
  email: string;
}

interface PruebaProps {
  title?: string;
  paragraf?: string;
}

const INITIAL_LIST: ListItem[] = [
  { id: 1, name: 'Pepe',      email: 'pepe@gmail.com' },
  { id: 2, name: 'Daniel',    email: 'daniel@gmail.com' },
  { id: 3, name: 'Danel',     email: 'danel@gmail.com' },
  { id: 4, name: 'Jenniffer', email: 'jenniffer@gmail.com' },
  { id: 5, name: 'Carlos',    email: 'carlos@gmail.com' },
  { id: 6, name: 'Yuli',      email: 'yuli@gmail.com' },
];

function Prueba({ title = '', paragraf = '' }: PruebaProps) {
  const [prueba, setPrueba] = useState(1);
  const [list] = useState<ListItem[]>(INITIAL_LIST);
  const [notified, setNotified] = useState(false);

  // El usuario filtrado que queremos mostrar (id === 2)
  const filterList = list.filter(l => l.id === 2);

  useEffect(() => {
    if (prueba >= 10 && !notified) {
      setNotified(true);
    } else if (prueba < 1) {
      alert('No puedes tener números negativos');
    }
  }, [prueba, notified]);

  const progress = Math.min((prueba / 10) * 100, 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* ── Contador con progreso ── */}
      <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Clicks</span>
          <span style={{ fontSize: '2.5rem', fontWeight: 700, color: prueba >= 10 ? '#10b981' : 'var(--accent-primary)', fontFamily: 'monospace', transition: 'color 0.3s' }}>
            {prueba} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/ 10</span>
          </span>
        </div>

        {/* Barra de progreso */}
        <div style={{ height: '8px', background: 'var(--border-glass)', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, borderRadius: '99px', background: prueba >= 10 ? '#10b981' : 'var(--accent-gradient)', transition: 'width 0.3s ease' }} />
        </div>

        {/* Botón */}
        {prueba >= 10 ? (
          <div style={{ textAlign: 'center', padding: '0.75rem', background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', borderRadius: '8px', color: '#34d399', fontWeight: 600 }}>
            ¡Enhorabuena! Completaste los 10 clicks
          </div>
        ) : (
          <button
            onClick={() => setPrueba(p => p + 1)}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Click ({10 - prueba} restantes)
          </button>
        )}
      </div>

      {/* ── Usuario filtrado ── */}
      <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1.25rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
          Usuario filtrado · <code style={{ color: 'var(--accent-primary)' }}>id === 2</code>
        </p>
        {filterList.map(l => (
          <div key={l.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', fontSize: '1.1rem', flexShrink: 0 }}>
              {l.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>{l.name}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{l.email}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Props: title + paragraf ── */}
      {(title || paragraf) && (
        <div style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '1.25rem' }}>
          {title && <h3 style={{ margin: 0, marginBottom: '0.4rem', color: 'var(--accent-primary)' }}>{title}</h3>}
          {paragraf && <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{paragraf}</p>}
        </div>
      )}

    </div>
  );
}

export default Prueba;