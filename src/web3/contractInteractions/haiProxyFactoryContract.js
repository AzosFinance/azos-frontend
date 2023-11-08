import { haiProxyFactoryAbi } from "../abis/haiProxyFactoryAbi";
import { HAI_PROXY_FACTORY } from "../addresses";

export const handleCreateUserProxy = () => {
  const options = {
    address: HAI_PROXY_FACTORY,
    abi: haiProxyFactoryAbi,
    functionName: "build",
  };
  return options;
};
