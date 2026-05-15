import styles from './Card.module.css';

interface CardProps {
  title: string;
  imageUrl: string;
  costo: string;
  des: string;
}

export const Card = ({ title, imageUrl, costo, des }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <hr className={styles.divider} />
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.costo}>{costo}</span>
      <p className={styles.description}>{des}</p>
    </div>
  );
};
