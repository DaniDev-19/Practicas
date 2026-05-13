/**
 * LocalSearch.tsx
 * Buscador local que filtra un array estático usando useMemo.
 * El filtrado es eficiente: solo se recalcula cuando cambia el término o la lista.
 * Props: items (string[]), placeholder (string)
 */

import { useState, useMemo } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

interface LocalSearchProps {
  items: string[];
  placeholder?: string;
}

export default function LocalSearch({ items, placeholder = 'Buscar...' }: LocalSearchProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => items.filter(item => item.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ position: 'relative' }}>
        <FiSearch
          style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}
        />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '0.75rem 2.5rem 0.75rem 2.5rem',
            borderRadius: '8px',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-glass)',
            color: 'white',
            fontFamily: 'inherit',
            fontSize: '1rem',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex' }}
          >
            <FiX />
          </button>
        )}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: '220px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {filtered.length === 0 ? (
          <li style={{ padding: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
            Sin resultados para "<strong>{query}</strong>"
          </li>
        ) : (
          filtered.map((item, i) => (
            <li
              key={i}
              style={{ padding: '0.6rem 0.75rem', borderRadius: '6px', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.95rem', cursor: 'default' }}
            >
              {item}
            </li>
          ))
        )}
      </ul>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        {filtered.length} de {items.length} resultados
      </span>
    </div>
  );
}
