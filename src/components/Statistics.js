import styles from './Text.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.wrapper}>
    <p className={styles.good}>Good: {good}</p>
    <p className={styles.neutral}>Neutral: {neutral}</p>
    <p className={styles.bad}>Bad: {bad}</p>
    <p className={styles.total}>Total: {total}</p>
    <p className={styles.percentage}>
      Positive feedback: {positivePercentage}%
    </p>
  </div>
);
export default Statistics;
