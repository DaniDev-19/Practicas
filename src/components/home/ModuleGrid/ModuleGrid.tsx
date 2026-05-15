import { Link } from 'react-router-dom';
import { NAV_MODULES } from '../../../data/home';
import styles from './ModuleGrid.module.css';

export const ModuleGrid = () => {
  return (
    <section aria-labelledby="modules-heading">
      <h2 id="modules-heading" className={styles.heading}>
        Módulos de aprendizaje
      </h2>
      <nav className={styles.grid} aria-label="Módulos del proyecto">
        {NAV_MODULES.map(({ to, Icon, iconColor, title, desc }) => (
          <Link key={to} to={to} className={styles.card}>
            <div 
              className={styles.icon} 
              aria-hidden="true" 
              style={{ color: iconColor }}
            >
              <Icon />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{desc}</p>
          </Link>
        ))}
      </nav>
    </section>
  );
};
