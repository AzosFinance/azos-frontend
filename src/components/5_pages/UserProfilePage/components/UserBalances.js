import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import { Skeleton, Wrap, WrapItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAccount, erc20ABI } from "wagmi";
import { readContracts } from "@wagmi/core";
import {
  BCT_ADDRESS,
  FGB_ADDRESS,
  REI_ADDRESS,
  ZAI_ADDRESS,
} from "@/web3/addresses";
import { zeroAddress } from "viem";
import { useEffect, useState } from "react";
import { convertToEth, formatNumber } from "@/utils/funcs";
import { convertToEthValueType } from "@/utils/consts";

const tokens = [
  { address: BCT_ADDRESS, name: "BCT" },
  { address: FGB_ADDRESS, name: "FGB" },
  { address: REI_ADDRESS, name: "REI" },
  { address: ZAI_ADDRESS, name: "ZAI" },
];

const UserBalances = () => {
  const [collateralTokens, setCollateralTokens] = useState([
    { balance: 0, name: "BCT" },
    { balance: 0, name: "FGB" },
    { balance: 0, name: "REI" },
    { balance: 0, name: "ZAI" },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { address, isConnected } = useAccount();

  useEffect(() => {
    const getBalances = async () => {
      setIsLoading(true);
      if (router.query.id === address?.toLowerCase() && isConnected) {
        const _tokens = tokens?.map((e) => {
          return {
            address: e?.address,
            abi: erc20ABI,
            functionName: "balanceOf",
            args: [address ? address : zeroAddress],
          };
        });
        const res = await readContracts({
          contracts: _tokens,
        });
        setCollateralTokens(
          res?.map((e, idx) => {
            return {
              name: tokens[idx]?.name,
              balance: e?.result,
            };
          })
        );
      }
      setIsLoading(false);
    };
    getBalances();
  }, [address, isConnected]);

  return router.query.id === address?.toLowerCase() && isConnected ? (
    isLoading ? (
      <Skeleton minW="40%" h="3rem" />
    ) : (
      <Wrap
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing="2rem"
      >
        {collateralTokens?.map((e, idx) => {
          return (
            <WrapItem key={idx}>
              <StatInfo
                label={e?.name + " Balance"}
                value={
                  formatNumber(
                    convertToEth(convertToEthValueType.notReward, e?.balance)
                  ) +
                  " " +
                  e?.name
                }
                valueSize="sm"
                textAlign="left"
              />
            </WrapItem>
          );
        })}
      </Wrap>
    )
  ) : (
    <></>
  );
};

export default UserBalances;
