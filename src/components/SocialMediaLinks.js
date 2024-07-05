import { Flex, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import LinkButton from "./LinkButton";

const SocialMediaLinks = () => {
  return (
    <Flex w={40}  justifyContent={"space-between"}>
      <LinkButton href="https://github.com/nealphi">
        <Icon boxSize={6} as={FaGithub} />
      </LinkButton>
      <LinkButton href="http://linkedin.com/in/negin-alipanahi">
        <Icon boxSize={6} as={FaLinkedin} />
      </LinkButton>
      <LinkButton href="https://www.youtube.com/channel/UC7HuDqoVYuXIVbM_QT54nCg">
        <Icon boxSize={6} as={FaYoutube} />
      </LinkButton>
      <LinkButton href="https://www.instagram.com/negin.alphi/">
        <Icon boxSize={6} as={FaInstagram} />
      </LinkButton>
    </Flex>
  );
};

export default SocialMediaLinks;
