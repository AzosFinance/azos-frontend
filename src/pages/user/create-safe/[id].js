import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import FormInput from "@/components/2_molecules/FormInput/FormInput";
import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import { GET_USER_CREATE_SAFE } from "@/graphQL/queries";
import useContractInteraction from "@/hooks/web3Hooks/useContractInteraction";
import useGetErc20BalanceAllowance from "@/hooks/web3Hooks/useGetErc20BalanceAllowance";
import { convertToEthValueType } from "@/utils/consts";
import { convertToEth, formatNumber } from "@/utils/funcs";
import {
  handleCreateSafe,
  hanldeEncodeExecuteData,
} from "@/web3/contractInteractions/haiProxyContract";
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
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";

const CreateVault = () => {
  const [isRefetching, setIsRefetching] = useState(false);
  const [collateralAsset, setCollateralAsset] = useState("");
  const { address } = useAccount();
  const { register, watch, reset } = useForm();

  const { data, loading, refetch } = useQuery(GET_USER_CREATE_SAFE, {
    variables: {
      id: address?.toLowerCase(),
    },
  });

  useEffect(() => {
    reset({ amountToExchange: 0, exchangeFor: 0 });
  }, []);

  // USER APPROVAL, ALLOWANCE AND BALANCE
  const {
    getUserBalance,
    isLoadingContractRead,
    userAllowance,
    userBalance,
    handleApproval,
    submittingApproval,
  } = useGetErc20BalanceAllowance(collateralAsset);

  // SET collateralAsset selector
  useEffect(() => {
    if (data?.assetClasses?.length > 0) {
      setCollateralAsset(data?.assetClasses?.[0]?.collateral);
    }
  }, [data]);

  // SET state values on change selector
  const assetClass = useMemo(() => {
    if (data?.userProxy?.proxy && collateralAsset) {
      const _assetClass = data?.assetClasses?.find(
        (e) => e?.collateral === collateralAsset
      );
      getUserBalance(collateralAsset, data?.userProxy?.proxy);
      return {
        collateralTypeName: _assetClass?.collateralTypeName,
        collateralLocked: _assetClass?.collateralLocked,
        debtTokensHeld: _assetClass?.debtTokensHeld,
        collateralType: _assetClass?.collateralType,
      };
    } else {
      return {
        collateralTypeName: "",
        collateralLocked: "",
        debtTokensHeld: "",
      };
    }
  }, [collateralAsset, data]);

  // ENDODE CONTRACT CALL PARAMETERS FOR CREATE SAFE
  const callDataExecutePayload = useMemo(() => {
    if (collateralAsset && assetClass) {
      return hanldeEncodeExecuteData(
        collateralAsset,
        assetClass.collateralType,
        watch("amountToExchange"),
        watch("exchangeFor")
      );
    }
  }, [
    collateralAsset,
    assetClass,
    watch("amountToExchange"),
    watch("exchangeFor"),
  ]);

  useEffect(() => {
    console.log(callDataExecutePayload);
  }, [callDataExecutePayload]);

  // CREATE USER PROXY
  const {
    onContractCall: onContractCallCreateProxy,
    isConnected,
    isRightNetwork,
    isSubmitting: isSubmittingCreateProxy,
  } = useContractInteraction(handleCreateUserProxy(), "User Proxy Created");

  // CREATE SAFE
  const {
    onContractCall: onContractCallCreateSafe,
    isSubmitting: isSubmittingCreateSafe,
  } = useContractInteraction(
    handleCreateSafe(data?.userProxy?.proxy),
    "Deposit Completed"
  );

  return loading || isRefetching ? (
    <LoadingPage />
  ) : (
    <Stack w="100%">
      <Stack spacing="1.5rem">
        <Heading textAlign="center">Create A New Safe</Heading>
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
              isLoading={isSubmittingCreateProxy}
              onClick={async () => {
                const res = await onContractCallCreateProxy();
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
                  type="number"
                />
                <Select
                  w="8rem"
                  defaultValue={collateralAsset}
                  name="collateralAsset"
                  onChange={(e) => setCollateralAsset(e.target.value)}
                >
                  {data?.assetClasses?.map((e, idx) => (
                    <option key={idx} value={e?.collateral}>
                      {e?.collateralTypeName}
                    </option>
                  ))}
                </Select>
              </Stack>
              <Stack justifyContent="space-between" w="100%" direction="row">
                <Stack direction="row" spacing="2rem">
                  <Flex>
                    <StatInfo
                      label="Balance"
                      value={
                        formatNumber(userBalance?.readableValue) +
                        " " +
                        assetClass?.collateralTypeName
                      }
                      valueSize="sm"
                    />
                  </Flex>
                  <Flex>
                    <StatInfo
                      label="Allowance"
                      value={
                        formatNumber(userAllowance?.readableValue) +
                        " " +
                        assetClass?.collateralTypeName
                      }
                      valueSize="sm"
                    />
                  </Flex>
                </Stack>
                <Flex>
                  <StatInfo
                    label="ETH Price"
                    value="$1,742.32"
                    valueSize="sm"
                  />
                </Flex>
              </Stack>
            </Stack>
            <Stack spacing="1rem">
              <FormInput
                label="Exchange For"
                name="exchangeFor"
                register={register}
                inputAddon="SOZA"
                type="number"
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
              <Text>Asset Class</Text>
              <Text>{assetClass.collateralTypeName}</Text>
            </SimpleGrid>
            <SimpleGrid columns={2} spacing="1rem">
              <Text>Safe Collateral</Text>
              <Text>
                {formatNumber(
                  convertToEth(
                    convertToEthValueType.notReward,
                    assetClass.collateralLocked
                  )
                ) +
                  " " +
                  assetClass.collateralTypeName}
              </Text>
            </SimpleGrid>
            <SimpleGrid columns={2} spacing="1rem">
              <Text>Safe Debt</Text>
              <Text>
                {formatNumber(
                  convertToEth(
                    convertToEthValueType.notReward,
                    assetClass.debtTokensHeld
                  )
                ) + " ZAI"}
              </Text>
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
      <Stack direction="row" spacing="2rem" justifyContent="center" mt="1rem">
        <Button
          isDisabled={
            !data?.userProxy ||
            !isConnected ||
            !isRightNetwork ||
            userBalance.readableValue === "0"
          }
          colorScheme="teal"
          variant="outline"
          onClick={async () => {
            await handleApproval(data?.userProxy?.proxy);
            getUserBalance(collateralAsset, data?.userProxy?.proxy);
          }}
          isLoading={submittingApproval || isLoadingContractRead}
        >
          Approve
        </Button>
        <Button
          isLoading={submittingApproval || isLoadingContractRead}
          isDisabled={
            !data?.userProxy ||
            !isConnected ||
            !isRightNetwork ||
            userBalance.readableValue === "0"
          }
          colorScheme="teal"
        >
          Create Safe
        </Button>
      </Stack>
    </Stack>
  );
};

export default CreateVault;
