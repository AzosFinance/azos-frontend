import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import useUsdAssetPriceConverter from "@/hooks/utils/useUsdAssetPriceConverter";
import {
  collateralPrices,
  convertToEthValueType,
  tokenNames,
} from "@/utils/consts";
import { convertToEth, formatNumber, weiToBigNumber } from "@/utils/funcs";
import { Stack, Text, useColorMode } from "@chakra-ui/react";
import { useMemo } from "react";

const EcosystemInformation = ({ data, ethPrice }) => {
  const { colorMode } = useColorMode();
  const { getUsdAssetPrice } = useUsdAssetPriceConverter();

  const totalTvl = useMemo(() => {
    if (data?.assetClasses?.length > 0 && ethPrice) {
      let _totalTvl = 0;
      for (let i = 0; i < data?.assetClasses?.length; i++) {
        _totalTvl += getUsdAssetPrice(
          ethPrice,
          Number(collateralPrices[data?.assetClasses[i]?.collateral]) *
            convertToEth(
              convertToEthValueType.notReward,
              data?.assetClasses[i]?.collateralLocked
            )
        );
      }
      return formatNumber(_totalTvl?.toFixed("0"));
    } else {
      return "--";
    }
  }, [data]);

  const equiti = useMemo(() => {
    if (data?.stabilityModule) {
      const _balance = weiToBigNumber(data?.stabilityModule?.balance);
      const _debt = weiToBigNumber(data?.stabilityModule?.debt);
      const _total = _balance.sub(_debt).toString();
      return formatNumber(
        convertToEth(convertToEthValueType.notReward, _total)
      );
    } else {
      return "0";
    }
  }, [data]);

  return (
    <Stack spacing="2rem" direction={["column", "column", "row"]} w="100%">
      <Stack w={["100%", "100%", "50%"]} spacing="1rem">
        <Text
          textAlign={["center", "center", "left"]}
          fontWeight="semibold"
          fontSize="xl"
        >
          Ecosystem Information
        </Text>
        <Stack
          p="1rem"
          rounded="md"
          border="1px"
          spacing="1rem"
          borderColor={colorMode === "light" ? "blue.200" : "gray.500"}
          shadow="lg"
        >
          <Stack direction={["column", "column", "row"]} spacing="1rem">
            <StatInfo valueSize="md" label="TVL" value={"$ " + totalTvl} />
            <StatInfo
              valueSize="md"
              label="Debt Outstanding"
              value={
                "$ " +
                formatNumber(
                  convertToEth(
                    convertToEthValueType.notReward,
                    data?.ecosystemInfo?.totalDebt
                  )
                )
              }
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack w={["100%", "100%", "50%"]} spacing="1rem">
        <Text
          textAlign={["center", "center", "left"]}
          fontWeight="semibold"
          fontSize="xl"
        >
          Stability Module
        </Text>
        <Stack
          p="1rem"
          rounded="md"
          border="1px"
          spacing="1rem"
          borderColor={colorMode === "light" ? "blue.200" : "gray.500"}
          shadow="lg"
        >
          <Stack direction={["column", "column", "row"]} spacing="1rem">
            <StatInfo
              valueSize="md"
              label="Balance"
              value={
                formatNumber(
                  convertToEth(
                    convertToEthValueType.noDecimals,
                    data?.stabilityModule?.balance
                  )
                ) +
                " " +
                tokenNames.usdc
              }
            />
            <StatInfo
              valueSize="md"
              label="Debt"
              value={
                formatNumber(
                  convertToEth(
                    convertToEthValueType.noDecimals,
                    data?.stabilityModule?.debt
                  )
                ) +
                " " +
                tokenNames.zai
              }
            />
            <StatInfo valueSize="md" label="Equity" value={"$ " + equiti} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EcosystemInformation;
