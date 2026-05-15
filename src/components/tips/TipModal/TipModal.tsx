import type { Tip } from '../../../data/tips';
import styles from './TipModal.module.css';

interface TipModalProps {
  tip: Tip;
  onClose: () => void;
}

export const TipModal = ({ tip, onClose }: TipModalProps) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar modal">×</button>
        <h3 className={styles.title}>{tip.consejo}</h3>
        <p className={styles.description}>{tip.aplicacion}</p>
        <pre className={styles.code}>
          {tip.ejemplo}
        </pre>
      </div>
    </div>
  );
};
