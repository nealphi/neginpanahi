import { Box } from "@chakra-ui/react";

const SimpleButton = ({ children, onClick, color }) => {
  return (
    <Box
      as="button"
      display="flex"
      fontSize="16px"
      paddingX={'10PX'}
      alignItems="center"
      color={ color }
      justifyContent="center"
      _hover={{ color: "lightBlue" }}
      onClick={() => onClick()}
    >
      {children}
    </Box>
  );
};

export default SimpleButton;
