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
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

const UserProfile = () => {
  const { address } = useAccount();
  const router = useRouter();
  return (
    <Stack w="100%" mt="1rem" spacing="2rem">
      <Stack spacing="1rem">
        <Heading>User Profile</Heading>
        <Text>{address}</Text>
      </Stack>
      {dummyVaults.map((vault, id) => {
        return (
          <PlatformGlobalStatisticsVault key={id} vault={vault}>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>VAULT ID</Th>
                    <Th>OWNER</Th>
                    <Th>DEBT</Th>
                    <Th>COLLATERAL</Th>
                    <Th>COLLATERAL RATIO</Th>
                    <Th>LIQUIDATION</Th>
                    <Th>LTV</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Button size="xs" colorScheme="teal" variant="outline">
                        Vault
                      </Button>
                    </Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Button size="xs" colorScheme="teal" variant="outline">
                        Vault
                      </Button>
                    </Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Button size="xs" colorScheme="teal" variant="outline">
                        Vault
                      </Button>
                    </Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td>25.4</Td>
                    <Td>25.4</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </PlatformGlobalStatisticsVault>
        );
      })}
    </Stack>
  );
};

export default UserProfile;
