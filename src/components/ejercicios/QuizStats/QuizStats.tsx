import styles from './QuizStats.module.css';

interface QuizStatsProps {
  totalPoints: number;
  completedQuizzes: number;
  lastScore: number;
  totalQuestions: number;
}

export const QuizStats = ({ totalPoints, completedQuizzes, lastScore, totalQuestions }: QuizStatsProps) => {
  return (
    <section className={styles.banner}>
      <div className={styles.box}>
        <span className={styles.value}>{totalPoints}</span>
        <span className={styles.label}>Puntos Totales</span>
      </div>
      <div className={styles.box}>
        <span className={styles.value}>{completedQuizzes}</span>
        <span className={styles.label}>Desafíos</span>
      </div>
      <div className={styles.box}>
        <span className={styles.value}>{lastScore}/{totalQuestions}</span>
        <span className={styles.label}>Último Score</span>
      </div>
    </section>
  );
};
