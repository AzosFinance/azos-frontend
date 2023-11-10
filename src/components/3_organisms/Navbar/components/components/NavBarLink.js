import { Divider, Link, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const NavBarLink = ({ path }) => {
  const router = useRouter();
  return (
    <Stack h="1.5rem">
      <Link
        mr="1rem"
        fontWeight="bold"
        onClick={() => router.push(path)}
        _hover={{ textDecor: router?.route === path ? "none" : "underline" }}
      >
        App
      </Link>
      {router?.route === path && (
        <Divider color="blue.200" border="1px" w="2rem" />
      )}
    </Stack>
  );
};

export default NavBarLink;
