import { useMemo } from "react";
import { useAccount } from "wagmi";

const useIsOwner = (addressToCompare) => {
  const { address, isConnected } = useAccount();

  const isOwner = useMemo(() => {
    if ((isConnected, addressToCompare)) {
      return addressToCompare?.toLowerCase() === address?.toLowerCase();
    } else {
      false;
    }
  }, [address, isConnected]);

  return { isOwner };
};

export default useIsOwner;
