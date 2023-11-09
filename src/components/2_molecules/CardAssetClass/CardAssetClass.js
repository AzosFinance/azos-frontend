import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import useUsdAssetPriceConverter from "@/hooks/utils/useUsdAssetPriceConverter";
import { collateralPrices, convertToEthValueType } from "@/utils/consts";
import { convertToEth, formatNumber } from "@/utils/funcs";
import { Button, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiLogoReact } from "react-icons/bi";

const CardAssetClass = ({ safe, children, ethPrice }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const { getUsdAssetPrice } = useUsdAssetPriceConverter();

  return (
    <Stack>
      <Stack
        direction="row"
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
            onClick={() => router.push("/asset-class/" + safe?.collateralType)}
          >
            Explore Safes
          </Button>
        </Stack>
        <Stack direction="row" w="100%">
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Active Vaults"
            value={safe?.activeSafes}
          />
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
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label={safe?.collateralTypeName + " Collateral Locked"}
            value={
              formatNumber(
                convertToEth(
                  convertToEthValueType.notReward,
                  safe?.collateralLocked
                )
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
                      safe?.collateralLocked
                    )
                )?.toFixed("0")
              )
            }
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Vault Debt"
            value={
              formatNumber(
                convertToEth(
                  convertToEthValueType.notReward,
                  safe?.debtTokensHeld
                )
              ) + " ZAI"
            }
            helper={
              "$ " +
              formatNumber(
                convertToEth(
                  convertToEthValueType.notReward,
                  safe?.debtTokensHeld
                )
              )
            }
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Stability Fee"
            value="2%"
          />
        </Stack>
      </Stack>
      {children}
    </Stack>
  );
};

export default CardAssetClass;
