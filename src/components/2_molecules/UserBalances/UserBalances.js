import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import { Skeleton, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
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
import { convertToEthValueType, tokenNames } from "@/utils/consts";
import useIsOwner from "@/hooks/utils/useIsOwner";

const tokens = [
  { address: BCT_ADDRESS, name: tokenNames.bct },
  { address: FGB_ADDRESS, name: tokenNames.fgb },
  { address: REI_ADDRESS, name: tokenNames.rei },
  { address: ZAI_ADDRESS, name: tokenNames.zai },
];

const UserBalances = ({ minW = "26.5rem" }) => {
  const [collateralTokens, setCollateralTokens] = useState([
    { balance: 0, name: tokenNames.bct },
    { balance: 0, name: tokenNames.fgb },
    { balance: 0, name: tokenNames.rei },
    { balance: 0, name: tokenNames.zai },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { isOwner } = useIsOwner(router.query.id);

  useEffect(() => {
    const getBalances = async () => {
      setIsLoading(true);
      if (isOwner && isConnected) {
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

  return isOwner && isConnected ? (
    isLoading ? (
      <Skeleton minW={minW} h="5.5rem" />
    ) : (
      <Stack spacing="0.5rem">
        <Text fontWeight="semibold">User Assets</Text>
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
      </Stack>
    )
  ) : (
    <></>
  );
};

export default UserBalances;
