import { FiBox, FiCode, FiActivity, FiGlobe, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Bienvenido a <span className="text-gradient">ReactPro</span></h1>
        <p className="page-description">Tu portafolio interactivo de prácticas, componentes y arquitectura frontend.</p>
      </header>

      <div className="hero-section card" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2>¿Listo para explorar?</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Esta aplicación está diseñada con una arquitectura escalable, un diseño moderno en Glassmorphism 
            y las mejores prácticas de React.
          </p>
          <Link to="/componentes">
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Empezar <FiArrowRight />
            </button>
          </Link>
        </div>
        <div style={{ fontSize: '6rem', color: 'var(--accent-primary)', opacity: 0.2 }}>
          <FiCode />
        </div>
      </div>

      <h3 style={{ marginBottom: '1rem' }}>Módulos de Aprendizaje</h3>
      <div className="grid-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        
        <Link to="/componentes" className="card hover-scale">
          <div style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}><FiBox /></div>
          <h3>Componentes UI</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Colección de componentes reutilizables como botones, tarjetas y modales.
          </p>
        </Link>

        <Link to="/hooks" className="card hover-scale">
          <div style={{ fontSize: '2rem', color: '#10b981', marginBottom: '1rem' }}><FiCode /></div>
          <h3>React Hooks</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Ejemplos prácticos de useState, useEffect, y custom hooks.
          </p>
        </Link>

        <Link to="/practicas" className="card hover-scale">
          <div style={{ fontSize: '2rem', color: '#f59e0b', marginBottom: '1rem' }}><FiActivity /></div>
          <h3>Prácticas Reales</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Integración de lógicas complejas como CRUDs y gestores de tareas.
          </p>
        </Link>

        <Link to="/peticiones" className="card hover-scale">
          <div style={{ fontSize: '2rem', color: '#ec4899', marginBottom: '1rem' }}><FiGlobe /></div>
          <h3>Peticiones HTTP</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Consumo de APIs externas usando fetch y manejo de estados asíncronos.
          </p>
        </Link>

      </div>
    </div>
  );
}

export default Home;
