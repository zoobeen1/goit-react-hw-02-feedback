import { Box } from './Box';
export const Container = p => {
  return (
    <Box
      width="small"
      border="normal"
      borderRadius="normal"
      mt={5}
      mx="auto"
      p={3}
      boxShadow="normal"
      bg="background"
    >
      {p.children}
    </Box>
  );
};
