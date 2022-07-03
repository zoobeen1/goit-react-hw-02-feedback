export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <div>
      <h2>Statistics</h2>
      <p>
        good: {good} - neutral: {neutral} - bad: {bad}
      </p>
      <p>
        average: {average} - positive: {positive}%
      </p>
    </div>
  );
};
