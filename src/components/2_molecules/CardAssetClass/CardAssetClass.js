import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import { convertToEthValueType } from "@/utils/consts";
import { convertToEth, formatNumber } from "@/utils/funcs";
import { Button, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";

const CardAssetClass = ({ vault, children }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Stack>
      <Stack
        direction="row"
        p="1rem"
        border="1px"
        rounded="md"
        spacing="2rem"
        alignItems="center"
        bg={colorMode === "light" ? "gray.300" : "gray.900"}
        shadow="lg"
      >
        <Stack>
          <Text textAlign="center" fontSize="2xl" fontWeight="semibold">
            {vault?.collateralTypeName}
          </Text>
          <Button
            size="sm"
            variant="outline"
            colorScheme="teal"
            onClick={() => router.push("/asset-class/" + vault?.collateralType)}
          >
            Explore Vaults
          </Button>
        </Stack>
        <Stack direction="row" w="100%">
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Active Vaults"
            value={vault?.activeVaults}
            helper={"Total Vault " + vault?.activeVaults}
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Current Price"
            value={"$ " + formatNumber(vault?.currentPrice)}
            helper={vault?.collateralMovementPercentage}
            withArrow
            priceIncreateType={vault?.collateralMovementPercentage?.substring(
              0,
              1
            )}
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label={vault?.collateralTypeName + " Collateral Locked"}
            value={
              formatNumber(
                convertToEth(
                  convertToEthValueType.notReward,
                  vault?.collateralLocked
                )
              ) +
              " " +
              vault?.collateralTypeName
            }
            helper={
              "USD " +
              formatNumber(vault?.currentPrice * vault?.tokenCollateralLocked)
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
                  vault?.debtTokensHeld
                )
              ) + " ZAI"
            }
            helper={
              "USD $" +
              formatNumber(
                convertToEth(
                  convertToEthValueType.notReward,
                  vault?.debtTokensHeld
                )
              )
            }
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Stability Fee"
            value="2%"
            helper="*subject to vary in accordance with governance token oversight."
          />
        </Stack>
      </Stack>
      {children}
    </Stack>
  );
};

export default CardAssetClass;
