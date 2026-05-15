import { useState } from 'react';
import { FiAnchor, FiList, FiInfo, FiZap, FiAlertTriangle, FiSearch } from 'react-icons/fi';
import { HookCard } from '../components/referencia/HookCard/HookCard';
import { MethodCard } from '../components/referencia/MethodCard/MethodCard';
import { HOOKS, METHODS } from '../data/referencia';
import { Input } from '../components/ui/Input/Input';
import '../styles/components/teoria.css';

export default function Referencia() {
  const [search, setSearch] = useState('');

  const filteredHooks = HOOKS.filter(h => 
    h.name.toLowerCase().includes(search.toLowerCase()) || 
    h.desc.toLowerCase().includes(search.toLowerCase())
  );

  const filteredMethods = METHODS.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.desc.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">
          Referencia <span className="text-gradient">Técnica</span>
        </h1>
        <p className="page-description">
          Todos los hooks de React y los métodos de Array más importantes con ejemplos de código.
        </p>
      </header>

      {/* ── Buscador ── */}
      <div style={{ marginBottom: 'var(--space-xl)', maxWidth: '400px' }}>
        <div style={{ position: 'relative' }}>
          <FiSearch 
            style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} 
          />
          <Input 
            placeholder="Buscar hook o método..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* ── HOOKS ── */}
      <section className="section" aria-labelledby="hooks-ref">
        <h2 className="section-title" id="hooks-ref">
          <FiAnchor style={{ color: 'var(--accent-primary)' }} /> Hooks de React ({filteredHooks.length})
        </h2>

        <div className="callout callout--info" style={{ marginBottom: 'var(--space-lg)', alignItems: 'center' }}>
          <FiInfo size={20} style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
            Los Hooks son funciones especiales que empiezan con <code>use</code>. Solo pueden llamarse
            en el nivel superior de un componente funcional o de otro Hook personalizado.
          </p>
        </div>

        <div className="grid-2">
          {filteredHooks.length > 0 ? (
            filteredHooks.map(hook => (
              <HookCard key={hook.name} {...hook} />
            ))
          ) : (
            <p className="text-muted">No se encontraron hooks que coincidan con la búsqueda.</p>
          )}
        </div>

        <div className="callout callout--tip" style={{ marginTop: 'var(--space-xl)', alignItems: 'center' }}>
          <FiZap size={20} style={{ color: 'var(--accent-success)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
            <strong>Hooks personalizados (Custom Hooks):</strong> Puedes crear tus propios hooks
            extrayendo lógica reutilizable a funciones que empiecen con <code>use</code>.
          </p>
        </div>
      </section>

      {/* ── MÉTODOS DE ARRAY ── */}
      <section className="section" aria-labelledby="methods-ref">
        <h2 className="section-title" id="methods-ref">
          <FiList style={{ color: 'var(--accent-secondary)' }} /> Métodos de Array ({filteredMethods.length})
        </h2>

        <div className="callout callout--warning" style={{ marginBottom: 'var(--space-lg)', alignItems: 'center' }}>
          <FiAlertTriangle size={20} style={{ color: 'var(--accent-warning)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
            En React, <strong>nunca mutes el estado directamente</strong>. Los métodos marcados como
            <span className="badge badge--danger" style={{ margin: '0 4px' }}>Mutación</span>
            modifican el array original.
          </p>
        </div>

        <div className="grid-3">
          {filteredMethods.length > 0 ? (
            filteredMethods.map(method => (
              <MethodCard key={method.name} {...method} />
            ))
          ) : (
            <p className="text-muted">No se encontraron métodos que coincidan con la búsqueda.</p>
          )}
        </div>
      </section>
    </div>
  );
}
