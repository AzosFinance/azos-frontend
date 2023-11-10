import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import { GET_USER_CREATE_SAFE } from "@/graphQL/queries";
import { useQuery } from "@apollo/client";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import CreateProxy from "./components/CreateProxy";
import CreateSafeCard from "./components/CreateSafeCard";
import CreateSafeStepsCard from "./components/CreateSafeStepsCard";
import useCreateSafeHooks from "../../../hooks/utils/useCreateSafeHooks";

const CreateSafePage = () => {
  const [isRefetching, setIsRefetching] = useState(false);
  const [collateralAsset, setCollateralAsset] = useState("");
  const { address, isConnected } = useAccount();
  const { register, watch, control, setValue } = useForm();

  const { data, loading, refetch } = useQuery(GET_USER_CREATE_SAFE, {
    variables: {
      id: address?.toLowerCase(),
    },
  });

  // HOOK UTILS
  const {
    callDataAndDeltaWad,
    assetClass,
    ethPrice,
    loadingEthPrice,
    userBalance,
    isLoadingContractRead,
    isRightNetwork,
    isUserBalanceZero,
  } = useCreateSafeHooks(collateralAsset, watch("amountToExchange"), data);

  // SET collateralAsset selector
  useEffect(() => {
    if (data?.assetClasses?.length > 0) {
      setCollateralAsset(data?.assetClasses?.[0]?.collateral);
    }
  }, [data]);

  return loading || isRefetching || loadingEthPrice ? (
    <LoadingPage />
  ) : (
    <Stack w="100%" spacing="3rem" mt="2rem">
      <Stack spacing="1.5rem">
        <Heading textAlign="center">Create A New Safe</Heading>
      </Stack>
      {!data?.userProxy && (
        <CreateProxy
          onRefecth={async () => {
            setIsRefetching(true);
            await refetch();
            setIsRefetching(false);
          }}
        />
      )}
      <Stack
        direction={["column", "column", "row"]}
        spacing="2rem"
        justifyContent="center"
      >
        <Flex>
          <CreateSafeCard
            register={register}
            assetClass={assetClass}
            data={data}
            onSetCollateral={(e) => setCollateralAsset(e.target.value)}
            userBalance={userBalance}
            ethPrice={ethPrice}
            collateralAsset={collateralAsset}
            deltaWad={callDataAndDeltaWad?.deltaWad}
            control={control}
            setValue={setValue}
          />
        </Flex>
        <CreateSafeStepsCard
          assetClass={assetClass}
          disableCreateButton={
            !isConnected || !isRightNetwork || isUserBalanceZero
          }
          disableApprovalButton={!isConnected || !isRightNetwork}
          loading={isLoadingContractRead}
          endodedDataFunction={callDataAndDeltaWad?.endodedDataFunction}
          proxy={data?.userProxy?.proxy}
          collateralAsset={collateralAsset}
          amountToExchange={watch("amountToExchange")}
        />
      </Stack>
    </Stack>
  );
};

export default CreateSafePage;
