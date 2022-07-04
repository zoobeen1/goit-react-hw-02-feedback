import { Box } from '../common/Box';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Box
      key={option}
      as="button"
      mr="5px"
      p={2}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </Box>
  ));
};
