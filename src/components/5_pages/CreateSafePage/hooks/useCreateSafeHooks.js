import useGetErc20BalanceAllowance from "@/hooks/web3Hooks/useGetErc20BalanceAllowance";
import useGetEthPrice from "@/hooks/web3Hooks/useGetEthPrice";
import useIsRightNetwork from "@/hooks/web3Hooks/useIsRightNetwork";
import { convertToEthValueType } from "@/utils/consts";
import { convertToEth, convertToWei, formatNumber } from "@/utils/funcs";
import { BCT_ADDRESS, REI_ADDRESS } from "@/web3/addresses";
import { hanldeEncodeExecuteData } from "@/web3/contractInteractions/haiProxyContract";
import { useMemo } from "react";

const useCreateSafeHooks = (collateralAsset, amountToExchange, data) => {
  const { getUserBalance, userBalance, isLoadingContractRead } =
    useGetErc20BalanceAllowance(collateralAsset);

  const { ethPrice, loadingEthPrice, refetchEthPrice } = useGetEthPrice();

  const { isRightNetwork } = useIsRightNetwork();

  const assetClass = useMemo(() => {
    if (collateralAsset) {
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
    } else
      return {
        collateralTypeName: "",
        collateralLocked: "",
        debtTokensHeld: "",
        collateralType: "",
      };
  }, [collateralAsset, data]);

  const callDataAndDeltaWad = useMemo(() => {
    if (collateralAsset && assetClass && amountToExchange > 0) {
      let _deltaWad;
      if (collateralAsset === BCT_ADDRESS || collateralAsset === REI_ADDRESS) {
        _deltaWad = convertToWei(amountToExchange?.toString());
      } else {
        _deltaWad = convertToWei(amountToExchange?.toString()).div("2");
      }
      return {
        endodedDataFunction: hanldeEncodeExecuteData(
          collateralAsset,
          assetClass.collateralType,
          convertToWei(amountToExchange?.toString()),
          _deltaWad
        ),
        deltaWad: formatNumber(
          convertToEth(convertToEthValueType.notReward, _deltaWad?.toString())
        ),
      };
    } else
      return {
        endodedDataFunction: "",
        deltaWad: "0",
      };
  }, [collateralAsset, assetClass, amountToExchange]);

  const isUserBalanceZero = useMemo(() => {
    if (userBalance.bigNumber._isBigNumber) {
      return userBalance.bigNumber.isZero();
    } else {
      return true;
    }
  }, [userBalance.bigNumber]);

  return {
    callDataAndDeltaWad,
    assetClass,
    userBalance,
    ethPrice,
    loadingEthPrice,
    isLoadingContractRead,
    isRightNetwork,
    isUserBalanceZero,
  };
};

export default useCreateSafeHooks;
