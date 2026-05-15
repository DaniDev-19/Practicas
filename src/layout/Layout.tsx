import { NavLink, Outlet } from 'react-router-dom';
import {
  FiHome, FiBox, FiCode, FiActivity,
  FiGlobe, FiBookOpen, FiList, FiAward, FiInfo
} from 'react-icons/fi';
import '../index.css';
import './Layout.css';

const NAV_LINKS = [
  { to: '/',           icon: FiHome,     label: 'Inicio' },
  { to: '/about',      icon: FiInfo,     label: 'Consejos y Tips' },
  { to: '/teoria',     icon: FiBookOpen, label: 'Teoría' },
  { to: '/referencia', icon: FiList,     label: 'Referencia' },
  { to: '/componentes',icon: FiBox,      label: 'Componentes' },
  { to: '/hooks',      icon: FiCode,     label: 'Hooks' },
  { to: '/practicas',  icon: FiActivity, label: 'Prácticas' },
  { to: '/ejercicios', icon: FiAward,    label: 'Desafíos' },
  { to: '/peticiones', icon: FiGlobe,    label: 'Peticiones' },
];

export default function Layout() {
  return (
    <div className="app-container">

      {/* ── Barra lateral ── */}
      <aside className="sidebar glass-panel" aria-label="Navegación principal">

        {/* Logo */}
        <header className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon" aria-hidden="true" />
            <h2>React<span className="text-gradient">Pro</span></h2>
          </div>
          <p className="sidebar-subtitle">Portafolio de Prácticas</p>
        </header>

        {/* Navegación */}
        <nav className="sidebar-nav">
          {NAV_LINKS.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}
            >
              <Icon className="nav-icon" aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Perfil */}
        <footer className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar" aria-label="Avatar de DaniDev">D</div>
            <div className="user-info">
              <span className="user-name">DaniDev</span>
              <span className="user-role">Frontend Pro</span>
            </div>
          </div>
        </footer>
      </aside>

      {/* ── Contenido principal ── */}
      <main className="main-content animate-fade-in">
        <Outlet />
      </main>
    </div>
  );
}