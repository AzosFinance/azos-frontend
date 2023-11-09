import { oraclePriceFeedAbi } from "@/web3/abis/oraclePriceFeedAbi";
import { ORACLE_PRICE_FEED } from "@/web3/addresses";
import { useContractRead } from "wagmi";

const useGetEthPrice = () => {
  const { data, isLoading } = useContractRead({
    address: ORACLE_PRICE_FEED,
    abi: oraclePriceFeedAbi,
    functionName: "read",
  });

  return { ethPrice: data, loadingEthPrice: isLoading };
};

export default useGetEthPrice;
