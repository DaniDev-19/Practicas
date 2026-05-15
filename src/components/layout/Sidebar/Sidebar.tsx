import { NavLink } from 'react-router-dom';
import {
  FiHome, FiBox, FiCode, FiActivity,
  FiGlobe, FiBookOpen, FiList, FiAward, FiInfo
} from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import styles from './Sidebar.module.css';


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

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className={styles.overlay} 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      <aside 
        className={`${styles.sidebar} glass-panel ${isOpen ? styles.sidebarOpen : ''}`} 
        aria-label="Navegación principal"
      >
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon} aria-hidden="true">
            <FaReact />
          </div>
          <h2 className={styles.logoText}>
            React<span className="text-gradient">Pro</span>
          </h2>
        </div>
        <p className={styles.subtitle}>Portafolio de Prácticas</p>
      </header>

      <nav className={styles.nav}>
        {NAV_LINKS.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => 
              `${styles.navItem} ${isActive ? styles.navItemActive : ''}`
            }
          >
            <Icon className={styles.navIcon} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <footer className={styles.footer}>
        <div className={styles.userProfile}>
          <div className={styles.userAvatar} aria-label="Avatar de DaniDev">D</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>DaniDev</span>
            <span className={styles.userRole}>Frontend Pro</span>
          </div>
        </div>
      </footer>
    </aside>
    </>
  );
};
