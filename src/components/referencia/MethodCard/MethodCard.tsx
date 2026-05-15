import type { MethodDef } from '../../../data/referencia';
import styles from './MethodCard.module.css';

const CATEGORY_COLORS: Record<string, string> = {
  Transformación: 'badge--accent',
  Búsqueda: 'badge--info',
  Verificación: 'badge--success',
  Mutación: 'badge--danger',
  Ordenación: 'badge--warning',
};

export const MethodCard = ({ name, category, desc, returns, example }: MethodDef) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <code className={styles.name}>{name}</code>
        <span className={`badge ${CATEGORY_COLORS[category]}`}>{category}</span>
      </header>
      <p className={styles.description}>{desc}</p>
      <pre className={styles.example}>{example}</pre>
      <p className={styles.returns}>
        <span className={styles.returnsArrow}>↩</span> Retorna: {returns}
      </p>
    </article>
  );
};
