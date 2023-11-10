import {
  Avatar,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { FaUser } from "react-icons/fa";
import { CiVault } from "react-icons/ci";
import { PiHandCoins } from "react-icons/pi";

const UserAvatarMenu = () => {
  const { onClose } = useDisclosure();
  const { address } = useAccount();
  const router = useRouter();

  return (
    <Menu>
      <MenuButton
        as={Avatar}
        bg="gray.600"
        size="sm"
        cursor="pointer"
        mr="1rem"
      />
      <MenuList>
        <MenuItem
          onClick={() => {
            router.push("/user/" + address.toLowerCase());
            onClose();
          }}
        >
          <Stack alignItems="center" spacing="1rem" direction="row">
            <Icon as={FaUser} />
            <Text>Profile</Text>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/user/create-safe/" + address.toLowerCase());
            onClose();
          }}
        >
          <Stack alignItems="center" spacing="1rem" direction="row">
            <Icon as={CiVault} />
            <Text>Create A New Safe</Text>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push("/get-demo-tokens");
            onClose();
          }}
        >
          <Stack alignItems="center" spacing="1rem" direction="row">
            <Icon as={PiHandCoins} />
            <Text>Get Demo Tokens</Text>
          </Stack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserAvatarMenu;
