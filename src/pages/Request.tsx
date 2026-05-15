import { useState, useEffect } from 'react';
import { FiDownloadCloud } from 'react-icons/fi';

import ShowcaseCard from '../components/ui/ShowcaseCard';
import Spinner from '../components/ui/Spinner';
import Buscador from '../components/practicas/Buscador/Buscador';
import RequestComponent from '../components/practicas/Request/Request';
import { Button } from '../components/ui/Button/Button';
import { UserGrid } from '../components/request/UserGrid/UserGrid';

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
      if (!res.ok) throw new Error(`HTTP Error \${res.status}`);
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
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">Peticiones <span className="text-gradient">HTTP</span></h1>
        <p className="page-description">Consumo de APIs con fetch, manejo de estados asíncronos y paginación.</p>
      </header>

      <div className="flex-col gap-lg">

        {/* ── Fetch con loading & error ── */}
        <ShowcaseCard
          title="Fetch API — Estados de carga y error"
          badge="Async"
          description="El patrón clásico de fetch: 3 estados (loading, error, data)."
        >
          <div className="flex-col gap-md">
            <div className="flex-between">
              <span>Datos desde JSONPlaceholder</span>
              <Button
                onClick={fetchUsers}
                disabled={loading}
                variant="primary"
              >
                {loading ? <Spinner size="sm" color="white" /> : <FiDownloadCloud />}
                {loading ? 'Cargando...' : 'Recargar'}
              </Button>
            </div>

            {error && (
              <div className="callout callout--danger">
                {error}
              </div>
            )}

            <UserGrid users={users} loading={loading} />
          </div>
        </ShowcaseCard>

        {/* ── Componente Request (usuario) ── */}
        <ShowcaseCard
          title="Request.tsx — Paginación de API"
          badge="Práctica"
          description="Consume /todos de JSONPlaceholder (200 items)."
        >
          <RequestComponent />
        </ShowcaseCard>

        {/* ── Buscador (usuario) ── */}
        <ShowcaseCard
          title="Buscador.tsx — Filtrado con useMemo"
          badge="Práctica"
          description="Combina useEffect con useMemo para filtrar sin recrear el array en cada tecla."
        >
          <Buscador />
        </ShowcaseCard>

      </div>
    </div>
  );
}
