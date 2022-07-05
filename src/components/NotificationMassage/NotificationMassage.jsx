import { Box } from 'components/common';
import PropTypes from 'prop-types';
export const NotificationMassage = ({ message }) => {
  return (
    <Box mt={2}>
      <p>{message}</p>
    </Box>
  );
};
NotificationMassage.propTypes = {
  message: PropTypes.string.isRequired,
};
