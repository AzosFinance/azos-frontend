import SafeTable from "@/components/2_molecules/SafeTable/SafeTable";
import SafeTableRow from "@/components/2_molecules/SafeTable/SafeTableRow";
import CardAssetClass from "@/components/2_molecules/CardAssetClass/CardAssetClass";
import { Stack, Text, Center, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import useGetEthPrice from "@/hooks/web3Hooks/useGetEthPrice";
import UserBalances from "../../2_molecules/UserBalances/UserBalances";
import useIsOwner from "@/hooks/utils/useIsOwner";
import useZaiPrice from "@/hooks/web3Hooks/useZaiPrice";
import { GET_USER_PROXY } from "@/graphQL/userQueries/userQueries";

const UserProfilePage = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const { data, loading } = useQuery(GET_USER_PROXY, {
    variables: {
      id: router?.query?.id,
    },
  });

  const { zaiPrice, isLoadingUniswapGetReserves } = useZaiPrice();

  const { ethPrice, loadingEthPrice } = useGetEthPrice();

  const { isOwner } = useIsOwner(router.query.id);

  return loading || loadingEthPrice || isLoadingUniswapGetReserves ? (
    <LoadingPage />
  ) : (
    <Stack w="100%" mt="2rem" spacing="1.5rem">
      <Stack
        direction={["column", "column", "row"]}
        alignItems="center"
        justifyContent="flex-end"
        spacing="2rem"
      >
        <UserBalances />
      </Stack>
      {data?.userProxy?.userProxyAssetClassStatDeposits?.length > 0 ? (
        data?.userProxy?.userProxyAssetClassStatDeposits?.map(
          (assetClass, id) => {
            return (
              <CardAssetClass
                key={id}
                safe={assetClass?.assetClass}
                ethPrice={ethPrice}
                activeSafes={assetClass?.activeSafes}
                collateralLocked={assetClass?.collateralLocked}
                debtTokensHeld={assetClass?.debtTokensHeld}
                isFromUserProfile
                isOwner={isOwner}
                zaiPrice={zaiPrice}
              >
                <SafeTable>
                  {assetClass?.assetClass?.safes?.map((safe, idx) => {
                    return (
                      <SafeTableRow
                        key={idx}
                        safe={safe}
                        ethPrice={ethPrice}
                        zaiPrice={zaiPrice}
                        collateralTypeName={
                          safe?.safe?.assetClass?.collateralTypeName
                        }
                      />
                    );
                  })}
                </SafeTable>
              </CardAssetClass>
            );
          }
        )
      ) : (
        <Center h="50vh">
          <Text color="gray.500">No Assets Detected</Text>
        </Center>
      )}
    </Stack>
  );
};

export default UserProfilePage;
