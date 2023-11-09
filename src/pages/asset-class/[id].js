import { useRouter } from "next/router";
import CardAssetClass from "@/components/2_molecules/CardAssetClass/CardAssetClass";
import { Heading, Stack } from "@chakra-ui/react";
import SafeTable from "@/components/2_molecules/SafeTable/SafeTable";
import SafeTableRow from "@/components/2_molecules/SafeTable/SafeTableRow";
import { GET_ASSET_CLASS } from "@/graphQL/queries";
import { useQuery } from "@apollo/client";
import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import useGetEthPrice from "@/hooks/web3Hooks/useGetEthPrice";

const AssetClass = () => {
  const router = useRouter();
  const { data, loading } = useQuery(GET_ASSET_CLASS, {
    variables: { id: router.query.id },
  });

  const { ethPrice, loadingEthPrice } = useGetEthPrice();

  return loading || loadingEthPrice ? (
    <LoadingPage />
  ) : (
    <Stack w="100%" spacing="2rem" mt="1rem">
      <Heading>{data?.assetClass?.collateralTypeName} Vault</Heading>
      <CardAssetClass safe={data?.assetClass} ethPrice={ethPrice}>
        <SafeTable>
          {data?.assetClass?.safes?.map((safe, idx) => (
            <SafeTableRow
              key={idx}
              safe={safe}
              ethPrice={ethPrice}
              collateralTypeName={data?.assetClass?.collateralTypeName}
            />
          ))}
        </SafeTable>
      </CardAssetClass>
    </Stack>
  );
};

export default AssetClass;
