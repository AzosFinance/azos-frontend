import { footerLinks } from "@/utils/consts";
import { Flex, Icon, Link, Stack, useColorMode } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      mt="1rem"
      py="1rem"
      direction={("column", "column", "row")}
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      color={colorMode === "light" ? "gray.700" : "gray.400"}
      spacing="1rem"
      display={["none", "none", "flex"]}
    >
      <Stack w="4%" h="1rem" />
      <Flex>
        <Link
          isExternal
          href={footerLinks.silverDoor}
          fontSize="sm"
          _hover={{
            textDecor: "underline",
            color: colorMode === "light" ? "gray.500" : "blue.100",
          }}
        >
          SilverDoor LCA 2023©
        </Link>
      </Flex>
      <Stack direction="row" alignItems="center" spacing="2rem">
        <Link isExternal href={footerLinks.twitter}>
          <Icon
            fontSize="2xl"
            as={AiOutlineTwitter}
            _hover={{ color: colorMode === "light" ? "gray.500" : "blue.100" }}
          />
        </Link>
        <Link isExternal href={footerLinks.github}>
          <Icon
            fontSize="2xl"
            as={AiFillGithub}
            _hover={{ color: colorMode === "light" ? "gray.500" : "blue.100" }}
          />
        </Link>
        <Link isExternal href={footerLinks.telegram} fontSize="sm">
          <Icon
            fontSize="2xl"
            as={BiLogoTelegram}
            _hover={{ color: colorMode === "light" ? "gray.500" : "blue.100" }}
          />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
