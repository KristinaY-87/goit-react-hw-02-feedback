import PropTypes from 'prop-types';
import Section from '../Section';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please leave feedback">
    <div className={styles.description}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          className={styles.btn}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </Section>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
