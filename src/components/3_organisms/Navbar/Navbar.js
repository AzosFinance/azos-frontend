import SwitchColorMode from "@/components/1_atoms/SwitchColorMode/SwitchColorMode";
import { ConnectWallet } from "@/components/2_molecules/ConnectWallet/ConnectWallet";
import { Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import MenuMobileDrawer from "./components/MenuMobileDrawer/MenuMobileDrawer";
import NavBarLink from "./components/components/NavBarLink";

const Navbar = () => {
  const router = useRouter();
  const { isConnected, address } = useAccount();

  return (
    <Stack
      pt="1rem"
      w="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading
        cursor="pointer"
        onClick={() => router.push("/")}
        color="orange.200"
      >
        Azos
      </Heading>
      <Stack
        direction="row"
        alignItems="center"
        spacing="1.5rem"
        display={["none", "none", "flex"]}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing="2rem"
          display={["none", "none", "flex"]}
        >
          <NavBarLink
            path="/dashboard"
            label="Dashboard"
            dividerWidth="5.3rem"
            routeActive="/dashboard"
          />
          {isConnected && (
            <>
              <NavBarLink
                path={"/user/create-safe/" + address?.toLowerCase()}
                label="Create Safe"
                routeActive="/user/create-safe/[id]"
                dividerWidth="5.5rem"
              />
              <NavBarLink
                path="/demo-tokens"
                label="Demo Tokens"
                routeActive="/demo-tokens"
                dividerWidth="6.3rem"
              />
              <NavBarLink
                path={"/user/" + address?.toLowerCase()}
                label="My Profile"
                routeActive="/user/[id]"
                dividerWidth="4.9rem"
              />
            </>
          )}
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
