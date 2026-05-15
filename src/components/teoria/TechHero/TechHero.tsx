import type { ReactNode } from 'react';
import styles from './TechHero.module.css';

interface TechHeroProps {
  icon: ReactNode;
  title: string | ReactNode;
  children: ReactNode;
  iconColor?: string;
}

export const TechHero = ({ icon, title, children, iconColor }: TechHeroProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon} style={{ color: iconColor }}>
        {icon}
      </div>
      <h3 className={styles.title}>
        {title}
      </h3>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
};
