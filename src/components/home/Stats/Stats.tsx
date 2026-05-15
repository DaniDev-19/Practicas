import { STATS } from '../../../data/home';
import styles from './Stats.module.css';

export const Stats = () => {
  return (
    <section aria-label="Estadísticas del proyecto" className={styles.container}>
      <div className="grid-4">
        {STATS.map(stat => (
          <div key={stat.label} className="card text-center" style={{ padding: '1.5rem 1rem' }}>
            <div 
              className={styles.value} 
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className={styles.label}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
