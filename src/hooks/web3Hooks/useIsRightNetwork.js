import { useNetwork } from "wagmi";
import { sepolia } from "wagmi/chains";

const useIsRightNetwork = () => {
  const { chain } = useNetwork();

  return { isRightNetwork: sepolia?.id === chain?.id };
};

export default useIsRightNetwork;
