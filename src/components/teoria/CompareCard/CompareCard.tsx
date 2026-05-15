import type { ReactNode } from 'react';
import styles from './CompareCard.module.css';

interface CompareItem {
  Icon: any;
  text: string;
}

interface CompareCardProps {
  icon: ReactNode;
  title: string;
  badge: string;
  badgeType: 'accent' | 'warning' | 'success' | 'muted';
  items: CompareItem[];
  variant: 'a' | 'b';
}

export const CompareCard = ({ 
  icon, 
  title, 
  badge, 
  badgeType, 
  items, 
  variant 
}: CompareCardProps) => {
  return (
    <article className={`${styles.card} ${styles[`card--${variant}`]}`}>
      <header className={styles.header}>
        <div className={styles.topIcon}>
          {icon}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <span className={`badge badge--${badgeType}`}>{badge}</span>
      </header>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.listItem}>
            <span className={styles.listIcon}>
              <item.Icon />
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
