import UserAvatarMenu from "@/components/1_atoms/UserAvatarMenu/UserAvatarMenu";
import { Heading, Stack } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

const Navbar = () => {
  const router = useRouter();
  const { address, isConnected } = useAccount();
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
      <Stack direction="row" alignItems="center" spacing="1rem">
        {isConnected && <UserAvatarMenu />}
        <ConnectButton />
      </Stack>
    </Stack>
  );
};

export default Navbar;
