import LoadingPage from "@/components/1_atoms/LoadingPage/LoadingPage";
import { GET_USER_CREATE_SAFE } from "@/graphQL/queries";
import useContractInteraction from "@/hooks/web3Hooks/useContractInteraction";
import useGetErc20BalanceAllowance from "@/hooks/web3Hooks/useGetErc20BalanceAllowance";
import useGetEthPrice from "@/hooks/web3Hooks/useGetEthPrice";
import {
  handleCreateSafe,
  hanldeEncodeExecuteData,
} from "@/web3/contractInteractions/haiProxyContract";
import { useQuery } from "@apollo/client";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import CreateProxy from "./components/CreateProxy";
import CreateSafeCard from "./components/CreateSafeCard";
import CreateSafeStepsCard from "./components/CreateSafeStepsCard";
import { convertToWei } from "@/utils/funcs";

const CreateSafePage = () => {
  const [isRefetching, setIsRefetching] = useState(false);
  const [collateralAsset, setCollateralAsset] = useState("");
  const { address } = useAccount();
  const { register, watch, reset } = useForm();

  const { data, loading, refetch } = useQuery(GET_USER_CREATE_SAFE, {
    variables: {
      id: address?.toLowerCase(),
    },
  });

  const { ethPrice, loadingEthPrice, refetchEthPrice } = useGetEthPrice();

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
      refetchEthPrice();
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

  // CREATE SAFE
  const {
    onContractCall: onContractCallCreateSafe,
    isSubmitting: isSubmittingCreateSafe,
    isConnected,
    isRightNetwork,
  } = useContractInteraction(
    handleCreateSafe(data?.userProxy?.proxy),
    "Deposit Completed"
  );

  return loading || isRefetching || loadingEthPrice || isLoadingContractRead ? (
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
      <Stack direction="row" spacing="2rem" justifyContent="center">
        <Flex>
          <CreateSafeCard
            register={register}
            assetClass={assetClass}
            data={data}
            onSetCollateral={(e) => setCollateralAsset(e.target.value)}
            userBalance={userBalance}
            ethPrice={ethPrice}
            collateralAsset={collateralAsset}
          />
        </Flex>
        <CreateSafeStepsCard
          assetClass={assetClass}
          submittingApproval={submittingApproval}
          onApproval={() =>
            handleApproval(
              data?.userProxy?.proxy,
              convertToWei(watch("amountToExchange"))
            )
          }
          onCreateSafe={() => console.log("create")}
          disableCreateButton={true}
          disableApprovalButton={!isConnected || !isRightNetwork}
        />
      </Stack>
    </Stack>
  );
};

export default CreateSafePage;
