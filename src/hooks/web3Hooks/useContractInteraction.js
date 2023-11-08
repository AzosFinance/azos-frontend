import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useAccount, useContractWrite } from "wagmi";
import { waitForTransaction } from "wagmi/actions";
import useIsRightNetwork from "./useIsRightNetwork";

const useContractInteraction = (
  contractData,
  toastMessage,
  args = [],
  value = "0"
) => {
  const [submittingTransaction, setSubmittingTransaction] = useState(false);

  const { address, isConnected } = useAccount();
  const { writeAsync, isLoading } = useContractWrite(contractData);
  const toast = useToast();

  const { isRightNetwork } = useIsRightNetwork();

  const onContractCall = async () => {
    let response;
    if (isConnected && isRightNetwork) {
      setSubmittingTransaction(true);
      try {
        const res = await writeAsync?.({
          args,
          from: address,
          value,
        });
        const { status } = await waitForTransaction({
          hash: res?.hash,
        });
        if (status === "success") {
          toast({
            title: toastMessage,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setSubmittingTransaction(false);
          response = true;
        }
      } catch (error) {
        toast({
          title: "Error",
          description: error.name,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setSubmittingTransaction(false);
      }
    }
    return response;
  };
  return {
    onContractCall,
    isSubmitting: isLoading || submittingTransaction,
    isRightNetwork,
    address,
    isConnected,
  };
};

export default useContractInteraction;
