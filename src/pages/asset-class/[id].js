import { useRouter } from "next/router";
import PlatformGlobalStatisticsVault from "@/components/2_molecules/CardAssetClass/CardAssetClass";
import { Heading, Stack } from "@chakra-ui/react";
import VaultsTable from "@/components/2_molecules/VaultsTable/VaultsTable";
import VaultsTableRow from "@/components/2_molecules/VaultsTable/VaultsTableRow";
import { GET_ASSET_CLASS } from "@/graphQL/queries";
import { useQuery } from "@apollo/client";
import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";

const AssetClass = () => {
  const router = useRouter();
  const { data, loading } = useQuery(GET_ASSET_CLASS, {
    variables: { id: router.query.id },
  });

  return loading ? (
    <LoadingPage />
  ) : (
    <Stack w="100%" spacing="2rem" mt="1rem">
      <Heading>{data?.assetClass?.collateralTypeName} Vault</Heading>
      <PlatformGlobalStatisticsVault vault={data?.assetClass}>
        {/* <VaultsTable>
          <VaultsTableRow />
        </VaultsTable> */}
      </PlatformGlobalStatisticsVault>
    </Stack>
  );
};

export default AssetClass;
