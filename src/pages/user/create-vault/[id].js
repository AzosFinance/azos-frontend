import FormInput from "@/components/2_molecules/FormInput/FormInput";
import FormSelect from "@/components/2_molecules/FormSelect/FormSelect";
import { dummyVaults } from "@/utils/consts";
import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const CreateVault = () => {
  const { register } = useForm();
  return (
    <Stack w="100%" h="100vh">
      <Stack spacing="1.5rem">
        <Heading textAlign="center">Create A New Vault</Heading>
      </Stack>
      <Stack direction="row" mt="2rem" spacing="1.5rem">
        <Stack spacing="1.5rem">
          <Stack
            px="3rem"
            py="1rem"
            rounded="md"
            border="1px"
            spacing="1.5rem"
            alignItems="center"
            w="25rem"
          >
            <Flex border="1px" rounded="md" px="1rem" py="0.3rem">
              <Text textAlign="center">Add Input Collateral</Text>
            </Flex>
            <FormSelect
              label="Select Collateral"
              name="inputCollateral"
              register={register}
              options={dummyVaults.map((e) => {
                return { label: e.vaultSymbol, value: e.vaultSymbol };
              })}
            />
            <Stack alignItems="flex-start" w="100%">
              <Text fontSize="sm">ETH Price: $1,742.32</Text>
            </Stack>
          </Stack>
          <Stack
            px="3rem"
            py="1rem"
            rounded="md"
            border="1px"
            spacing="1.5rem"
            alignItems="center"
            w="25rem"
          >
            <Flex border="1px" rounded="md" px="1rem" py="0.3rem">
              <Text textAlign="center">Output Token</Text>
            </Flex>
            <FormSelect
              label="Select Output Token"
              name="outputToken"
              register={register}
              options={dummyVaults.map((e) => {
                return { label: e.vaultSymbol, value: e.vaultSymbol };
              })}
            />
            <Stack alignItems="flex-start" w="100%">
              <Text fontSize="sm">ETH Price: $1,742.32</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          px="3rem"
          py="1rem"
          rounded="md"
          border="1px"
          spacing="1.5rem"
          alignItems="center"
          w="25rem"
        >
          <Flex border="1px" rounded="md" px="1rem" py="0.3rem">
            <Text textAlign="center">Exchange</Text>
          </Flex>
          <Stack spacing="4rem">
            <Stack spacing="1rem">
              <FormInput
                label="Select Amount to Exchange"
                name="amountToExchange"
                register={register}
                inputAddon="ETH"
              />
              <Stack alignItems="flex-start" w="100%">
                <Text fontSize="sm">Remaining Wallet Balance: 12.432 ETH</Text>
              </Stack>
            </Stack>
            <Stack spacing="1rem">
              <FormInput
                label="Exchange For"
                name="exchangeFor"
                register={register}
                inputAddon="ETH"
              />
              <Stack alignItems="flex-start" w="100%">
                <Text fontSize="sm">Exchange Max</Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          px="3rem"
          py="1rem"
          rounded="md"
          border="1px"
          spacing="1.5rem"
          alignItems="center"
          w="25rem"
        >
          <Flex border="1px" rounded="md" px="1rem" py="0.3rem">
            <Text textAlign="center">Collateral Ready for Vault</Text>
          </Flex>
          <Stack w="100%" spacing="2rem" p="1rem" border="1px" rounded="md">
            <SimpleGrid columns={2}>
              <Text>Total Collateral</Text>
              <Text>.77 ETH</Text>
            </SimpleGrid>
            <SimpleGrid columns={2}>
              <Text>m-ETH debt</Text>
              <Text></Text>
            </SimpleGrid>
            <SimpleGrid columns={2}>
              <Text>Collateral Type</Text>
              <Text>ETH</Text>
            </SimpleGrid>
          </Stack>
          <Stack w="100%" spacing="2rem" p="1rem" border="1px" rounded="md">
            <SimpleGrid columns={2}>
              <Text>Liquidation Penalty</Text>
              <Text>18-20%</Text>
            </SimpleGrid>
            <SimpleGrid columns={2}>
              <Text>Vault Fee</Text>
              <Text>0.5%</Text>
            </SimpleGrid>
          </Stack>
        </Stack>
      </Stack>
      <Flex w="100%" justifyContent="center" mt="1rem">
        <Button colorScheme="teal">Build Vault</Button>
      </Flex>
    </Stack>
  );
};

export default CreateVault;
