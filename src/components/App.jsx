import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends Component {
  constructor(props) {
    super(props);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleIncrement = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(1);
    return percentage;
  };

  render() {
    const buttonNames = Object.keys(this.state);

    return (
      <div>
        <Section>
          <a href="urszula-molska.github.io/goit-react-hw-02-feedback/">
            urszula-molska.github.io/goit-react-hw-02-feedback
          </a>
          <a href="https://github.com/Urszula-Molska/goit-react-hw-02-feedback">
            https://github.com/Urszula-Molska/goit-react-hw-02-feedback
          </a>
        </Section>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
