import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode } from 'react-icons/fi';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section aria-label="Introducción" className={styles.hero}>
      <div className={styles.body}>
        <h2 className={styles.title}>¿Listo para explorar?</h2>
        <p className={styles.description}>
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
      <div className={styles.icon} aria-hidden="true">
        <FiCode />
      </div>
    </section>
  );
};
