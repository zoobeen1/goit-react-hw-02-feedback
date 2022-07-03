export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  // if (total === 0) {
  //   return (
  //     <div>
  //       <p>No feedback given</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <p>
        <b>Good:</b> {good}
      </p>
      <p>
        <b>Neutral:</b> {neutral}
      </p>
      <p>
        <b>Bad:</b> {bad}
      </p>
      <p>
        <b>Total:</b> {total}
      </p>
      <p>
        <b>Positive feedback:</b> {positivePercentage}%
      </p>
    </div>
  );
};
