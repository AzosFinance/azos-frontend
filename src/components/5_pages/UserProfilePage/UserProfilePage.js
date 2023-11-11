import SafeTable from "@/components/2_molecules/SafeTable/SafeTable";
import SafeTableRow from "@/components/2_molecules/SafeTable/SafeTableRow";
import CardAssetClass from "@/components/2_molecules/CardAssetClass/CardAssetClass";
import {
  Stack,
  Heading,
  Text,
  Center,
  Divider,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_USER_PROXY } from "@/graphQL/queries";
import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import useGetEthPrice from "@/hooks/web3Hooks/useGetEthPrice";
import UserBalances from "../../2_molecules/UserBalances/UserBalances";
import useIsOwner from "@/hooks/utils/useIsOwner";
import { sepoliaScanAddress } from "@/utils/consts";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const UserProfilePage = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const { data, loading } = useQuery(GET_USER_PROXY, {
    variables: {
      id: router?.query?.id,
    },
  });

  const { ethPrice, loadingEthPrice } = useGetEthPrice();

  const { isOwner } = useIsOwner(router.query.id);

  return loading || loadingEthPrice ? (
    <LoadingPage />
  ) : (
    <Stack w="100%" mt="1rem" spacing="2rem">
      <Stack
        direction={["column", "column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        spacing="2rem"
      >
        <Stack spacing="1rem">
          <Heading>User Profile</Heading>
          <Stack
            direction="row"
            alignItems="center"
            color={colorMode === "light" ? "gray.600" : "gray.400"}
            cursor="pointer"
          >
            <Link
              fontSize="sm"
              isExternal
              href={sepoliaScanAddress + router?.query?.id}
            >
              {router?.query?.id}
            </Link>
            <ExternalLinkIcon />
          </Stack>
        </Stack>
        <UserBalances />
      </Stack>
      <Divider />
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
              >
                <SafeTable>
                  {assetClass?.assetClass?.safes?.map((safe, idx) => {
                    return (
                      <SafeTableRow
                        key={idx}
                        safe={safe}
                        ethPrice={ethPrice}
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
