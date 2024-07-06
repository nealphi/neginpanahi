import { Box } from "@chakra-ui/react";

const SimpleButton = ({ children, onClick, color }) => {
  return (
    <Box
      as="button"
      display="flex"
      fontSize={["10px","14px","16px"]}
      paddingX={["5px","10px"]}
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
