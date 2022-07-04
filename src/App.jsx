import { Component } from 'react';
import { Statistics } from 'components/statistics';
import { Container, Section } from 'components/common';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { NotificationMassage } from 'components/NotificationMassage';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // handleGoodClick = () => {
  //   this.setState(prevValue => ({ good: prevValue.good + 1 }));
  // };
  // handleNeutralClick = () => {
  //   this.setState(prevValue => ({ neutral: prevValue.neutral + 1 }));
  // };
  // handleBadClick = () => {
  //   this.setState(prevValue => ({ bad: prevValue.bad + 1 }));
  // };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  onLeaveFeedback = option => {
    this.setState(prevValue => ({
      [option]: prevValue[option] + 1,
    }));
    // switch (option) {
    //   case 'Good':
    //     this.handleGoodClick();
    //     break;
    //   case 'Neutral':
    //     this.handleNeutralClick();
    //     break;
    //   case 'Bad':
    //     this.handleBadClick();
    //     break;
    //   default:
    //     console.log('default');
    //     break;
    // }
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMassage message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
