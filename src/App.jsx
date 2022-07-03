import { Component } from 'react';
import { Button } from 'components/common/Button';
import { Statistics } from 'components/statistics/statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodClick = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handleNeutralClick = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handleBadClick = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <Button handleClick={this.handleGoodClick} text="good" />
        <Button handleClick={this.handleNeutralClick} text="neutral" />
        <Button handleClick={this.handleBadClick} text="bad" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
