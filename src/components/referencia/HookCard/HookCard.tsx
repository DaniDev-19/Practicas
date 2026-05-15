import { FiInfo } from 'react-icons/fi';
import type { HookDef } from '../../../data/referencia';
import styles from './HookCard.module.css';

const CATEGORY_COLORS: Record<string, string> = {
  Estado: 'badge--accent',
  Efectos: 'badge--info',
  Rendimiento: 'badge--success',
  Contexto: 'badge--warning',
  Avanzado: 'badge--danger',
};

export const HookCard = ({ name, category, desc, when, code }: HookDef) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <code className={styles.name}>{name}</code>
        <span className={`badge ${CATEGORY_COLORS[category]}`}>{category}</span>
      </header>
      <p className={styles.description}>{desc}</p>
      <p className={styles.when}>
        <FiInfo className={styles.whenIcon} /> {when}
      </p>
      <pre className={styles.code}>{code}</pre>
    </article>
  );
};
