import { footerLinks } from "@/utils/consts";
import { Icon, Link, Stack, useColorMode } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      mt="2rem"
      py="1rem"
      direction={("column", "column", "row")}
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      color={colorMode === "light" ? "gray.700" : "gray.400"}
      spacing="1rem"
      display={["none", "none", "flex"]}
    >
      <Stack w="1rem" />
      <Link
        isExternal
        href={footerLinks.silverDoor}
        fontSize="sm"
        _hover={{ color: "blue.100" }}
      >
        SilverDoor LCA 2023©
      </Link>

      <Stack direction="row" alignItems="center" spacing="1rem">
        <Link isExternal href={footerLinks.github}>
          <Icon
            fontSize="2xl"
            as={AiFillGithub}
            _hover={{ color: "blue.100" }}
          />
        </Link>
        <Link isExternal href={footerLinks.telegram} fontSize="sm">
          <Icon
            fontSize="2xl"
            as={BiLogoTelegram}
            _hover={{ color: "blue.100" }}
          />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
