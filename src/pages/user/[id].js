import VaultsTable from "@/components/2_molecules/VaultsTable/VaultsTable";
import VaultsTableRow from "@/components/2_molecules/VaultsTable/VaultsTableRow";
import PlatformGlobalStatisticsVault from "@/components/5_pages/HomePage/components/PlatformGlobalStatistics/components/PlatformGlobalStatisticsVault";
import { dummyVaults } from "@/utils/consts";
import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useAccount } from "wagmi";

const UserProfile = () => {
  const { address } = useAccount();

  return (
    <Stack w="100%" mt="1rem" spacing="2rem">
      <Stack spacing="1rem">
        <Heading color="teal.200">User Profile</Heading>
        <Text>{address}</Text>
      </Stack>
      {dummyVaults.map((vault, id) => {
        return (
          <PlatformGlobalStatisticsVault key={id} vault={vault}>
            <VaultsTable>
              <VaultsTableRow />
            </VaultsTable>
          </PlatformGlobalStatisticsVault>
        );
      })}
    </Stack>
  );
};

export default UserProfile;
