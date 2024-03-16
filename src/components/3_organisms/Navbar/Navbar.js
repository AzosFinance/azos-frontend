import SwitchColorMode from "@/components/1_atoms/SwitchColorMode/SwitchColorMode";
import { ConnectWallet } from "@/components/2_molecules/ConnectWallet/ConnectWallet";
import {
  Divider,
  Flex,
  Image,
  Link,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import MenuMobileDrawer from "./components/MenuMobileDrawer/MenuMobileDrawer";
import NavBarLink from "./components/components/NavBarLink";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { documentationLink } from "@/utils/consts";

const Navbar = () => {
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { colorMode } = useColorMode();

  return (
    <Stack
      pt="1rem"
      w="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing="1rem"
    >
      <Flex cursor="pointer" onClick={() => router.push("/")} w="10rem">
        <Image objectFit="cover" src="/pictures/azos-logo.png" alt="azos-log" />
      </Flex>
      <Stack
        direction="row"
        alignItems="center"
        spacing="1.5rem"
        display={["none", "none", "flex"]}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing="1rem"
          display={["none", "none", "flex"]}
        >
          {isConnected && (
            <>
              <Stack h="1.5rem">
                <Link
                  mr="1rem"
                  fontWeight="bold"
                  onClick={() => router.push("/user/" + address?.toLowerCase())}
                  _hover={{
                    textDecor:
                      router?.route === "/user/[id]" &&
                      router.query.id === address?.toLowerCase()
                        ? "none"
                        : "underline",
                  }}
                >
                  My Profile
                </Link>
                {router?.route === "/user/[id]" &&
                router.query.id === address?.toLowerCase() ? (
                  <Divider
                    color={colorMode === "light" ? "orange.200" : "blue.200"}
                    border="1px"
                    w="4.9rem"
                  />
                ) : null}
              </Stack>
            </>
          )}
          <NavBarLink
            path="/demo-tokens"
            label="Demo Tokens"
            routeActive="/demo-tokens"
            dividerWidth="6.3rem"
          />
          <NavBarLink
            path={"/user/create-safe/" + address?.toLowerCase()}
            label="Create Safe"
            routeActive="/user/create-safe/[id]"
            dividerWidth="5.5rem"
          />
          <NavBarLink
            path="/analytics"
            label="Analytics"
            dividerWidth="4.5rem"
            routeActive="/analytics"
          />
          <Stack direction="row" cursor="pointer" spacing="0.3rem">
            <Link fontWeight="bold" isExternal href={documentationLink}>
              Docs
            </Link>
            <ExternalLinkIcon fontSize="0.7rem" mt="0.3rem" />
          </Stack>
        </Stack>
        <ConnectWallet />
        <SwitchColorMode />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        display={["flex", "flex", "none"]}
        spacing="1rem"
      >
        <MenuMobileDrawer />
      </Stack>
    </Stack>
  );
};

export default Navbar;
