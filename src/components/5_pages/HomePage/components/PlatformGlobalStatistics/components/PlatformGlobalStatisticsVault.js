import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import { formatNumber } from "@/utils/funcs";
import { Button, Stack, Text, useColorMode } from "@chakra-ui/react";

const PlatformGlobalStatisticsVault = ({ vault, children }) => {
  const { colorMode } = useColorMode();
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
            {vault.vaultName}
          </Text>
          <Button size="sm" variant="outline" colorScheme="teal">
            Explore Vaults
          </Button>
        </Stack>
        <Stack direction="row" w="100%">
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Active Vaults"
            value={vault.activeVaults}
            helper={"Total Vault " + vault.totalVaults}
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Current Price"
            value={"$ " + formatNumber(vault.currentPrice)}
            helper={vault.collateralMovementPercentage}
            withArrow
            priceIncreateType={vault.collateralMovementPercentage.substring(
              0,
              1
            )}
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label={vault.vaultSymbol + " Collateral Locked"}
            value={
              formatNumber(vault.tokenCollateralLocked) +
              " " +
              vault.vaultSymbol
            }
            helper={
              "USD " +
              formatNumber(vault.currentPrice * vault.tokenCollateralLocked)
            }
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Debt Tokens Held in Vaults"
            value={formatNumber(vault.debtTokensHeld) + " " + vault.vaultSymbol}
            helper={"USD $" + formatNumber(vault.debtTokensHeldUsd)}
          />
          <StatInfo
            valueSize="lg"
            helperSize="xs"
            label="Stability Fee"
            value={vault.vaultSurcharge}
            helper="*subject to vary in accordance with governance token oversight."
          />
        </Stack>
      </Stack>
      {children}
    </Stack>
  );
};

export default PlatformGlobalStatisticsVault;
