import { useState } from 'react';
import { FiShoppingCart, FiHeart, FiShare2, FiTrash2, FiEdit, FiSave } from 'react-icons/fi';

// Componentes del usuario
import CustomCard from '../components/Card';

// Librería /ui propia
import ShowcaseCard from '../components/ui/ShowcaseCard';
import Spinner from '../components/ui/Spinner';
import Alert from '../components/ui/Alert';
import Tooltip from '../components/ui/Tooltip';
import LocalSearch from '../components/ui/LocalSearch';
import Select from '../components/ui/Select';

const TECNOLOGIAS = ['React', 'TypeScript', 'Vite', 'CSS Modules', 'Glassmorphism', 'Flexbox', 'Grid CSS', 'useMemo', 'useState', 'useEffect', 'React Router', 'Fetch API'];

export default function Componentes() {
  const [selectVal, setSelectVal] = useState('');
  const [showAlerts, setShowAlerts] = useState(true);

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Componentes <span className="text-gradient">UI</span></h1>
        <p className="page-description">Galería de componentes reutilizables — propios y de la librería /ui del proyecto.</p>
      </header>

      {/* ── SECCIÓN 1: BOTONES ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Botones</h2>
        <ShowcaseCard
          title="Variantes de Botón"
          badge="UI"
          description="Los botones usan la clase .btn-primary definida en index.css. Cada variante sobreescribe el background y box-shadow con estilos inline para máxima flexibilidad sin crear nuevas clases."
        >
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button className="btn-primary">Principal</button>
            <button className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>
              Secundario
            </button>
            <button className="btn-primary" style={{ background: '#ef4444', boxShadow: '0 0 20px rgba(239,68,68,0.2)' }}>
              Peligro
            </button>
            <button className="btn-primary" style={{ background: '#10b981', boxShadow: '0 0 20px rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FiShoppingCart /> Comprar
            </button>

            {/* Botones con Tooltip */}
            <Tooltip text="Editar elemento" position="top">
              <button className="btn-primary" style={{ background: '#6366f1', padding: '0.75rem' }}><FiEdit /></button>
            </Tooltip>
            <Tooltip text="Guardar cambios" position="top">
              <button className="btn-primary" style={{ background: '#10b981', padding: '0.75rem' }}><FiSave /></button>
            </Tooltip>
            <Tooltip text="¡Cuidado! Elimina permanentemente" position="top">
              <button className="btn-primary" style={{ background: '#ef4444', padding: '0.75rem' }}><FiTrash2 /></button>
            </Tooltip>
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 2: TOOLTIP ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Tooltip</h2>
        <ShowcaseCard
          title="Tooltip.tsx"
          badge="UI"
          description="Componente wrapper que envuelve cualquier elemento con position: relative. Al hacer hover se muestra un globo flotante usando position: absolute y opacity transition. No depende de ninguna librería externa."
        >
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Tooltip text="Aparece arriba 👆" position="top">
              <button className="btn-primary">Hover Arriba</button>
            </Tooltip>
            <Tooltip text="Aparece abajo 👇" position="bottom">
              <button className="btn-primary" style={{ background: '#10b981' }}>Hover Abajo</button>
            </Tooltip>
            <Tooltip text="Aparece a la izquierda 👈" position="left">
              <button className="btn-primary" style={{ background: '#f59e0b' }}>Hover Izquierda</button>
            </Tooltip>
            <Tooltip text="Aparece a la derecha 👉" position="right">
              <button className="btn-primary" style={{ background: '#ec4899' }}>Hover Derecha</button>
            </Tooltip>
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 3: SPINNER ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Spinner</h2>
        <ShowcaseCard
          title="Spinner.tsx"
          badge="UI"
          description="Indicador de carga creado con CSS puro usando border-radius: 50% y un keyframe que rota el borde superior (border-top-color). Acepta props de tamaño (sm, md, lg) y color (accent, success, danger, white)."
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <Spinner size="sm" color="accent" />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>sm / accent</span>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <Spinner size="md" color="success" />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>md / success</span>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <Spinner size="lg" color="danger" />
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>lg / danger</span>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '1rem', background: 'var(--accent-primary)', borderRadius: '8px' }}>
              <Spinner size="md" color="white" />
              <span style={{ fontSize: '0.8rem', color: 'white' }}>md / white</span>
            </div>
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 4: ALERTAS ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Alertas</h2>
        <ShowcaseCard
          title="Alert.tsx"
          badge="UI"
          description="Componente de alerta con 4 variantes semánticas (success, error, warning, info). Cada tipo tiene su propio ícono de react-icons, color de borde y fondo. Usa useState para controlar su visibilidad cuando es closeable."
        >
          {showAlerts ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Alert type="success" title="¡Éxito!" message="El componente se creó correctamente." />
              <Alert type="error" title="Error" message="No se pudo conectar con el servidor." />
              <Alert type="warning" title="Aviso" message="Tu sesión expirará en 5 minutos." />
              <Alert type="info" title="Info" message="Hay una nueva versión disponible." closeable={false} />
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Las alertas fueron cerradas.</p>
              <button className="btn-primary" onClick={() => setShowAlerts(true)}>Restaurar alertas</button>
            </div>
          )}
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 5: SELECT ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Select</h2>
        <ShowcaseCard
          title="Select.tsx"
          badge="UI"
          description="Select personalizado basado en el elemento <select> nativo de HTML pero con estilos totalmente adaptados al tema oscuro. Usa appearance: none para ocultar la flecha por defecto y añade un ícono de FiChevronDown posicionado con absolute. Controlado mediante props value y onChange."
        >
          <div style={{ maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
              <p style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>
                Seleccionaste: <strong>{selectVal}</strong>
              </p>
            )}
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 6: BUSCADOR LOCAL ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Buscador Local</h2>
        <ShowcaseCard
          title="LocalSearch.tsx"
          badge="useMemo"
          badgeColor="#f59e0b"
          description="Filtra un array de strings localmente usando useMemo. El memo solo se recalcula cuando cambia el query o los items, evitando renders innecesarios. Incluye botón de limpiar (×) y contador de resultados."
        >
          <LocalSearch items={TECNOLOGIAS} placeholder="Busca una tecnología..." />
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 7: CARD DEL USUARIO ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Tarjetas (Card.tsx)</h2>
        <ShowcaseCard
          title="Card.tsx — Componente propio"
          badge="Props"
          badgeColor="#10b981"
          description="Componente de tarjeta creado con props desestructuradas (title, imageUrl, costo, des). Usa CSS Modules (card.module.css) para encapsular sus estilos. Es reutilizable: basta pasar diferentes props para renderizar tarjetas distintas."
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            <CustomCard
              title="Laptop Pro 15"
              imageUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
              costo="$1,299.99"
              des="Potente laptop para desarrollo con pantalla Retina y chip M3."
            />
            <CustomCard
              title="Sillón Minimalista"
              imageUrl="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80"
              costo="$299.99"
              des="Diseño elegante y cómodo perfecto para tu sala de estar moderna."
            />
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 8: INPUTS ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Inputs & Formularios</h2>
        <ShowcaseCard
          title="Inputs estilizados"
          badge="HTML"
          badgeColor="#94a3b8"
          description="Inputs nativos de HTML con estilos personalizados. Usan background de la variable --bg-primary, border con --border-glass y focus con outline: none para un acabado limpio. El formulario sigue las mejores prácticas de accesibilidad con elementos label correctamente asociados."
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
            {[
              { label: 'Correo Electrónico', type: 'email', placeholder: 'ejemplo@correo.com' },
              { label: 'Contraseña', type: 'password', placeholder: '••••••••' },
              { label: 'Nombre Completo', type: 'text', placeholder: 'Dani Dev' },
            ].map(({ label, type, placeholder }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', color: 'white', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
                />
              </div>
            ))}
            <button className="btn-primary" style={{ marginTop: '0.5rem' }}>Iniciar Sesión</button>
          </div>
        </ShowcaseCard>
      </section>

      {/* ── SECCIÓN 9: GLASSMORPHISM ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Glassmorphism</h2>
        <ShowcaseCard
          title="Efecto de vidrio esmerilado"
          badge="CSS"
          badgeColor="#ec4899"
          description="El efecto glassmorphism se logra con backdrop-filter: blur() sobre un fondo semitransparente. La clase .glass-panel en index.css encapsula esta técnica. Compatible con Chrome, Edge y Safari (con prefijo -webkit-)."
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {['Glass A', 'Glass B', 'Glass C'].map((t, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem', textAlign: 'center', background: `rgba(${99 + i * 40},102,241,0.08)` }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{t}</div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Efecto traslúcido</span>
              </div>
            ))}
          </div>
        </ShowcaseCard>
      </section>

      {/* Íconos react-icons */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={sectionTitle}>Íconos (react-icons/fi)</h2>
        <ShowcaseCard
          title="Feather Icons vía react-icons"
          badge="Library"
          badgeColor="#a855f7"
          description="react-icons es una librería que agrupa múltiples packs de íconos como componentes React. El pack 'fi' (Feather Icons) es minimalista y moderno. Se importa individualmente para hacer tree-shaking y no inflar el bundle."
        >
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { Icon: FiHeart, name: 'FiHeart' },
              { Icon: FiShare2, name: 'FiShare2' },
              { Icon: FiTrash2, name: 'FiTrash2' },
              { Icon: FiEdit, name: 'FiEdit' },
              { Icon: FiSave, name: 'FiSave' },
              { Icon: FiShoppingCart, name: 'FiShoppingCart' },
            ].map(({ Icon, name }, i) => (
              <Tooltip key={i} text={name} position="top">
                <span style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', cursor: 'default', transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
                  onMouseOut={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
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

const sectionTitle: React.CSSProperties = {
  marginBottom: '1rem',
  paddingBottom: '0.5rem',
  borderBottom: '1px solid var(--border-glass)',
  fontSize: '1.3rem',
};
