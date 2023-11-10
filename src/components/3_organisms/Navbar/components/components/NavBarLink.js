import { Divider, Link, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const NavBarLink = ({ path, label, dividerWidth, routeActive }) => {
  const router = useRouter();

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
        <Divider color="blue.200" border="1px" w={dividerWidth} />
      )}
    </Stack>
  );
};

export default NavBarLink;
