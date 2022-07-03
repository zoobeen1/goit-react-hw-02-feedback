import { Box } from '../common/Box';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Box
      key={option.text}
      as="button"
      mr="5px"
      p={2}
      onClick={() => onLeaveFeedback(option.text)}
    >
      {option.text}
    </Box>
  ));
};
