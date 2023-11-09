import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import useUsdAssetPriceConverter from "@/hooks/utils/useUsdAssetPriceConverter";
import { collateralPrices, convertToEthValueType } from "@/utils/consts";
import { convertToEth, formatNumber } from "@/utils/funcs";
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

  return (
    <Stack spacing="2rem" direction="row" w="100%">
      <Stack w="50%" spacing="1rem">
        <Text fontWeight="semibold" fontSize="xl">
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
          <Stack direction="row">
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
      <Stack w="50%" spacing="1rem">
        <Text fontWeight="semibold" fontSize="xl">
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
          <Stack direction="row">
            <StatInfo
              valueSize="md"
              label="Authorized Collateral "
              value="--"
            />
            <StatInfo valueSize="md" label="Balance" value="--" />
            <StatInfo valueSize="md" label="Debt" value="--" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EcosystemInformation;
