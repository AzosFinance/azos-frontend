import { haiProxyAbi } from "../abis/haiProxyAbi";
import { encodeFunctionData } from "viem";
import { basicActionsMockAbi } from "../abis/basicActionsMockAbi";
import { COIN_JOIN, HAI_SAFE_MANAGER, TAX_COLLECTOR } from "../addresses";
import { collateralJoinAddresses } from "@/utils/consts";

export const handleCreateSafe = (contractAddress) => {
  const options = {
    address: contractAddress,
    abi: haiProxyAbi,
    functionName: "execute",
  };
  return options;
};

export const hanldeEncodeExecuteData = (
  collateralAddress,
  cType,
  collateralAmount,
  deltaWad
) => {
  if (collateralAddress && cType) {
    const payload = {
      abi: basicActionsMockAbi,
      functionName: "openLockTokenCollateralAndGenerateDebt",
      args: [
        HAI_SAFE_MANAGER,
        TAX_COLLECTOR,
        collateralJoinAddresses[collateralAddress],
        COIN_JOIN,
        cType,
        collateralAmount,
        deltaWad,
      ],
    };
    return encodeFunctionData(payload);
  }
};
