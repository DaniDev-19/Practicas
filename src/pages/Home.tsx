/**
 * Home.tsx
 * Página de inicio — presentación del proyecto y navegación a módulos.
 */

import { 
  FiCode, 
  FiArrowRight, 
  FiBookOpen, 
  FiList, 
  FiBox, 
  FiAnchor, 
  FiCpu, 
  FiAward 
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/pages.css';

const NAV_MODULES = [
  {
    to: '/teoria',
    Icon: FiBookOpen,
    iconColor: 'var(--accent-primary)',
    title: 'Teoría React',
    desc: 'Fundamentos profundos: qué es React, JS, TS, Vite y preguntas frecuentes.',
  },
  {
    to: '/referencia',
    Icon: FiList,
    iconColor: 'var(--accent-secondary)',
    title: 'Referencia',
    desc: 'Todos los hooks de React y métodos de Array con ejemplos de código.',
  },
  {
    to: '/ejercicios',
    Icon: FiAward,
    iconColor: '#a855f7',
    title: 'Desafíos Lógicos',
    desc: 'Pon a prueba tu lógica con ejercicios interactivos y sistema de puntos.',
  },
  {
    to: '/componentes',
    Icon: FiBox,
    iconColor: 'var(--accent-primary)',
    title: 'Componentes UI',
    desc: 'Colección de componentes reutilizables: botones, alertas, tooltips y más.',
  },
  {
    to: '/hooks',
    Icon: FiAnchor,
    iconColor: 'var(--accent-success)',
    title: 'Hooks en acción',
    desc: 'Demos interactivas de useState, useEffect y useMemo con código real.',
  },
  {
    to: '/practicas',
    Icon: FiCpu,
    iconColor: 'var(--accent-warning)',
    title: 'Prácticas Reales',
    desc: 'CRUDs, gestores de tareas y lógica compleja con componentes propios.',
  },
];

export default function Home() {
  return (
    <div className="page-container animate-fade-in">

      {/* ── Encabezado ── */}
      <header className="page-header">
        <h1 className="page-title">
          Bienvenido a <span className="text-gradient">ReactPro</span>
        </h1>
        <p className="page-description">
          Tu portafolio interactivo de prácticas, componentes y arquitectura frontend moderna.
        </p>
      </header>

      {/* ── Hero ── */}
      <section aria-label="Introducción" className="home-hero">
        <div className="home-hero__body">
          <h2>¿Listo para explorar?</h2>
          <p>
            Esta aplicación está construida con <strong>React 19 + TypeScript + Vite</strong>,
            un sistema de diseño Glassmorphism con variables CSS y arquitectura basada en
            componentes. Cada sección tiene explicaciones técnicas profundas.
          </p>
          <Link to="/teoria">
            <button className="btn-primary">
              Empezar por la Teoría <FiArrowRight />
            </button>
          </Link>
        </div>
        <div className="home-hero__icon" aria-hidden="true">
          <FiCode />
        </div>
      </section>

      {/* ── Módulos de navegación ── */}
      <section aria-labelledby="modules-heading">
        <h2 id="modules-heading" style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
          Módulos de aprendizaje
        </h2>
        <nav className="home-nav-grid" aria-label="Módulos del proyecto">
          {NAV_MODULES.map(({ to, Icon, iconColor, title, desc }) => (
            <Link key={to} to={to} className="home-nav-card">
              <div className="home-nav-card__icon" aria-hidden="true" style={{ color: iconColor }}>
                <Icon />
              </div>
              <h3 className="home-nav-card__title">{title}</h3>
              <p className="home-nav-card__desc">{desc}</p>
            </Link>
          ))}
        </nav>
      </section>

      {/* ── Stats row ── */}
      <section aria-label="Estadísticas del proyecto" style={{ marginTop: '2.5rem' }}>
        <div className="grid-4">
          {[
            { value: '7', label: 'Módulos', color: 'var(--accent-primary)' },
            { value: '11', label: 'Hooks documentados', color: '#a855f7' },
            { value: '18', label: 'Métodos de Array', color: '#f59e0b' },
            { value: '100%', label: 'TypeScript', color: '#10b981' },
          ].map(stat => (
            <div key={stat.label} className="card text-center" style={{ padding: '1.5rem 1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: stat.color, fontFamily: 'var(--font-code)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
