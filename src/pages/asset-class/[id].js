import { useRouter } from "next/router";
import { dummyVaults } from "@/utils/consts";
import PlatformGlobalStatisticsVault from "@/components/5_pages/HomePage/components/PlatformGlobalStatistics/components/PlatformGlobalStatisticsVault";
import { Heading, Stack } from "@chakra-ui/react";
import VaultsTable from "@/components/2_molecules/VaultsTable/VaultsTable";
import VaultsTableRow from "@/components/2_molecules/VaultsTable/VaultsTableRow";

const AssetClass = () => {
  const router = useRouter();

  return (
    <Stack w="100%" spacing="2rem" mt="1rem">
      <Heading color="teal.200">{router.query.id} Vault</Heading>
      {dummyVaults
        ?.filter((e) => e.vaultSymbol === router.query.id)
        ?.map((vault, id) => {
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

export default AssetClass;
