import { uniswapPoolAbi } from "@/web3/abis/uniswapPoolAbi";
import { UNISWAP_POOL } from "@/web3/addresses";
import { useMemo } from "react";
import { useContractRead } from "wagmi";

const useZaiPrice = () => {
  const { data: uniswapGetReserves, isLoading: isLoadingUniswapGetReserves } =
    useContractRead({
      address: UNISWAP_POOL,
      abi: uniswapPoolAbi,
      functionName: "getReserves",
    });

  const zaiPrice = useMemo(() => {
    if (uniswapGetReserves?.length > 0) {
      const _zaiPrice = (
        Number(uniswapGetReserves?.[0]) / Number(uniswapGetReserves?.[1])
      )?.toFixed(3);
      return _zaiPrice;
    } else {
      return "--";
    }
  }, [uniswapGetReserves]);

  return { zaiPrice, isLoadingUniswapGetReserves };
};

export default useZaiPrice;
