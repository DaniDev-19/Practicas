import { useState } from 'react';
import { FiShoppingCart, FiHeart, FiShare2, FiTrash2, FiEdit, FiSave } from 'react-icons/fi';

// Componentes UI
import ShowcaseCard from '../components/ui/ShowcaseCard';
import Spinner from '../components/ui/Spinner';
import Alert from '../components/ui/Alert';
import Tooltip from '../components/ui/Tooltip';
import LocalSearch from '../components/ui/LocalSearch';
import Select from '../components/ui/Select';
import { Button } from '../components/ui/Button/Button';
import { Input } from '../components/ui/Input/Input';
import { Card } from '../components/ui/Card/Card';

const TECNOLOGIAS = [
  'React', 'TypeScript', 'Vite', 'CSS Modules', 
  'Glassmorphism', 'Flexbox', 'Grid CSS', 'useMemo', 
  'useState', 'useEffect', 'React Router', 'Fetch API'
];

export default function Componentes() {
  const [selectVal, setSelectVal] = useState('');
  const [showAlerts, setShowAlerts] = useState(true);

  return (
    <div className="page-container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">Componentes <span className="text-gradient">UI</span></h1>
        <p className="page-description">Galería de componentes reutilizables — propios y de la librería /ui del proyecto.</p>
      </header>

      {/* ── SECCIÓN 1: BOTONES ── */}
      <section className="section">
        <h2 className="section-title">Botones</h2>
        <ShowcaseCard
          title="Variantes de Botón"
          badge="UI"
          description="Los botones usan el componente Button.tsx que abstrae los estilos y variantes definidos en su CSS Module. Soporta variantes: primary, secondary, danger, success y ghost."
        >
          <div className="flex gap-md flex-wrap">
            <Button variant="primary">Principal</Button>
            <Button variant="secondary">Secundario</Button>
            <Button variant="danger">Peligro</Button>
            <Button variant="success">
              <FiShoppingCart /> Comprar
            </Button>

            {/* Botones con Tooltip */}
            <Tooltip text="Editar elemento" position="top">
              <Button variant="primary" style={{ padding: '0.75rem' }}>
                <FiEdit />
              </Button>
            </Tooltip>
            <Tooltip text="Guardar cambios" position="top">
              <Button variant="success" style={{ padding: '0.75rem' }}>
                <FiSave />
              </Button>
            </Tooltip>
            <Tooltip text="¡Cuidado! Elimina permanentemente" position="top">
              <Button variant="danger" style={{ padding: '0.75rem' }}>
                <FiTrash2 />
              </Button>
            </Tooltip>
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 2: TOOLTIP ── */}
      <section className="section">
        <h2 className="section-title">Tooltip</h2>
        <ShowcaseCard
          title="Tooltip.tsx"
          badge="UI"
          description="Componente wrapper que envuelve cualquier elemento con position: relative. Al hacer hover se muestra un globo flotante usando position: absolute y opacity transition."
        >
          <div className="flex gap-xl flex-wrap">
            <Tooltip text="Aparece arriba 👆" position="top">
              <Button variant="primary">Hover Arriba</Button>
            </Tooltip>
            <Tooltip text="Aparece abajo 👇" position="bottom">
              <Button variant="success">Hover Abajo</Button>
            </Tooltip>
            <Tooltip text="Aparece a la izquierda 👈" position="left">
              <Button style={{ background: 'var(--accent-warning)' }}>Hover Izquierda</Button>
            </Tooltip>
            <Tooltip text="Aparece a la derecha 👉" position="right">
              <Button style={{ background: '#ec4899' }}>Hover Derecha</Button>
            </Tooltip>
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 3: SPINNER ── */}
      <section className="section">
        <h2 className="section-title">Spinner</h2>
        <ShowcaseCard
          title="Spinner.tsx"
          badge="UI"
          description="Indicador de carga creado con CSS puro. Acepta props de tamaño (sm, md, lg) y color (accent, success, danger, white)."
        >
          <div className="flex gap-xl flex-wrap">
            <div className="flex-col flex-center gap-sm">
              <Spinner size="sm" color="accent" />
              <span className="text-muted" style={{ fontSize: '0.8rem' }}>sm / accent</span>
            </div>
            <div className="flex-col flex-center gap-sm">
              <Spinner size="md" color="success" />
              <span className="text-muted" style={{ fontSize: '0.8rem' }}>md / success</span>
            </div>
            <div className="flex-col flex-center gap-sm">
              <Spinner size="lg" color="danger" />
              <span className="text-muted" style={{ fontSize: '0.8rem' }}>lg / danger</span>
            </div>
            <div className="flex-col flex-center gap-sm" style={{ padding: '1rem', background: 'var(--accent-primary)', borderRadius: '8px' }}>
              <Spinner size="md" color="white" />
              <span style={{ fontSize: '0.8rem', color: 'white' }}>md / white</span>
            </div>
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 4: ALERTAS ── */}
      <section className="section">
        <h2 className="section-title">Alertas</h2>
        <ShowcaseCard
          title="Alert.tsx"
          badge="UI"
          description="Componente de alerta con 4 variantes semánticas (success, error, warning, info)."
        >
          {showAlerts ? (
            <div className="flex-col gap-sm">
              <Alert type="success" title="¡Éxito!" message="El componente se creó correctamente." />
              <Alert type="error" title="Error" message="No se pudo conectar con el servidor." />
              <Alert type="warning" title="Aviso" message="Tu sesión expirará en 5 minutos." />
              <Alert type="info" title="Info" message="Hay una nueva versión disponible." closeable={false} />
              <Button variant="ghost" onClick={() => setShowAlerts(false)} style={{ marginTop: '0.5rem' }}>
                Ocultar todas
              </Button>
            </div>
          ) : (
            <div className="text-center" style={{ padding: '1.5rem' }}>
              <p className="text-secondary" style={{ marginBottom: '1rem' }}>Las alertas fueron cerradas.</p>
              <Button variant="primary" onClick={() => setShowAlerts(true)}>Restaurar alertas</Button>
            </div>
          )}
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 5: SELECT ── */}
      <section className="section">
        <h2 className="section-title">Select</h2>
        <ShowcaseCard
          title="Select.tsx"
          badge="UI"
          description="Select personalizado basado en el elemento <select> nativo de HTML pero con estilos totalmente adaptados."
        >
          <div style={{ maxWidth: '360px' }} className="flex-col gap-md">
            <Select
              id="select-framework"
              label="Framework favorito"
              value={selectVal}
              onChange={setSelectVal}
              options={[
                { value: 'react', label: 'React' },
                { value: 'vue', label: 'Vue.js' },
                { value: 'angular', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'solid', label: 'SolidJS' },
              ]}
            />
            {selectVal && (
              <p className="text-success" style={{ fontWeight: 500 }}>
                Seleccionaste: <strong>{selectVal}</strong>
              </p>
            )}
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 6: BUSCADOR LOCAL ── */}
      <section className="section">
        <h2 className="section-title">Buscador Local</h2>
        <ShowcaseCard
          title="LocalSearch.tsx"
          badge="useMemo"
          description="Filtra un array de strings localmente usando useMemo para optimizar el rendimiento."
        >
          <LocalSearch items={TECNOLOGIAS} placeholder="Busca una tecnología..." />
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 7: CARDS ── */}
      <section className="section">
        <h2 className="section-title">Tarjetas (Card.tsx)</h2>
        <ShowcaseCard
          title="Card.tsx — Componente UI"
          badge="Props"
          description="Componente de tarjeta creado con props desestructuradas. Usa CSS Modules para encapsular sus estilos."
        >
          <div className="grid-2">
            <Card
              title="Laptop Pro 15"
              imageUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
              costo="$1,299.99"
              des="Potente laptop para desarrollo con pantalla Retina y chip M3."
            />
            <Card
              title="Sillón Minimalista"
              imageUrl="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80"
              costo="$299.99"
              des="Diseño elegante y cómodo perfecto para tu sala de estar moderna."
            />
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 8: INPUTS ── */}
      <section className="section">
        <h2 className="section-title">Inputs & Formularios</h2>
        <ShowcaseCard
          title="Input.tsx — Componente UI"
          badge="Form"
          description="Inputs estilizados con etiquetas integradas y estados de focus automáticos."
        >
          <div className="flex-col gap-md" style={{ maxWidth: '400px' }}>
            <Input label="Correo Electrónico" type="email" placeholder="ejemplo@correo.com" />
            <Input label="Contraseña" type="password" placeholder="••••••••" />
            <Input label="Nombre Completo" type="text" placeholder="Dani Dev" />
            <Button variant="primary" style={{ marginTop: '0.5rem' }}>Iniciar Sesión</Button>
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 9: GLASSMORPHISM ── */}
      <section className="section">
        <h2 className="section-title">Glassmorphism</h2>
        <ShowcaseCard
          title="Efecto de vidrio esmerilado"
          badge="CSS"
          description="Efecto logrado con backdrop-filter: blur() y fondos semitransparentes."
        >
          <div className="grid-3">
            {['Panel A', 'Panel B', 'Panel C'].map((t, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{t}</div>
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>Efecto traslúcido</span>
              </div>
            ))}
          </div>
        </ShowcaseCard>
      </section>

      {/* Íconos react-icons */}
      <section className="section">
        <h2 className="section-title">Íconos (react-icons/fi)</h2>
        <ShowcaseCard
          title="Feather Icons"
          badge="Library"
          description="react-icons es una librería que agrupa múltiples packs de íconos como componentes React."
        >
          <div className="flex gap-lg flex-wrap flex-center">
            {[
              { Icon: FiHeart, name: 'FiHeart' },
              { Icon: FiShare2, name: 'FiShare2' },
              { Icon: FiTrash2, name: 'FiTrash2' },
              { Icon: FiEdit, name: 'FiEdit' },
              { Icon: FiSave, name: 'FiSave' },
              { Icon: FiShoppingCart, name: 'FiShoppingCart' },
            ].map(({ Icon, name }, i) => (
              <Tooltip key={i} text={name} position="top">
                <span className={name} style={{ fontSize: '2rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                  <Icon />
                </span>
              </Tooltip>
            ))}
          </div>
        </ShowcaseCard>
      </section>
    </div>
  );
}
