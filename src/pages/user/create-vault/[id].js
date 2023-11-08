import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import FormInput from "@/components/2_molecules/FormInput/FormInput";
import { GET_USER_HAVE_PROXY } from "@/graphQL/queries";
import useContractInteraction from "@/hooks/web3Hooks/useContractInteraction";
import { dummyVaults } from "@/utils/consts";
import { handleCreateUserProxy } from "@/web3/contractInteractions/haiProxyFactoryContract";
import { useQuery } from "@apollo/client";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";

const CreateVault = () => {
  const [isRefetching, setIsRefetching] = useState(false);
  const { address } = useAccount();
  const { register } = useForm();

  const { data, loading, refetch } = useQuery(GET_USER_HAVE_PROXY, {
    variables: {
      id: address?.toLowerCase(),
    },
  });

  const { onContractCall, isConnected, isRightNetwork, isSubmitting } =
    useContractInteraction(handleCreateUserProxy(), "User Proxy Created");

  return loading || isRefetching ? (
    <LoadingPage />
  ) : (
    <Stack w="100%">
      <Stack spacing="1.5rem">
        <Heading textAlign="center">Create A New Vault</Heading>
      </Stack>
      {!data?.userProxy && (
        <Stack mt="1rem">
          <Text textAlign="center">
            You need to create a user proxy before creating a safe
          </Text>
          <Flex justifyContent="center">
            <Button
              colorScheme="teal"
              variant="outline"
              isDisabled={!isConnected || !isRightNetwork}
              isLoading={isSubmitting}
              onClick={async () => {
                const res = await onContractCall();
                if (res) {
                  setIsRefetching(true);
                  await refetch();
                  setIsRefetching(false);
                }
              }}
            >
              Create User Proxy
            </Button>
          </Flex>
        </Stack>
      )}
      <Stack direction="row" justifyContent="center" mt="2rem" spacing="1.5rem">
        <Stack
          px="3rem"
          py="2rem"
          rounded="md"
          border="1px"
          spacing="1.5rem"
          w="30rem"
        >
          <Text fontSize="lg" fontWeight="semibold" textAlign="center">
            Exchange
          </Text>
          <Stack spacing="4rem">
            <Stack spacing="1rem">
              <Stack direction="row" alignItems="flex-end">
                <FormInput
                  label="Select Amount to Exchange"
                  name="amountToExchange"
                  register={register}
                />
                <Select w="8rem">
                  {dummyVaults.map((e, idx) => (
                    <option key={idx}>{e.vaultSymbol}</option>
                  ))}
                </Select>
              </Stack>
              <Stack justifyContent="space-between" w="100%" direction="row">
                <Text fontSize="sm">Balance: 12.432 ETH</Text>
                <Text fontSize="sm">ETH Price: $1,742.32</Text>
              </Stack>
            </Stack>
            <Stack spacing="1rem">
              <FormInput
                label="Exchange For"
                name="exchangeFor"
                register={register}
                inputAddon="SOZA"
              />
              <Stack justifyContent="space-between" w="100%" direction="row">
                <Link fontSize="sm">Exchange Max</Link>
                <Text fontSize="sm">SOZA Price: $1.02</Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          px="3rem"
          py="2rem"
          rounded="md"
          border="1px"
          spacing="1.5rem"
          alignItems="center"
          w="22rem"
        >
          <Text fontSize="lg" fontWeight="semibold" textAlign="center">
            Collateral Ready for Vault
          </Text>
          <Stack w="100%" spacing="2rem" fontSize="sm">
            <SimpleGrid columns={2} spacing="1rem">
              <Text>Vault Type</Text>
              <Text>ETH</Text>
            </SimpleGrid>
            <SimpleGrid columns={2} spacing="1rem">
              <Text>Total Collateral</Text>
              <Text>.77 ETH</Text>
            </SimpleGrid>
            <SimpleGrid columns={2} spacing="1rem">
              <Text>SOZA Debt</Text>
              <Text>3000 SOZA</Text>
            </SimpleGrid>
          </Stack>
          <Divider />
          <Stack w="100%" spacing="2rem" fontSize="sm">
            <SimpleGrid columns={2} spacing="1rem">
              <Text>Liquidation Penalty</Text>
              <Text>8%</Text>
            </SimpleGrid>
            <SimpleGrid columns={2} spacing="1rem">
              <Text>Vault Fee</Text>
              <Text>0.5%</Text>
            </SimpleGrid>
          </Stack>
        </Stack>
      </Stack>
      <Flex w="100%" justifyContent="center" mt="1rem">
        <Button
          isDisabled={!data?.userProxy || !isConnected || !isRightNetwork}
          colorScheme="teal"
        >
          Build Vault
        </Button>
      </Flex>
    </Stack>
  );
};

export default CreateVault;
