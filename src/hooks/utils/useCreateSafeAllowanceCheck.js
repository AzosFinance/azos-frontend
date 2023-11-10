import { convertToEthValueType } from "@/utils/consts";
import { convertToEth, convertToWei } from "@/utils/funcs";
import { useMemo } from "react";
import { erc20ABI, useAccount, useContractRead } from "wagmi";

const useCreateSafeAllowanceCheck = (
  collateralAsset,
  proxy,
  amountToExchange,
  userBalance,
  isUserBalanceZero
) => {
  const { address } = useAccount();
  const {
    data: dataUserAllowance,
    isLoading: isLoadingUserAllowance,
    refetch,
  } = useContractRead({
    address: collateralAsset,
    abi: erc20ABI,
    functionName: "allowance",
    args: [address, proxy],
  });

  const allowanceCheck = useMemo(() => {
    const _userAllowance = convertToWei(
      convertToEth(convertToEthValueType.reward, dataUserAllowance).toString()
    );
    const _amountToExchance = convertToWei(amountToExchange?.toString());

    const _isAllowanceEnough = _userAllowance.gte(_amountToExchance);

    const _isAllowanceZero = _userAllowance?.isZero();
    if (_isAllowanceZero) {
      return false;
    } else {
      if (!amountToExchange) {
        return true;
      } else {
        return _isAllowanceEnough;
      }
    }
  }, [dataUserAllowance, amountToExchange]);

  const balanceToDepositCorrect = useMemo(() => {
    if (userBalance.bigNumber._isBigNumber) {
      if (isUserBalanceZero) {
        return false;
      } else {
        if (
          userBalance.bigNumber.gte(convertToWei(amountToExchange?.toString()))
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }, [userBalance.bigNumber, amountToExchange]);

  return {
    allowanceCheck,
    dataUserAllowance,
    isLoadingUserAllowance,
    address,
    refetch,
    balanceToDepositCorrect,
  };
};

export default useCreateSafeAllowanceCheck;
