import { Link } from "@chakra-ui/react";

const LinkButton = ({ children, href }) => {
  return (
    <Link
     href={href}
      width="70px"
      height="30px"
      display="flex"
      fontSize="14px"
      fontWeight="bold"
      alignItems="center"
      color="gray.400"
      justifyContent="center"
      _hover={{ color: "lightBlue" }}    >
      {children}
    </Link>
  );
};

export default LinkButton;
