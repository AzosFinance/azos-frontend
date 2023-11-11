import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import useUsdAssetPriceConverter from "@/hooks/utils/useUsdAssetPriceConverter";
import {
  collateralPrices,
  convertToEthValueType,
  tokenNames,
} from "@/utils/consts";
import { convertToEth, convertToWei, formatNumber } from "@/utils/funcs";
import { Button, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiLogoReact } from "react-icons/bi";
import { useAccount } from "wagmi";

const CardAssetClass = ({
  safe,
  children,
  ethPrice,
  activeSafes,
  collateralLocked,
  debtTokensHeld,
  isFromUserProfile = false,
  isOwner = false,
}) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const { address } = useAccount();

  const { getUsdAssetPrice } = useUsdAssetPriceConverter();

  return (
    <Stack>
      <Stack
        direction={["column", "column", "row"]}
        p="1rem"
        border="1px"
        rounded="md"
        spacing="2rem"
        alignItems="center"
        borderColor={colorMode === "light" ? "orange.200" : "gray.500"}
        shadow="lg"
      >
        <Stack>
          <Text textAlign="center" fontSize="2xl" fontWeight="semibold">
            {safe?.collateralTypeName}
          </Text>
          <Button
            size="sm"
            variant="outline"
            colorScheme="blue"
            rightIcon={<BiLogoReact />}
            onClick={() =>
              router.push("/asset-class/" + safe?.collateralTypeName)
            }
          >
            Explore All Safes
          </Button>
        </Stack>
        <Stack direction={["column", "column", "row"]} w="100%" spacing="1rem">
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label={
              isFromUserProfile
                ? isOwner
                  ? "Your Active Vaults"
                  : "Active Vaults"
                : "Active Vaults"
            }
            value={activeSafes}
          />
          {!isFromUserProfile && (
            <StatInfo
              valueSize="lg"
              helperSize="xs"
              label={`Current ${safe?.collateralTypeName} Price`}
              value={
                "$ " +
                getUsdAssetPrice(
                  ethPrice,
                  Number(collateralPrices[safe?.collateral])
                )?.toFixed("2")
              }
            />
          )}
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label={
              isFromUserProfile
                ? isOwner
                  ? "Your " + safe?.collateralTypeName + " Collateral Locked"
                  : safe?.collateralTypeName + " Collateral Locked"
                : safe?.collateralTypeName + " Collateral Locked"
            }
            value={
              formatNumber(
                convertToEth(convertToEthValueType.notReward, collateralLocked)
              ) +
              " " +
              safe?.collateralTypeName
            }
            helper={
              "$ " +
              formatNumber(
                getUsdAssetPrice(
                  ethPrice,
                  Number(collateralPrices[safe?.collateral]) *
                    convertToEth(
                      convertToEthValueType.notReward,
                      collateralLocked
                    )
                )?.toFixed("0")
              )
            }
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label={
              isFromUserProfile
                ? isOwner
                  ? "Your Total Debt"
                  : "Total Debt"
                : "Total Debt"
            }
            value={
              formatNumber(
                convertToEth(convertToEthValueType.notReward, debtTokensHeld)
              ) +
              " " +
              tokenNames.zai
            }
            helper={
              "$ " +
              formatNumber(
                convertToEth(convertToEthValueType.notReward, debtTokensHeld)
              )
            }
          />
          {!isFromUserProfile && (
            <StatInfo
              valueSize="lg"
              helperSize="xs"
              label="Stability Fee"
              value="2%"
            />
          )}
        </Stack>
      </Stack>
      {children}
    </Stack>
  );
};

export default CardAssetClass;
