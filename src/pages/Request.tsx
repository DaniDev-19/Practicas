/**
 * Request.tsx
 * Galería de prácticas de consumo de APIs y peticiones HTTP.
 * Incluye: Fetch con loading/error, componente propio con paginación
 * y buscador de usuarios (Buscador.tsx) con useMemo y API externa.
 */

import { useState, useEffect } from 'react';
import { FiDownloadCloud, FiUser, FiMail, FiPhone } from 'react-icons/fi';

import ShowcaseCard from '../components/ui/ShowcaseCard';
import Spinner from '../components/ui/Spinner';
import Buscador from '../components/Buscador';
import RequestComponent from '../components/Request';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default function Request() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
      const data = await res.json();
      setUsers(data.slice(0, 6));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Peticiones <span className="text-gradient">HTTP</span></h1>
        <p className="page-description">Consumo de APIs con fetch, manejo de estados asíncronos y paginación.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* ── Fetch con loading & error ── */}
        <ShowcaseCard
          title="Fetch API — Estados de carga y error"
          badge="useEffect"
          badgeColor="#a855f7"
          description="El patrón clásico de fetch: 3 estados (loading, error, data). Al llamar fetchUsers se resetea el error y activa loading. El try/catch captura fallos de red. El finally garantiza que loading siempre se desactiva. Los skeletons son divs animados con @keyframes pulse."
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
            <button
              onClick={fetchUsers}
              disabled={loading}
              className="btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? <Spinner size="sm" color="white" /> : <FiDownloadCloud />}
              {loading ? 'Cargando...' : 'Recargar'}
            </button>
          </div>

          {error && (
            <div style={{ padding: '1rem', background: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444', color: '#f87171', borderRadius: '8px', marginBottom: '1rem' }}>
              {error}
            </div>
          )}

          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {[1, 2, 3, 4, 5, 6].map(k => (
                <div key={k} style={{ height: '140px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--border-glass)', animation: 'pulse 1.5s infinite ease-in-out' }} />
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {users.map(user => (
                <div key={user.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', background: 'var(--accent-gradient)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', flexShrink: 0 }}>
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600 }}>{user.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)' }}>@{user.website}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FiMail size={13} /> {user.email}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FiPhone size={13} /> {user.phone}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FiUser size={13} /> ID: {user.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ShowcaseCard>

        {/* ── Componente Request del usuario (paginación) ── */}
        <ShowcaseCard
          title="Request.tsx — Paginación de API"
          badge="Tu código"
          badgeColor="#10b981"
          description="Consume /todos de JSONPlaceholder (200 items). La paginación se calcula con slice(): primero = (página-1)×itemsPorPág, último = página×itemsPorPág. El total de páginas se obtiene con Math.ceil(total/porPagina). Los botones Anterior/Siguiente se deshabilitan en los extremos."
        >
          <RequestComponent />
        </ShowcaseCard>

        {/* ── Buscador del usuario ── */}
        <ShowcaseCard
          title="Buscador.tsx — Filtrado con useMemo + API"
          badge="Tu código"
          badgeColor="#10b981"
          description="Combina useEffect (para obtener datos de la API) con useMemo (para filtrar sin recrear el array en cada tecla). El array usuarios se obtiene una sola vez al montarse. usuariosFiltrados se recalcula solo cuando cambia busqueda o usuarios, evitando renders costosos."
        >
          <Buscador />
        </ShowcaseCard>

      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
}
