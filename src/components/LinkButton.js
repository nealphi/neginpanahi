import { Link } from "@chakra-ui/react";

const LinkButton = ({ children, href }) => {
  return (
    <Link
      href={href}
      width="30px"
      paddingX={6}
      pb={5}
      display="flex"
      fontSize="14px"
      fontWeight="bold"
      alignItems="center"
      color="gray.400"
      justifyContent="center"
      _hover={{ color: "lightBlue" }}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
