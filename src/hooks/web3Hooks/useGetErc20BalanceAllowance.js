import { useState } from "react";
import { zeroAddress } from "viem";
import { erc20ABI, useAccount, useContractWrite } from "wagmi";
import { readContracts } from "@wagmi/core";
import { convertToEth, convertToWei } from "@/utils/funcs";
import { useToast } from "@chakra-ui/react";
import { handleApproveErc20 } from "@/web3/contractInteractions/erc20Contract";
import { waitForTransaction } from "wagmi/actions";
import useIsRightNetwork from "./useIsRightNetwork";
import { convertToEthValueType } from "@/utils/consts";

const useGetErc20BalanceAllowance = (tokenAddress) => {
  const [userBalance, setUserBalance] = useState({
    readableValue: 0,
    bigNumber: {},
  });
  const [userAllowance, setUserAllowance] = useState({
    readableValue: 0,
    bigNumber: {},
  });
  const [isLoadingContractRead, setIsLoadingContractRead] = useState(false);
  const [submittingApproval, setSubmittingApproval] = useState(false);

  const { address, isConnected } = useAccount();
  const toast = useToast();

  const { writeAsync: writeApprove, isLoading: isLoadingApprove } =
    useContractWrite(handleApproveErc20(tokenAddress));

  const { isRightNetwork } = useIsRightNetwork();

  const getUserBalance = async (
    tokenAddress,
    allowanceTo,
    fetchAllowance = true
  ) => {
    if (isConnected && isRightNetwork) {
      setIsLoadingContractRead(true);
      try {
        const contractBalance = {
          address: tokenAddress,
          abi: erc20ABI,
          functionName: "balanceOf",
          args: [address ? address : zeroAddress],
        };
        const contractAllowance = {
          address: tokenAddress,
          abi: erc20ABI,
          functionName: "allowance",
          args: [address ? address : zeroAddress, allowanceTo],
        };
        const res = await readContracts({
          contracts: fetchAllowance
            ? [contractBalance, contractAllowance]
            : [contractBalance],
        });
        setUserBalance({
          readableValue: convertToEth(
            convertToEthValueType.reward,
            res?.[0]?.result
          ),
          bigNumber: convertToWei(
            convertToEth(
              convertToEthValueType.reward,
              res?.[0]?.result
            ).toString()
          ),
        });
        {
          fetchAllowance &&
            setUserAllowance({
              readableValue: convertToEth(
                convertToEthValueType.reward,
                res?.[1]?.result
              ),
              bigNumber: convertToWei(
                convertToEth(
                  convertToEthValueType.reward,
                  res?.[1]?.result
                ).toString()
              ),
            });
        }
        setIsLoadingContractRead(false);
      } catch (error) {
        toast({
          title: "Error",
          description: error.name,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setIsLoadingContractRead(false);
      }
    }
  };

  const handleApproval = async (allowanceTo, amount) => {
    if (isConnected && isRightNetwork) {
      setSubmittingApproval(true);
      try {
        const contractPayload = {
          args: [allowanceTo, amount ? amount : userBalance.bigNumber],
          from: address,
        };
        const res = await writeApprove(contractPayload);
        const { status } = await waitForTransaction({
          hash: res?.hash,
        });
        if (status === "success") {
          toast({
            title: "Token Approved!",
            description: "You can now use tokens",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setSubmittingApproval(false);
          return true;
        }
      } catch (error) {
        toast({
          title: "Error",
          description: error.name,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setSubmittingApproval(false);
      }
    }
  };

  return {
    getUserBalance,
    userBalance,
    userAllowance,
    isLoadingContractRead,
    handleApproval,
    submittingApproval: isLoadingApprove || submittingApproval,
  };
};

export default useGetErc20BalanceAllowance;
