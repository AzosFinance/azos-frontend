import { erc20ABI } from "wagmi";

export const handleApproveErc20 = (contractAddress) => {
  const options = {
    address: contractAddress,
    abi: erc20ABI,
    functionName: "approve",
  };
  return options;
};
