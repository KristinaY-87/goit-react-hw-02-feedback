import { Component } from 'react';
import FeedbackOptions from './components/feedback/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage1 = Math.round((this.state.good / total) * 100);

    return isNaN(percentage1) ? 0 : percentage1;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const keys = Object.keys(this.state);

    return (
      <>
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.handleIncrement}
        />

        <Section title="Statistics">
          {' '}
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
