import { collateralTokenAbi } from "../abis/collateralTokenAbi";

export const handleMintCollateralToken = (contractAddress) => {
  const options = {
    address: contractAddress,
    abi: collateralTokenAbi,
    functionName: "mint",
  };
  return options;
};
