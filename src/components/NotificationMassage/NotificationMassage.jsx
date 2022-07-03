import { Box } from 'components/common';
export const NotificationMassage = ({ message }) => {
  return (
    <Box mt={2}>
      <p>{message}</p>
    </Box>
  );
};
