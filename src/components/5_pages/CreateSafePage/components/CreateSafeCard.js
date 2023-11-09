import FormInput from "@/components/2_molecules/FormInput/FormInput";
import StatInfo from "@/components/2_molecules/StatInfo/StatInfo";
import useUsdAssetPriceConverter from "@/hooks/utils/useUsdAssetPriceConverter";
import { collateralPrices } from "@/utils/consts";
import { formatNumber } from "@/utils/funcs";
import { Divider, Flex, Select, Stack, useColorMode } from "@chakra-ui/react";

const CreateSafeCard = ({
  register,
  assetClass,
  userBalance,
  onSetCollateral,
  data,
  ethPrice,
  collateralAsset,
}) => {
  const { colorMode } = useColorMode();
  const { getUsdAssetPrice } = useUsdAssetPriceConverter();
  return (
    <Stack
      px="3rem"
      py="2rem"
      rounded="md"
      border="1px"
      borderColor={colorMode === "light" ? "blue.200" : "gray.500"}
      spacing="1.5rem"
    >
      <Stack spacing="2rem">
        <Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
          >
            <Flex>
              <StatInfo
                textAlign="left"
                labelSize="xl"
                label={assetClass.collateralTypeName + "- ZAI"}
                value={
                  "Price: $ " +
                  getUsdAssetPrice(
                    ethPrice,
                    Number(collateralPrices[collateralAsset])
                  )?.toFixed("2")
                }
                valueSize="sm"
              />
            </Flex>
            <Flex>
              <StatInfo
                textAlign="left"
                label="Wallet Balance"
                value={
                  formatNumber(userBalance?.readableValue) +
                  " " +
                  assetClass?.collateralTypeName
                }
                valueSize="sm"
              />
            </Flex>
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing="2rem">
          <Stack spacing="1rem">
            <Stack direction="row" alignItems="flex-end">
              <FormInput
                label="Collateral Amount"
                name="amountToExchange"
                register={register}
                type="number"
              />
              <Select
                w="8rem"
                defaultValue={collateralAsset}
                name="collateralAsset"
                onChange={onSetCollateral}
              >
                {data?.assetClasses?.map((e, idx) => (
                  <option key={idx} value={e?.collateral}>
                    {e?.collateralTypeName}
                  </option>
                ))}
              </Select>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing="1rem">
            <FormInput
              label="Exchange For ZAI"
              name="exchangeFor"
              register={register}
              type="number"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CreateSafeCard;