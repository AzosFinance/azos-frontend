import { Divider, Link, Stack, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";

const NavBarLink = ({ path, label, dividerWidth, routeActive }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Stack h="1.5rem">
      <Link
        mr="1rem"
        fontWeight="bold"
        onClick={() => router.push(path)}
        _hover={{
          textDecor: router?.route === routeActive ? "none" : "underline",
        }}
      >
        {label}
      </Link>
      {router?.route === routeActive && (
        <Divider
          color={colorMode === "light" ? "orange.200" : "blue.200"}
          border="1px"
          w={dividerWidth}
        />
      )}
    </Stack>
  );
};

export default NavBarLink;
