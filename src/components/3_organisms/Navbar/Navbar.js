import SwitchColorMode from "@/components/1_atoms/SwitchColorMode/SwitchColorMode";
import UserAvatarMenu from "@/components/1_atoms/UserAvatarMenu/UserAvatarMenu";
import { ConnectWallet } from "@/components/2_molecules/ConnectWallet/ConnectWallet";
import { Divider, Heading, Link, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import MenuMobileDrawer from "./components/MenuMobileDrawer/MenuMobileDrawer";
import NavBarLink from "./components/components/NavBarLink";

const Navbar = () => {
  const router = useRouter();
  const { isConnected } = useAccount();

  return (
    <Stack
      pt="1rem"
      w="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading cursor="pointer" onClick={() => router.push("/")}>
        Azos
      </Heading>

      <Stack
        direction="row"
        alignItems="center"
        spacing="1.5rem"
        display={["none", "none", "flex"]}
      >
        <NavBarLink path={"/dashboard"} />
        {isConnected && <UserAvatarMenu />}
        <ConnectWallet />
        <SwitchColorMode />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        display={["flex", "flex", "none"]}
        spacing="1rem"
      >
        <NavBarLink path={"/dashboard"} />
        <MenuMobileDrawer />
      </Stack>
    </Stack>
  );
};

export default Navbar;
