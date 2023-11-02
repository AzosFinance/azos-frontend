import {
  Avatar,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
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

const UserAvatarMenu = () => {
  const { onClose } = useDisclosure();
  const { address } = useAccount();
  const router = useRouter();

  return (
    <Menu>
      <MenuButton as={Avatar} bg="gray.600" size="sm" cursor="pointer" />
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
            router.push("/user/create-vault/" + address.toLowerCase());
            onClose();
          }}
        >
          <Stack alignItems="center" spacing="1rem" direction="row">
            <Icon as={CiVault} />
            <Text>Create A New Vault</Text>
          </Stack>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserAvatarMenu;
