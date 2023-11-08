import SafeTable from "@/components/2_molecules/SafeTable/SafeTable";
import SafeTableRow from "@/components/2_molecules/SafeTable/SafeTableRow";
import CardAssetClass from "@/components/2_molecules/CardAssetClass/CardAssetClass";
import { Stack, Heading, Text, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_USER_PROXY } from "@/graphQL/queries";
import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";

const UserProfile = () => {
  const router = useRouter();

  const { data, loading } = useQuery(GET_USER_PROXY, {
    variables: {
      id: router?.query?.id,
    },
  });

  return loading ? (
    <LoadingPage />
  ) : (
    <Stack w="100%" mt="1rem" spacing="2rem">
      <Stack spacing="1rem">
        <Heading color="teal.200">User Profile</Heading>
        <Text color="gray.400" fontSize="sm">
          {router?.query?.id}
        </Text>
      </Stack>
      {data?.userProxy?.safes?.length > 0 ? (
        data?.userProxy?.safes?.map((assetClass, id) => {
          return (
            <CardAssetClass key={id} safe={assetClass?.safe?.assetClass}>
              <SafeTable>
                {assetClass?.safe?.assetClass?.safes?.map((safe, idx) => (
                  <SafeTableRow
                    key={idx}
                    safe={safe}
                    collateralTypeName={
                      safe?.safe?.assetClass?.collateralTypeName
                    }
                  />
                ))}
              </SafeTable>
            </CardAssetClass>
          );
        })
      ) : (
        <Center h="50vh">
          <Text color="gray.500">No Assets Detected</Text>
        </Center>
      )}
    </Stack>
  );
};

export default UserProfile;
